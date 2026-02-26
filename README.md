<div align="center">
  <img src="public/tupinamba-logo-horizontal.svg" alt="Centro Espiritualista Caboclo Tupinambá" width="400" />

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

```
caboclo-tupinamba-frontend/
├── public/                   # Assets estáticos e dados
│   ├── giras.ts              # Base de dados das giras (eventos)
│   ├── biblioteca.ts         # Acervo da biblioteca
│   ├── _headers              # Configuração de headers do Netlify
│   ├── robots.txt            # Configuração para crawlers
│   └── *.avif / *.svg        # Imagens e logos
├── src/
│   ├── Components/           # Componentes reutilizáveis
│   │   ├── Header.tsx        # Barra de navegação (responsiva)
│   │   ├── Footer.tsx        # Rodapé com localização e contato
│   │   ├── Hero.tsx          # Seção hero com próxima gira
│   │   ├── Agenda.tsx        # Listagem de eventos
│   │   ├── Calendario.tsx    # Calendário interativo
│   │   ├── Orixas.tsx        # Componente de Orixás
│   │   ├── Exus.tsx          # Componente de Exus
│   │   ├── Caboclos.tsx      # Componente de Caboclos
│   │   └── ...               # Outros componentes auxiliares
│   ├── Pages/                # Páginas da aplicação
│   │   ├── Home.tsx
│   │   ├── OCentro.tsx
│   │   ├── HistoriaDaUmbanda.tsx
│   │   ├── Biblioteca.tsx
│   │   └── Entidades.tsx
│   ├── App.tsx               # Roteamento principal
│   ├── main.tsx              # Entry point do React
│   └── index.css             # Estilos globais e tema Tailwind
├── index.html                # HTML base (pt-BR, meta tags, GA4)
├── vite.config.ts            # Configuração do Vite
└── tsconfig.json             # Configuração do TypeScript
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

- [Node.js](https://nodejs.org/) v18 ou superior
- npm (incluído no Node.js) ou outro gerenciador de pacotes

---

## Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/alexandre/caboclo-tupinamba-frontend.git
cd caboclo-tupinamba-frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O app estará disponível em **http://localhost:3000**.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 3000 |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint no projeto |

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

```
caboclo-tupinamba-frontend/
├── public/                   # Static assets and data
│   ├── giras.ts              # Spiritual sessions dataset
│   ├── biblioteca.ts         # Library books dataset
│   ├── _headers              # Netlify headers config
│   ├── robots.txt            # SEO crawler rules
│   └── *.avif / *.svg        # Images and logos
├── src/
│   ├── Components/           # Reusable components
│   │   ├── Header.tsx        # Responsive navigation bar
│   │   ├── Footer.tsx        # Footer with location & contact
│   │   ├── Hero.tsx          # Hero section (next upcoming event)
│   │   ├── Agenda.tsx        # Events listing
│   │   ├── Calendario.tsx    # Interactive calendar
│   │   ├── Orixas.tsx        # Orixás component
│   │   ├── Exus.tsx          # Exus component
│   │   ├── Caboclos.tsx      # Caboclos component
│   │   └── ...               # Other UI components
│   ├── Pages/                # Page-level components
│   │   ├── Home.tsx
│   │   ├── OCentro.tsx
│   │   ├── HistoriaDaUmbanda.tsx
│   │   ├── Biblioteca.tsx
│   │   └── Entidades.tsx
│   ├── App.tsx               # App routing
│   ├── main.tsx              # React entry point
│   └── index.css             # Global styles & Tailwind theme
├── index.html                # HTML shell (pt-BR, meta, GA4)
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
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

- [Node.js](https://nodejs.org/) v18 or higher
- npm (bundled with Node.js) or any other package manager

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

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Generate production build in `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## License

This project is for private, institutional use by Centro Espiritualista Caboclo Tupinambá.
