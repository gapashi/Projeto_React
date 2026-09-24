# SmartFeed 🚀

Um projeto web desenvolvido em React.js (com Vite) que simula uma plataforma híbrida de rede social e ambiente de estudos. 

O foco principal desta aplicação é a construção de uma arquitetura limpa e o domínio dos fundamentos do React moderno (Hooks, Componentização e Props), utilizando apenas HTML, CSS puro e JavaScript, sem frameworks de abstração de estilos.

## 📌 Funcionalidades

* **Navegação SPA (Single Page Application):** Troca de telas fluida entre o "Feed" e os "Cursos" utilizando renderização condicional baseada em estados, sem recarregamento da página.
* **Feed de Postagens:** 
  * Formulário interativo para criação de novas postagens.
  * Atualização da interface em tempo real utilizando `useState`.
  * Prevenção de envio de formulários vazios e controle de eventos (`preventDefault`, `onChange`).
* **Página de Cursos:**
  * Renderização dinâmica de uma lista de cursos através do método `.map()`.
  * **Sistema de Filtro Duplo:** Busca avançada que combina o clique em categorias no menu lateral com um campo de busca por texto em tempo real (utilizando `.filter()` e `.includes()`).

## 🛠️ Tecnologias Utilizadas

* **React.js** (Hooks: `useState`)
* **Vite** (Ferramenta de build e servidor de desenvolvimento)
* **JavaScript (ES6+)**
* **HTML5 Semântico** (Uso de tags como `<main>`, `<aside>`, `<header>`, `<article>`)
* **CSS3 Puro** (Flexbox e CSS Grid Layout para responsividade)

## 📁 Estrutura de Pastas

A arquitetura do projeto foi pensada para ser modular e escalável, separando componentes de interface de páginas completas:

```text
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 Header.jsx / Header.css
 ┃ ┣ 📜 Sidebar.jsx / Sidebar.css
 ┃ ┣ 📜 Post.jsx / Post.css
 ┃ ┗ 📜 PostForm.jsx / PostForm.css
 ┣ 📂 pages
 ┃ ┗ 📜 CoursesPage.jsx / CoursesPage.css
 ┣ 📜 App.jsx
 ┣ 📜 App.css
 ┣ 📜 index.css
 ┗ 📜 main.jsx
```

🚀 Como Executar o Projeto Localmente
Certifique-se de ter o Node.js instalado na sua máquina.

Faça o clone deste repositório ou baixe os arquivos.

Abra o terminal na pasta raiz do projeto (smartfeed) e instale as dependências:

```text
npm install
```

Inicie o servidor de desenvolvimento:
```text
npm run dev
```

Acesse no seu navegador o link gerado no terminal (geralmente http://localhost:5173/).

## 💡 Contexto Didático

Este projeto foi construído com fins educacionais, projetado para ensinar o passo a passo da lógica de programação front-end. Ele documenta a evolução desde a criação de arquivos modulares básicos até a manipulação de arrays complexos de objetos, servindo como uma excelente base de portfólio para desenvolvedores juniores.
