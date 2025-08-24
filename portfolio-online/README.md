# Remixando Projeto do Lovable

Este guia explica como remixar o projeto do Lovable, configurar o ambiente local e publicar no GitHub Pages usando um domínio personalizado.

## 1. Remixar o projeto

1. Abra o link do projeto no Lovable:
   [Projeto Lovable](https://lovable.dev/projects/3d1da599-79f8-439b-8dd0-25ed98bdd7c4)
2. Clique em **Remix** para criar sua própria cópia do projeto.

## 2. Preparar o ambiente local

### 2.1 Instalar VS Code

Baixe e instale o Visual Studio Code:
[Download VS Code](https://code.visualstudio.com/)

### 2.2 Instalar Node.js e npm

Baixe o Node.js (já inclui o npm):
[Download Node.js](https://nodejs.org/)

Verifique a instalação:

```bash
node -v
npm -v
```

## 3. Configurar o projeto

1. Abra o VS Code na pasta do projeto remixado.
2. Instale as dependências:

```bash
npm install
```

3. Ajuste as configurações do **Vite** se necessário (`vite.config.js`):

```javascript
export default defineConfig({
  base: '/nome-do-repositorio/', // altere para o nome do seu repo
  plugins: [react()],
})
```

## 4. Executar localmente

```bash
npm run dev
```

O site será aberto no navegador, geralmente em `http://localhost:5173`.

## 5. Publicar no GitHub Pages

### 5.1 Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### 5.2 Configurar deploy

No `package.json`, adicione:

```json
"homepage": "https://seu-usuario.github.io/nome-do-repositorio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 5.3 Fazer deploy

```bash
npm run deploy
```

## 6. Configurar domínio personalizado

1. Compre um domínio no [Registro.br](https://www.registro.br/).
2. Acesse o painel de DNS do domínio e configure:

* **CNAME** apontando para: `seu-usuario.github.io`

3. Adicione um arquivo `CNAME` na pasta `public` com o domínio, por exemplo:

```
meusite.com.br
```

## 7. Resultado

Após a configuração, seu projeto remixado estará disponível online no GitHub Pages com seu domínio personalizado.

**Pronto!** Agora você tem seu projeto do Lovable rodando localmente e publicado na web com domínio próprio.
