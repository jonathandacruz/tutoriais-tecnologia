# Projeto Node.js com Docker Compose

Este projeto é um exemplo simples de aplicação **Node.js** containerizada utilizando **Docker Compose**.\
A ideia é que você consiga rodar todo o projeto em apenas um comando.

## 🚀 Como rodar o projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/) (opcional - caso queira rodar localmente sem Docker)

* [Docker](https://www.docker.com/get-started)

* [Docker Compose](https://docs.docker.com/compose/)

### Passo a passo

1. Clone este repositório:

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

1. Inicie a aplicação com Docker Compose:

```bash
docker compose up
```

1. Acesse a aplicação no navegador:

```
http://localhost:80
```

---

## 📺 Vídeo oficial no YouTube

Confira o vídeo oficial explicando como criar este projeto no YouTube:\
👉 [Clique aqui para assistir](https://youtu.be/IqhgA2Qbrto)

---

## 📂 Estrutura básica do projeto

```
.
├── docker-compose.yml
├── package.json
├── src/
│   └── index.js
│   └── database.js
└── README.md
```

---

## 💡 Observação

Este projeto é apenas um exemplo inicial.\
Você pode expandi-lo adicionando banco de dados, variáveis de ambiente e outros serviços no `docker-compose.yml`.