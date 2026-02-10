# Deploy no GitHub Pages - JUST Site Prototype

## Opcao Rapida: Abrir Local (sem deploy)

Abra o arquivo `prototipo-just-v2.html` (na pasta ESTRUTURA-SITE-JUST) diretamente no navegador. Funciona 100% sem servidor.

---

## Deploy no GitHub Pages (3 passos)

### 1. Criar repositorio no GitHub

- Va em https://github.com/new
- Nome: `just-site`
- Visibilidade: Public (necessario para GitHub Pages free)
- NAO marque "Add a README"
- Clique "Create repository"

### 2. Push do projeto

Abra o terminal na pasta `just-site` (esta pasta) e execute:

```bash
git init
git branch -m main
git add -A
git commit -m "JUST site prototype v2"
git remote add origin https://github.com/SEU-USUARIO/just-site.git
git push -u origin main
```

### 3. Ativar GitHub Pages

- Va em Settings > Pages no repositorio
- Source: selecione "GitHub Actions"
- O workflow ja esta configurado (.github/workflows/deploy.yml)
- Aguarde 1-2 minutos
- Seu site estara em: `https://SEU-USUARIO.github.io/just-site/`

---

## Estrutura do projeto

```
just-site/
  .github/workflows/deploy.yml  <- Deploy automatico
  src/App.jsx                   <- Prototipo completo (1329 linhas)
  src/main.jsx                  <- Entry point React
  index.html                    <- HTML template
  vite.config.js                <- Config com base path /just-site/
  package.json                  <- Dependencies
```

## Notas

- O deploy e automatico: cada push no main re-deploya
- Build usa Vite + React
- Sem dependencias externas (so React)
- Font Inter carregada via Google Fonts
