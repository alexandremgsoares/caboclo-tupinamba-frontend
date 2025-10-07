# Centro Espiritualista Caboclo Tupinambá - Documentação do Projeto

## Visão Geral

Site institucional do **Centro Espiritualista Caboclo Tupinambá**, localizado em Unaí, Minas Gerais. É uma SPA (Single Page Application) desenvolvida para informar, acolher e aproximar pessoas da instituição, apresentando a história do centro, agenda de atendimentos, conteúdos educativos sobre a Umbanda e suas entidades.

**Versão atual**: 0.0.0 (em desenvolvimento)

---

## Stack Tecnológica

### Core
- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **Vite**: 7.0.0 (build tool e dev server)

### Styling
- **Tailwind CSS**: 4.1.11 (com plugin Vite)
- **Emotion**: React 11.14.0, Styled 11.14.1
- **Material UI Icons**: 7.2.0

### Roteamento
- **React Router**: 7.8.0

### Ferramentas de Desenvolvimento
- **ESLint**: 9.29.0 (com plugins para React Hooks e React Refresh)
- **TypeScript ESLint**: 8.34.1

### Deploy e Infraestrutura
- **Hospedagem**: Netlify
- **CI/CD**: GitHub Actions (deploy automático)
- **Repositório**: [alexandremgsoares/caboclo-tupinamba](https://github.com/alexandremgsoares/caboclo-tupinamba)
- **Status**: 🟢 Em produção

---

## Estrutura de Diretórios

```
caboclo-tupinamba-frontend/
├── public/
│   ├── giras.ts              # Dados do calendário de eventos
│   ├── bg-hero.avif          # Imagem hero otimizada
│   ├── altar.avif            # Imagem do altar
│   ├── tupinamba-logo-horizontal.svg
│   ├── logosemnome.svg
│   ├── bg-folhas.svg
│   ├── manifest.json         # PWA manifest
│   ├── robots.txt
│   └── _headers              # Headers para deploy
├── src/
│   ├── Components/
│   │   ├── Header.tsx        # Navegação principal com menu mobile
│   │   ├── Footer.tsx        # Footer com mapa e links
│   │   ├── Hero.tsx          # Seção hero com próxima gira
│   │   ├── Historia.tsx      # Seção história do centro
│   │   ├── Agenda.tsx        # Seção agenda com calendário
│   │   ├── Calendario.tsx    # Calendário interativo de giras
│   │   ├── CalendarDate.tsx  # Componente de data do calendário
│   │   ├── CardInformacao.tsx # Card informativo com ícone
│   │   ├── CardLetra.tsx     # Card expansível para letras/pontos
│   │   ├── Selector.tsx      # Botão de seleção de categoria
│   │   ├── TabSelector.tsx   # Sistema de tabs
│   │   ├── EmailCopy.tsx     # Componente para copiar email
│   │   ├── Orixas.tsx        # 🚧 PENDENTE: Pontos de Orixás
│   │   ├── Exus.tsx          # 🚧 PENDENTE: Pontos de Exus
│   │   └── Caboclos.tsx      # 🚧 PENDENTE: Pontos de Caboclos
│   ├── Pages/
│   │   ├── Home.tsx          # Página inicial
│   │   ├── HistoriaDaUmbanda.tsx  # História da Umbanda
│   │   ├── PontosEOracoes.tsx     # Página com sub-rotas de pontos
│   │   └── Entidades.tsx     # 🚧 PENDENTE: História das entidades
│   ├── App.tsx               # Configuração de rotas
│   ├── main.tsx              # Entry point
│   ├── index.css             # Estilos globais e tema Tailwind
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── package.json
└── README.md
```

---

## Páginas e Rotas

### Estrutura de Rotas (React Router)

```
/                      → Home
/historia              → História da Umbanda
/pontos                → Pontos e Orações (página container)
  /pontos/orixas       → Pontos de Orixás (default)
  /pontos/exus         → Pontos de Exus
  /pontos/caboclos     → Pontos de Caboclos
/entidades             → Entidades da Umbanda
```

### 1. Home (`/`)

**Componentes principais**:
- **Hero**: Imagem de fundo com mensagem de boas-vindas e cálculo da próxima gira
- **Agenda**: Calendário interativo de eventos + orientações para visitantes
- **História**: Seção sobre a história do centro
- **Cards Informativos**: Links para História, Pontos e Entidades

**Funcionalidades**:
- Calcula dinamicamente a próxima gira com base na data atual
- Calendário navegável por mês (Junho a Dezembro 2025)
- Orientações para visitantes (vestuário, celular, passes, etc.)
- Links rápidos para seções principais

### 2. História da Umbanda (`/historia`)

**Status**: ✅ Completa

**Conteúdo**:
- Relato da primeira manifestação do Caboclo das Sete Encruzilhadas (15/11/1908)
- História de Zélio de Moraes
- Fundação da Umbanda
- Valores e práticas da religião

### 3. Pontos e Orações (`/pontos`)

**Status**: 🚧 Estrutura criada, conteúdo pendente

**Componentes**:
- Sistema de navegação por tabs (Orixás, Exus, Caboclos)
- Sub-rotas para cada categoria
- Componentes vazios aguardando implementação de conteúdo

**Pendências**:
- [ ] Implementar conteúdo de Pontos de Orixás
- [ ] Implementar conteúdo de Pontos de Exus
- [ ] Implementar conteúdo de Pontos de Caboclos
- [ ] Adicionar orações correspondentes

### 4. Entidades (`/entidades`)

**Status**: 🚧 Estrutura básica, conteúdo pendente

**Pendências**:
- [ ] Implementar história das entidades da Umbanda
- [ ] Adicionar informações sobre linhas de trabalho
- [ ] Possivelmente criar sub-páginas para cada tipo de entidade

---

## Componentes Principais

### Header.tsx
- Navegação responsiva com logo
- Menu hambúrguer para mobile (< 800px)
- Links: História, Pontos, Entidades, Nossa Agenda
- Adaptação automática entre desktop e mobile

### Footer.tsx
- Logo e links de navegação interna
- Seção "Conheça Umbanda"
- Sistema de doação via PIX (com componente de cópia de email)
- Mapa do Google Maps integrado
- Endereço: Rua "C", 310, Bairro Eldorado, Unaí, MG

### Hero.tsx
- Imagem de fundo otimizada (AVIF)
- Cálculo dinâmico da próxima gira
- Mensagem de boas-vindas
- Link para Google Maps

### Calendario.tsx
- Navegação entre meses (Janeiro a Dezembro 2025)
- Exibição de giras do mês selecionado
- Formatação de datas e horários
- Mensagem quando não há eventos no mês
- Ícones de navegação (Material UI)

### CardInformacao.tsx
- Card clicável com link interno
- Ícone personalizado (Material UI)
- Título e descrição
- Efeitos hover com mudança de cor

### CardLetra.tsx
- Card expansível para exibir letras de pontos
- Estado de aberto/fechado
- Ícones de expandir/recolher
- Preparado para receber letras de músicas

---

## Dados e Configurações

### Calendário de Giras (`public/giras.ts`)

**Estrutura de dados**:
```typescript
type Gira = {
  titulo: string;
  day: number;
  month: string;
  year: number;
  monthIndex: number;
}
```

**Eventos cadastrados**: Junho a Dezembro 2025
- Giras com Pretos Velhos
- Giras com Exus e Pomba Giras
- Giras com Caboclos e Boiadeiros
- Dia de Xangô
- Gira com Erês
- Aniversário de 1 Ano do Centro (01/07/2025)
- Recessos de fim de ano

### Tema Customizado (Tailwind)

**Cores** (definidas em `src/index.css`):
- `--color-verde-claro`: #fff9e5 (bege claro)
- `--color-verde-claro-2`: #497615 (verde intermediário)
- `--color-verde`: #355017 (verde principal)
- `--color-verde-escuro`: #192c07 (verde escuro)
- `--color-preto`: #0d0a0b
- `--color-branco`: #f3f3f3

**Fontes** (Google Fonts):
- `--font-cinzel`: "Cinzel", serif (títulos e cabeçalhos)
- `--font-crimson`: "Crimson Pro", serif (corpo de texto)

**Configurações**:
- `scroll-behavior: smooth` (navegação suave)

---

## Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (localhost:3000)
npm run build    # Build de produção (TypeScript + Vite)
npm run lint     # Executa ESLint
npm run preview  # Preview da build de produção
```

**Configuração do dev server**:
- Porta: 3000
- Host: localhost
- strictPort: true

---

## Funcionalidades Implementadas ✅

- [x] Sistema de navegação responsivo
- [x] Menu mobile com hambúrguer
- [x] Página inicial completa (Hero, Agenda, História)
- [x] Calendário interativo de giras
- [x] Cálculo dinâmico da próxima gira
- [x] Página História da Umbanda completa
- [x] Sistema de rotas com React Router
- [x] Footer com mapa integrado
- [x] Sistema de doação via PIX
- [x] Tema customizado (cores, fontes)
- [x] Otimização de imagens (AVIF)
- [x] Cards informativos clicáveis
- [x] Responsividade em todos os componentes
- [x] Meta tags para SEO
- [x] Google Analytics integrado
- [x] Deploy automático com CI/CD (Netlify + GitHub)
- [x] Configuração de cache otimizada
- [x] Site em produção e funcionando

---

## Funcionalidades Pendentes 🚧

### Alta Prioridade

1. **Pontos e Orações** - Implementar conteúdo completo
   - [ ] Pontos de Orixás (Orixas.tsx)
   - [ ] Pontos de Exus (Exus.tsx)
   - [ ] Pontos de Caboclos (Caboclos.tsx)
   - [ ] Utilizar componente CardLetra para letras expansíveis
   - [ ] Adicionar orações correspondentes

2. **História das Entidades** - Completar página Entidades
   - [ ] Informações sobre as linhas de trabalho
   - [ ] História e características das entidades
   - [ ] Possivelmente criar sub-seções por tipo

3. **Página Biblioteca** - Nova funcionalidade
   - [ ] Criar nova página/rota
   - [ ] Definir estrutura de conteúdo
   - [ ] Recursos educativos sobre Umbanda
   - [ ] Adicionar ao menu de navegação

4. **PWA (Progressive Web App)** - Reimplementar funcionalidade de instalação
   - [ ] Service Worker correto (removido anteriormente por problemas de cache)
   - [ ] Funcionalidade de "Adicionar à tela inicial"
   - [ ] Gerenciamento adequado de cache
   - [ ] Notificações de atualização
   - [ ] Modo offline básico
   - Manifest já existe em `/public/manifest.json`

### Melhorias Futuras

- [ ] Galeria de fotos do centro
- [ ] Sistema de notícias/avisos
- [ ] Formulário de contato
- [ ] Modo escuro (opcional)
- [ ] Acessibilidade (ARIA labels, navegação por teclado)
- [ ] Testes automatizados

---

## Histórico Recente (Git)

Últimos commits relevantes:
```
be65136 - update: atualização do calendário, Novembro e Dezembro
1212ab9 - update: atualização de agenda
062d10f - update: defer google tags
b7eba13 - update: removendo script de cache do index.html
b5a4b4a - update: remoção de service worker
6dc7711 - update: remover script de limpeza de cache
b8acc7d - update: imagens mais leves
191a4b5 - service worker reset
cd90ce8 - resolvendo bug de cache
4540b33 - mudança pwa
```

**Observações**:
- Recentemente houve foco em resolver problemas de cache do PWA
- Service Worker foi removido (múltiplos commits sobre o tema)
- Calendário foi atualizado com eventos de Novembro e Dezembro
- Imagens foram otimizadas (AVIF)
- Google Analytics foi otimizado com `defer`

---

## Deploy e CI/CD

### Netlify

O projeto está **em produção** e hospedado no Netlify com deploy automático integrado ao GitHub.

**Workflow de deployment**:
1. Desenvolvedor faz push para branch `main` no GitHub
2. Netlify detecta a mudança automaticamente
3. Build é executado (`npm run build`)
4. Site é deployado automaticamente

**Repositório GitHub**:
- URL: `https://github.com/alexandremgsoares/caboclo-tupinamba`
- Branch principal: `main`
- Deploy automático: ✅ Ativo

### Configuração de Cache (`public/_headers`)

O arquivo `_headers` configura políticas de cache no Netlify para evitar problemas de cache (lição aprendida dos commits anteriores):

**Estratégias aplicadas**:

```
# HTML e SW - SEM CACHE (sempre buscar versão mais recente)
/
/*.html
/sw.js
/registerSW.js
  Cache-Control: no-cache, no-store, must-revalidate, max-age=0

# Manifest - Cache curto (5 minutos)
/manifest.webmanifest
  Cache-Control: public, max-age=300

# Assets JS/CSS - Cache longo (1 ano, com hash no nome = immutable)
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Imagens - Cache médio (1 dia)
/*.png, /*.jpg, /*.svg, /*.webp, /*.avif
  Cache-Control: public, max-age=86400
```

**Motivação**: Os commits recentes mostram que houve problemas com cache de Service Worker, por isso a configuração atual evita cache agressivo em arquivos críticos.

---

## Arquivos de Configuração

### vite.config.ts
```typescript
export default defineConfig({
  server: {
    port: 3000,
    host: "localhost",
    strictPort: true,
  },
  plugins: [react(), tailwindcss()],
});
```

### tsconfig.app.json
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Strict mode ativado
- Linting rigoroso (noUnusedLocals, noUnusedParameters)

### eslint.config.js
- Configurado para TypeScript + React
- Plugins: react-hooks, react-refresh
- Ignora pasta `dist`

---

## Notas Importantes

### SEO
- Meta tags configuradas para Umbanda em Unaí
- Google Site Verification configurada
- Keywords: caboclo tupinambá, umbanda unai, centro de umbanda unai, etc.
- Robots: index, follow
- Open Graph image configurada

### Performance
- Imagens em formato AVIF (menor tamanho)
- Google Analytics carregado com `defer`
- Lazy loading potencial para componentes

### Acessibilidade
- Fontes legíveis (Cinzel, Crimson Pro)
- Contraste adequado nas cores
- Mapa com título descritivo
- Alt text em imagens principais

---

## Workflow de Desenvolvimento

### Desenvolvimento Local
```bash
# 1. Clonar repositório
git clone https://github.com/alexandremgsoares/caboclo-tupinamba.git

# 2. Instalar dependências
npm install

# 3. Rodar servidor de desenvolvimento
npm run dev
# Acesso: http://localhost:3000

# 4. Fazer alterações e testar localmente
```

### Deploy para Produção
```bash
# 1. Fazer commit das alterações
git add .
git commit -m "descrição das mudanças"

# 2. Push para GitHub (branch main)
git push origin main

# 3. Netlify detecta automaticamente e faz deploy
# ✅ Site atualizado em produção!
```

**Observação**: Não há necessidade de configurar manualmente o Netlify. O CI/CD já está configurado e funcionando.

---

## Próximos Passos Recomendados

1. **Implementar conteúdo dos Pontos** (Orixás, Exus, Caboclos)
   - Usar CardLetra para cada ponto/oração
   - Organizar por categoria/linha
   - Adicionar instruções de quando cantar

2. **Criar página Biblioteca**
   - Definir estrutura de navegação
   - Conteúdos educativos sobre Umbanda
   - Recursos para iniciantes

3. **Completar página Entidades**
   - História das linhas de trabalho
   - Características e arquetipos
   - Relação com Orixás

4. **Reimplementar PWA**
   - Service Worker sem problemas de cache
   - Estratégia de cache adequada
   - Prompt de instalação
   - Update notification

5. **Testes e refinamentos**
   - Testar em diferentes dispositivos
   - Validar acessibilidade
   - Otimizar performance
   - Revisar SEO

---

## Contato do Centro

- **Endereço**: Rua "C", 310, Bairro Eldorado, Unaí, Minas Gerais
- **Email**: caboclotupinamba2024@gmail.com
- **Horário das Giras**: Terças-feiras às 19:30h
- **Google Maps**: [Link](https://maps.app.goo.gl/3u36hYXEZQSNtV2p6)

---

**Última atualização desta documentação**: 2025-10-07
