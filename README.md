# ⚛️ Next.js Modern App - App Router, React & Tailwind CSS

Aplicação Frontend moderna desenvolvida com **Next.js (App Router)**, **React**, **TypeScript** e **Tailwind CSS**, demonstrando boas práticas de componentização, roteamento avançado e renderização otimizada.

---

## 🚀 Tecnologias & Bibliotecas

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Biblioteca UI:** [React](https://react.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita e DTOs de interface)
- **Ícones & Tipografia:** Next Font (`Inter` custom font optimization)

---

## 🏛️ Arquitetura de Pastas (App Router)

```text
src/
├── app/
│   ├── (main)/          # Route Group para isolamento de layouts
│   ├── globals.css      # Estilização global e diretivas Tailwind
│   ├── layout.tsx       # Root layout com fonts e metadados SEO
│   └── page.tsx         # Página principal / Home
├── components/          # Componentes modulares e reutilizáveis
│   └── usuario/         # Módulo e componentes de gestão de usuários
├── interface/           # Contratos e tipos TypeScript
├── service/             # Camada de consumo de serviços e APIs
└── types/               # Tipagens globais da aplicação
```

---

## ⚙️ Principais Características

- ⚡ **Next.js App Router:** Aproveitamento da arquitetura de rotas baseada em sistema de arquivos e suporte nativo a SSR e RSC.
- 🎨 **Tailwind CSS Utility-First:** Interface responsiva, moderna e de alta fidelidade visual.
- 🧩 **Componentização Limpa:** Separação clara entre camada visual, lógica de consumo de APIs e interfaces de tipagem.

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- Gerenciador de pacotes npm, pnpm ou yarn

### Passos

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:leandroArraes/estudoNextJs.git
   cd estudoNextJs
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

4. **Gerar build de produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👨‍💻 Autor

**Leandro Arraes**
- LinkedIn: [linkedin.com/in/leandroarraes](https://www.linkedin.com/in/leandroarraes/)
- GitHub: [@leandroArraes](https://github.com/leandroArraes)
- E-mail: [leandro.arraes.182@gmail.com](mailto:leandro.arraes.182@gmail.com)
