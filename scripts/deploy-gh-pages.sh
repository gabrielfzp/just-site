#!/usr/bin/env bash
# ============================================================
# Deploy do site institucional para o GitHub Pages (wearejust.it)
#
#   ./scripts/deploy-gh-pages.sh
#
# Existe por causa de duas quebras reais em producao:
#
# 1. `git commit -a` NAO adiciona arquivo novo. Como os bundles tem hash no
#    nome, todo build gera nomes novos: o commit levava so as remocoes e o
#    site ficava sem JS.
#
# 2. `rsync -a` compara tamanho + mtime. O index.html novo tem EXATAMENTE o
#    mesmo tamanho do antigo (so mudam 8 caracteres do hash la dentro) e o
#    `git worktree add` costuma escrever no mesmo segundo do build. Resultado:
#    o rsync pulava o index.html, publicava o HTML velho apontando para um
#    bundle que nao existia mais, e o site inteiro dava 404 no JS.
#
# Por isso aqui: --checksum (compara conteudo), `git add -A` (pega arquivo
# novo) e, principalmente, uma VERIFICACAO que quebra o deploy antes do push
# se algum HTML referenciar asset ausente.
# ============================================================
set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TRABALHO="$(mktemp -d)/gh-pages"
cd "$RAIZ"

limpar() { git worktree remove "$TRABALHO" --force 2>/dev/null || true; }
trap limpar EXIT

echo "==> 1/5 build"
npm run build

echo "==> 2/5 CNAME (dominio customizado morre sem ele)"
cp CNAME dist/CNAME

echo "==> 3/5 preparando a branch gh-pages"
git fetch -q origin gh-pages
git worktree add -q "$TRABALHO" gh-pages
# --checksum e a linha que impede a quebra 2 acima. Nao troque por -a puro.
rsync -a --delete --checksum --exclude '.git' dist/ "$TRABALHO/"

echo "==> 4/5 conferindo se todo asset referenciado existe"
cd "$TRABALHO"
QUEBRADOS=0
while IFS= read -r html; do
  while IFS= read -r ref; do
    [ -f "./$ref" ] || { echo "   QUEBRADO: $html -> /$ref"; QUEBRADOS=$((QUEBRADOS + 1)); }
  done < <(grep -oE '(assets|static)/[A-Za-z0-9_.-]+\.(js|css)' "$html" | sort -u)
done < <(find . -name '*.html' -not -path './.git/*')

if [ "$QUEBRADOS" -gt 0 ]; then
  echo
  echo "ERRO: $QUEBRADOS referencia(s) apontando para arquivo inexistente."
  echo "Nada foi publicado. O site em producao continua no ar."
  exit 1
fi
echo "   ok: nenhuma referencia quebrada"

echo "==> 5/5 publicando"
git add -A
if git diff --cached --quiet; then
  echo "   nada mudou; nada a publicar."
  exit 0
fi
git commit -q -m "${1:-deploy: atualizacao do site}"
git push -q origin HEAD:gh-pages

ESPERADO=$(grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' index.html | head -1)
echo
echo "==> publicado. aguardando o GitHub Pages servir $ESPERADO"
for _ in $(seq 1 60); do
  if curl -s --max-time 15 https://wearejust.it/ | grep -q "$ESPERADO"; then
    echo "==> no ar: https://wearejust.it"
    # IndexNow: avisa o Bing (o indice que o ChatGPT consulta) que ha conteudo
    # novo. So depois de confirmado no ar, porque o Bing valida a chave no
    # site. Falha aqui nunca derruba o deploy.
    node "$RAIZ/scripts/indexnow.mjs" || echo "AVISO: IndexNow falhou; reenvie com: node scripts/indexnow.mjs"
    exit 0
  fi
  sleep 10
done
echo "AVISO: passou de 10 min sem o HTML novo aparecer. Confira o Actions do repo."
exit 1
