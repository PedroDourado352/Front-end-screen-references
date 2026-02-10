# React Boilerplate - Guia de Criação

Este documento descreve passo a passo como este projeto React foi criado e configurado.

## 📋 Pré-requisitos

- Node.js (versão 22.12+)
- npm (versão 10+)

## 🚀 Passo a Passo da Criação

### 1. Criar o projeto com Vite

```bash
npm create vite@latest react-boilerplate -- --template react
cd react-boilerplate
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Instalar styled-components

```bash
npm install styled-components
```

### 4. Estrutura de pastas criada

```
react-boilerplate/
├── node_modules/           # Dependências instaladas
├── public/                 # Arquivos públicos estáticos
├── src/                    # Código fonte
│   ├── assets/            # Imagens, fontes, etc.
│   ├── containers/        # Componentes containers
│   │   └── home/         # Página Home
│   │       ├── cart/     # Subcomponente (se necessário)
│   │       ├── index.jsx # Componente Home
│   │       └── style.js  # Estilos do Home
│   └── main.jsx          # Ponto de entrada da aplicação
├── .gitignore             # Arquivos ignorados pelo Git
├── eslint.config.js       # Configuração do ESLint
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── README.md              # Este arquivo
└── vite.config.js         # Configuração do Vite
```

### 5. Criar estrutura de containers

```bash
# Dentro de src/
mkdir containers
mkdir containers/home
```

### 6. Criar componente Home

**src/containers/home/index.jsx**
```jsx
import { Title } from './style';

function Home() {
    return (
        <div>
            <Title>Home</Title>
        </div>
    )
} 

export default Home;
```

**src/containers/home/style.js**
```javascript
import styled from 'styled-components';

export const Title = styled.h1`
    color: red;
    display: flex;
`;
```

### 7. Atualizar main.jsx

**src/main.jsx**
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
```

### 8. Remover arquivos desnecessários (opcional)

Se você criou com o template padrão, pode remover:
- `src/App.jsx`
- `src/App.css`
- `src/index.css`

## 🏃 Como executar o projeto

### Desenvolvimento

```bash
# Certifique-se de estar na pasta do projeto
cd projetoreact/react-boilerplate

# Instale as dependências (se ainda não instalou)
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em: `http://localhost:5173/`

### Build de produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces
- **Vite** - Build tool e dev server extremamente rápido
- **styled-components** - Biblioteca para estilização com CSS-in-JS
- **ESLint** - Linter para manter código consistente

## ⚠️ Problemas Comuns

### Erro: "Could not read package.json"

**Causa:** Você está executando comandos npm fora da pasta do projeto.

**Solução:** Sempre navegue até a pasta correta antes de executar comandos:
```bash
cd projetoreact/react-boilerplate
npm run dev
```

### Erro de sintaxe no styled-components

**Causa:** Falta de crases (template literals) na definição do styled component.

**Incorreto:**
```javascript
export const Title = styled.h1
    color: red;
```

**Correto:**
```javascript
export const Title = styled.h1`
    color: red;
`;
```

## 📝 Notas

- O Vite utiliza Hot Module Replacement (HMR) para atualização instantânea durante o desenvolvimento
- Styled-components permite escrever CSS diretamente nos arquivos JavaScript
- A estrutura de containers facilita a organização de componentes maiores

---

Projeto criado em Fevereiro de 2026
