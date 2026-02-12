# Sistema de Login e Cadastro - Frontend

Sistema completo de autenticação com React + Vite integrado com backend Node.js.

## 🚀 Tecnologias

- React 19
- Vite
- Axios
- React Router DOM
- CSS3

## 📋 Pré-requisitos

- Node.js (versão 20 ou superior)
- Backend Node.js rodando na porta 3000

## 🔧 Instalação

```bash
# Navegue até a pasta do projeto
cd teladelogin3/teladelogin3

# Instale as dependências
npm install
```

## ⚙️ Configuração

Certifique-se de que o backend está rodando em `http://localhost:3000`. Se precisar alterar a URL, edite o arquivo `src/services/api.js`:

```javascript
const api = axios.create({
    baseURL: 'http://localhost:3000/' // Altere aqui se necessário
})
```

## 🎮 Executar o Projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📱 Funcionalidades

### 🔐 Login
- Acesse `/login`
- Digite email e senha
- Após autenticação, será redirecionado para a home

### 📝 Cadastro
- Acesse `/cadastro`
- Preencha: Nome de usuário, Email, Idade (opcional), Senha
- Após cadastro, será automaticamente autenticado e redirecionado

### 🏠 Home
- Lista todos os usuários cadastrados
- Permite deletar usuários
- Botão de logout
- Protegida por autenticação (requer login)

## 🔑 Autenticação

O sistema utiliza JWT (JSON Web Tokens) para autenticação:
- Token é armazenado no localStorage após login/cadastro
- Token é enviado automaticamente em todas as requisições
- Redirecionamento automático para login se não autenticado

## 📁 Estrutura do Projeto

```
src/
├── App.jsx              # Configuração de rotas
├── main.jsx             # Entry point
├── pages/
│   ├── login/           # Página de login
│   ├── cadastro/        # Página de cadastro
│   └── home/            # Página principal (protegida)
└── services/
    └── api.js           # Configuração do Axios
```

## 🌐 Endpoints do Backend (Esperados)

- `POST /login` - Autenticar usuário
- `POST /cadastro` - Criar novo usuário
- `GET /usuarios` - Listar usuários (requer autenticação)
- `DELETE /usuarios/:id` - Deletar usuário (requer autenticação)

## 🎨 Estilização

Interface moderna com:
- Gradientes coloridos
- Animações suaves
- Design responsivo
- Feedback visual para ações do usuário

## ⚠️ Observações

- A senha deve ter no mínimo 6 caracteres
- Todos os campos marcados como obrigatórios devem ser preenchidos
- O token expira após 24 horas (configurável no backend)
