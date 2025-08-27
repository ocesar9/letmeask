# Letmeask 🙋‍♀️

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/lioc3sar/letmeask/blob/master/LICENSE)
[![Firebase](https://img.shields.io/badge/Firebase-hosting-orange)](https://letmeask-183d0.web.app/)

## 📋 Sobre o Projeto

**Letmeask** é uma plataforma para **criação de salas de Q&A em tempo real**. A aplicação permite que administradores criem salas para receber perguntas de usuários durante eventos, aulas ou apresentações, facilitando a interação e organização de perguntas de forma dinâmica e intuitiva.

🔗 **Demo:** [https://letmeask-183d0.web.app/](https://letmeask-183d0.web.app/)

## ✨ Funcionalidades

- 🏠 **Criação de Salas** - Administradores podem criar salas com códigos únicos
- ❓ **Envio de Perguntas** - Usuários fazem perguntas em tempo real
- 👍 **Sistema de Likes** - Comunidade pode curtir perguntas relevantes
- 🔐 **Autenticação Google** - Login seguro via Firebase Auth
- 👨‍💼 **Painel do Administrador** - Controle total sobre perguntas da sala
- ✅ **Marcar como Respondida** - Organização visual das perguntas
- 🗑️ **Excluir Perguntas** - Remoção de conteúdo inadequado
- 📱 **Sincronização Real-time** - Atualizações instantâneas via Firebase
- 📋 **Compartilhamento de Sala** - Código único para entrada

## 🖼️ Layout da Aplicação

### Página Inicial
Interface de entrada onde usuários podem criar novas salas ou entrar em salas existentes usando códigos de acesso.

![Página Inicial](https://github.com/lioc3sar/letmeask/blob/master/images/Home.png)

### Visão do Usuário
Interface para participantes da sala, onde podem visualizar e enviar perguntas, além de curtir perguntas de outros usuários.

![Visão do Usuário](https://github.com/lioc3sar/letmeask/blob/master/images/User.png)

### Painel do Administrador
Interface exclusiva do criador da sala com controles avançados para gerenciar perguntas, marcar como respondidas e excluir conteúdo.

![Painel do Administrador](https://github.com/lioc3sar/letmeask/blob/master/images/Admin.png)

## 🗄️ Modelo de Dados

### Estrutura do Firebase Realtime Database
Diagrama conceitual mostrando a organização dos dados no Firebase, incluindo relacionamentos entre salas, perguntas e usuários.

![Modelo Conceitual](https://github.com/lioc3sar/letmeask/blob/master/images/modelo-relacional.png)

## 🚀 Tecnologias Utilizadas

### Backend & Database
- **[Firebase Realtime Database](https://firebase.google.com/docs/database)** - Banco de dados NoSQL em tempo real
- **[Firebase Authentication](https://firebase.google.com/docs/auth)** - Sistema de autenticação com Google
- **[Firebase Hosting](https://firebase.google.com/docs/hosting)** - Hospedagem estática

### Frontend
- **[React.js](https://reactjs.org/)** - Biblioteca JavaScript para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** - Estruturação semântica
- **[CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)** - Estilização com SCSS

### Recursos Utilizados
- **Context API** - Gerenciamento de estado global
- **Firebase SDK** - Integração com serviços Firebase
- **React Hooks** - useState, useEffect, useContext, custom hooks
- **Real-time Listeners** - Sincronização em tempo real
- **React Router** - Navegação entre páginas

## 📦 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta no Firebase

### Instalação e Execução
```bash
# Clone o repositório
git clone https://github.com/lioc3sar/letmeask

# Acesse a pasta do projeto
cd letmeask

# Instale as dependências
npm install
# ou
yarn install

# Configure as variáveis de ambiente
# Crie um arquivo .env.local com suas configurações do Firebase
REACT_APP_API_KEY=sua_api_key
REACT_APP_AUTH_DOMAIN=seu_auth_domain
REACT_APP_DATABASE_URL=sua_database_url
REACT_APP_PROJECT_ID=seu_project_id
REACT_APP_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_APP_ID=seu_app_id

# Execute a aplicação em modo de desenvolvimento
npm start
# ou
yarn start

# Acesse http://localhost:3000 no seu navegador
```

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](https://github.com/lioc3sar/letmeask/blob/master/LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Júlio Guimarães**
- GitHub: [@ocesar9](https://github.com/ocesar9)
- LinkedIn: [Seu perfil LinkedIn](https://www.linkedin.com/in/j%C3%BAlio-guimar%C3%A3es-183110162/)
- LinkedIn: [Seu perfil LinkedIn](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
