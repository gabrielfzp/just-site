#!/usr/bin/env bash
# ============================================================
# Deploy do site institucional (wearejust.it)
#
#   ./scripts/deploy-site.sh "mensagem do commit"
#
# Publica em DOIS destinos com o MESMO build:
#
#   1. Kaleo (VPS dedicada, nginx)  — rsync --checksum
#   2. GitHub Pages (gh-pages)      — reserva para rollback de DNS
#
# Enquanto os dois existirem, um deploy parcial e pior que nenhum: se so um
# destino recebesse a versao nova, o rollback de DNS serviria conteudo velho
# sem ninguem perceber. Por isso o script para no primeiro erro.
#
# As licoes de producao continuam todas aqui:
#   - rsync SEMPRE com --checksum (tamanho+mtime ja publicou index.html velho
#     apontando para bundle inexistente: site inteiro em 404 no JS)
#   - verificacao que ABORTA antes de publicar se algum HTML referenciar
#     asset ausente
#   - git add -A, nunca commit -a (bundle tem hash no nome: todo build e
#     arquivo novo, e commit -a nao adiciona arquivo novo)
#
# A espera pelo CDN do GitHub saiu daqui de proposito: chegou a segurar o
# terminal por 10 minutos. A verificacao pos-publicacao da Kaleo e imediata
# (curl direto no IP); a do Pages, quando importar, e:
#   curl -s https://wearejust.it/ | grep -o 'assets/index-[^"]*\.js'
# ============================================================
set -euo pipefail

KALEO="${KALEO:-kaleo}"
DOCROOT="/var/www/wearejust"
KALEO_IP="179.198.124.84"
RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TRABALHO="$(mktemp -d)/gh-pages"
cd "$RAIZ"

limpar() { git worktree remove "$TRABALHO" --force 2>/dev/null || true; }
trap limpar EXIT

echo "==> 1/6 build"
npm run build

echo "==> 2/6 CNAME (o gh-pages perde o dominio sem ele)"
cp CNAME dist/CNAME

echo "==> 3/6 conferindo se todo asset referenciado existe"
QUEBRADOS=0
while IFS= read -r html; do
  while IFS= read -r ref; do
    [ -f "dist/$ref" ] || { echo "   QUEBRADO: $html -> /$ref"; QUEBRADOS=$((QUEBRADOS + 1)); }
  done < <(grep -oE '(assets|static)/[A-Za-z0-9_.-]+\.(js|css)' "$html" | sort -u)
done < <(find dist -name '*.html')
if [ "$QUEBRADOS" -gt 0 ]; then
  echo "ERRO: $QUEBRADOS referencia(s) quebrada(s). Nada foi publicado."
  exit 1
fi
echo "   ok: nenhuma referencia quebrada"

echo "==> 4/6 Kaleo (rsync --checksum)"
rsync -a --delete --checksum --exclude '.git' dist/ "${KALEO}:${DOCROOT}/"

BUNDLE=$(grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' dist/index.html | head -1)
SERVIDO=$(curl -s --max-time 15 -H 'Host: wearejust.it' "http://${KALEO_IP}/" | grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' | head -1)
if [ "$BUNDLE" != "$SERVIDO" ]; then
  echo "ERRO: Kaleo serve '$SERVIDO', esperado '$BUNDLE'."
  exit 1
fi
echo "   ok: Kaleo servindo $BUNDLE"

echo "==> 5/6 GitHub Pages (reserva de rollback)"
git fetch -q origin gh-pages
git worktree add -q "$TRABALHO" gh-pages
rsync -a --delete --checksum --exclude '.git' dist/ "$TRABALHO/"
cd "$TRABALHO"
git add -A
if git diff --cached --quiet; then
  echo "   nada mudou no gh-pages"
else
  git commit -q -m "${1:-deploy: atualizacao do site}"
  git push -q origin HEAD:gh-pages
  echo "   gh-pages publicado (CDN propaga sozinho em alguns minutos)"
fi

echo "==> 6/6 pronto: Kaleo verificada, gh-pages atualizado"
