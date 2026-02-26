<div align="center">
  <img src="public/tupinamba-logo-horizontal.svg" alt="Centro Espiritualista Caboclo Tupinambá" width="400" />

  <h3>Centro Espiritualista Caboclo Tupinambá</h3>
  <p>Site institucional do centro de Umbanda localizado em Unaí, Minas Gerais.</p>

  ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
  ![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7?logo=netlify&logoColor=white)
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
