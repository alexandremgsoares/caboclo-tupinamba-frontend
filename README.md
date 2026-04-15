<div align="center">
  <img src="apps/web/public/tupinamba-logo-horizontal.svg" alt="Centro Espiritualista Caboclo Tupinambá" width="400" />

  <h3>Centro Espiritualista Caboclo Tupinambá</h3>
  <p>Site institucional do centro de Umbanda localizado em Unaí, Minas Gerais.</p>

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
  ![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)

  🇧🇷 Português | 🇺🇸 [English below](#english-version)
</div>

---

## Sobre o Projeto

O **Centro Espiritualista Caboclo Tupinambá** é um templo de Umbanda sediado em Unaí, MG. Este repositório contém o código-fonte do site institucional do centro, desenvolvido como uma SPA (Single Page Application) moderna.

O site oferece:

- Informações sobre o centro e sua história
- Calendário de giras e eventos espirituais
- Conteúdo educativo sobre a história da Umbanda
- Acervo de livros espirituais (biblioteca)
- Informações sobre as entidades (Orixás, Exus, Caboclos)

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Framework de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Tipagem estática |
| [Vite](https://vite.dev/) | 7 | Build tool e dev server |
| [React Router](https://reactrouter.com/) | 7 | Roteamento client-side |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária |
| [Material-UI](https://mui.com/) | 7 | Componentes de UI e ícones |
| [Emotion](https://emotion.sh/) | 11 | CSS-in-JS (suporte ao MUI) |
| [Netlify](https://netlify.com) | — | Hospedagem e deploy |

---

## Estrutura do Projeto

Este repositório é um **monorepo** gerenciado com **npm workspaces**.

```
caboclo-tupinamba/
├── apps/
│   ├── web/                      # Frontend React + Vite (este app)
│   │   ├── public/               # Assets estáticos e dados
│   │   │   ├── giras.ts          # Base de dados das giras (eventos)
│   │   │   ├── biblioteca.ts     # Acervo da biblioteca
│   │   │   ├── _headers          # Configuração de headers do Netlify
│   │   │   ├── robots.txt        # Configuração para crawlers
│   │   │   └── *.avif / *.svg    # Imagens e logos
│   │   ├── src/
│   │   │   ├── Components/       # Componentes reutilizáveis
│   │   │   ├── Pages/            # Páginas da aplicação
│   │   │   ├── App.tsx           # Roteamento principal
│   │   │   ├── main.tsx          # Entry point do React
│   │   │   └── index.css         # Estilos globais e tema Tailwind
│   │   ├── index.html            # HTML base (pt-BR, meta tags, GA4)
│   │   ├── vite.config.ts        # Configuração do Vite
│   │   └── tsconfig.json         # Configuração do TypeScript
│   └── api/                      # Backend Go (em desenvolvimento)
├── docs/                         # Material de referência (biblioteca.csv, etc)
├── netlify.toml                  # Configuração de deploy do frontend
└── package.json                  # Workspace root (npm workspaces)
```

---

## Páginas e Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Hero com próxima gira, história e agenda |
| `/centro` | O Centro | Sobre o centro espiritualista |
| `/historia` | História da Umbanda | Conteúdo educativo sobre a Umbanda |
| `/biblioteca` | Biblioteca | Acervo de livros espirituais |
| `/entidades` | Entidades | Orixás, Exus e Caboclos |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) v20.19+ ou v22.12+ (requerido pelo Vite 7)
- npm (incluído no Node.js)

---

## Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/alexandre/caboclo-tupinamba-frontend.git
cd caboclo-tupinamba-frontend

# 2. Instale as dependências de todos os workspaces (a partir do root)
npm install

# 3. Inicie o servidor de desenvolvimento do frontend
npm run dev
```

O app estará disponível em **http://localhost:3000**.

---

## Scripts Disponíveis

Todos os scripts são executados a partir do **root** do monorepo e delegam para o workspace `@caboclo/web`.

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do frontend na porta 3000 |
| `npm run build` | Gera o build de produção em `apps/web/dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint no frontend |

---

## Licença

Este projeto é de uso privado e institucional do Centro Espiritualista Caboclo Tupinambá.

---
---

## English Version

<div align="center">
  🇺🇸 English | 🇧🇷 <a href="#centro-espiritualista-caboclo-tupinambá">Português acima</a>
</div>

---

## About the Project

**Centro Espiritualista Caboclo Tupinambá** is an Umbanda spiritual center located in Unaí, Minas Gerais, Brazil. This repository contains the source code for its institutional website, built as a modern Single Page Application (SPA).

The website provides:

- Information about the center and its history
- Calendar of spiritual sessions (*giras*) and events
- Educational content about the history of Umbanda
- A library of spiritual books
- Information about spiritual entities (Orixás, Exus, Caboclos)

> **What is Umbanda?** Umbanda is an Afro-Brazilian syncretic religion that blends African traditions, Indigenous Brazilian spirituality, Spiritism, and Catholicism. It is widely practiced across Brazil.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.8 | Static typing |
| [Vite](https://vite.dev/) | 7 | Build tool & dev server |
| [React Router](https://reactrouter.com/) | 7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [Material-UI](https://mui.com/) | 7 | UI components & icons |
| [Emotion](https://emotion.sh/) | 11 | CSS-in-JS (MUI peer dep) |
| [Netlify](https://netlify.com) | — | Hosting & deployment |

---

## Project Structure

This repo is a **monorepo** managed with **npm workspaces**.

```
caboclo-tupinamba/
├── apps/
│   ├── web/                      # React + Vite frontend (this app)
│   │   ├── public/               # Static assets & data
│   │   │   ├── giras.ts          # Spiritual sessions dataset
│   │   │   ├── biblioteca.ts     # Library books dataset
│   │   │   ├── _headers          # Netlify headers config
│   │   │   ├── robots.txt        # SEO crawler rules
│   │   │   └── *.avif / *.svg    # Images & logos
│   │   ├── src/
│   │   │   ├── Components/       # Reusable components
│   │   │   ├── Pages/            # Page-level components
│   │   │   ├── App.tsx           # App routing
│   │   │   ├── main.tsx          # React entry point
│   │   │   └── index.css         # Global styles & Tailwind theme
│   │   ├── index.html            # HTML shell (pt-BR, meta, GA4)
│   │   ├── vite.config.ts        # Vite configuration
│   │   └── tsconfig.json         # TypeScript configuration
│   └── api/                      # Go backend (work in progress)
├── docs/                         # Reference material (biblioteca.csv, etc)
├── netlify.toml                  # Frontend deploy config
└── package.json                  # Workspace root (npm workspaces)
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero with next session, history & agenda |
| `/centro` | O Centro | About the spiritual center |
| `/historia` | História da Umbanda | Educational content on Umbanda |
| `/biblioteca` | Biblioteca | Spiritual books library |
| `/entidades` | Entidades | Orixás, Exus & Caboclos |

---

## Prerequisites

- [Node.js](https://nodejs.org/) v20.19+ or v22.12+ (required by Vite 7)
- npm (bundled with Node.js)

---

## Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/alexandre/caboclo-tupinamba-frontend.git
cd caboclo-tupinamba-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:3000**.

---

## Available Scripts

All scripts run from the **root** of the monorepo and delegate to the `@caboclo/web` workspace.

| Command | Description |
|---|---|
| `npm run dev` | Start the frontend dev server on port 3000 |
| `npm run build` | Generate production build in `apps/web/dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the frontend |

---

## License

This project is for private, institutional use by Centro Espiritualista Caboclo Tupinambá.
