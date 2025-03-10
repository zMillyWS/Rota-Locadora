# 🚗 **Teste Frontend**

## 📌 **Descrição**
Este é um projeto de teste frontend que implementa um sistema de gerenciamento de veículos. O sistema permite o cadastro e autenticação de usuários, exibição de uma tabela com os veículos cadastrados e um histórico de alterações realizadas.

---

## ⚙️ **Funcionalidades**

🔑 **Tela de Login**
- 🔐 Autenticação de usuários.
- 🆕 Opção de cadastro de novos usuários.

🏠 **Header**
- 👤 Exibe o nome do usuário logado.
- 🚪 Menu com opção de sair.

📋 **Página Inicial**
- 📌 Exibição de uma tabela com todos os veículos cadastrados.
- 🔍 Filtro para busca de veículos.
- ➕ Botão para cadastrar um novo veículo.
- 📌 Dropdown de opções para:
  - ✏️ Editar
  - ❌ Deletar
  - 🔍 Visualizar detalhes

🚗 **Modal Criar Veículo**
- **Campos:**
  - 🔢 **Placa:**
  - 📝 **Descrição:**
  - 📅 **Ano:**
  - 🚘 **Modelo:**
  - 🏷️ **Marca:**
  - 🎨 **Cor:**
  - 🎯 **Propósito de uso:**
  - 📍 **Local de repouso do veículo:** `[lat, long]`
- 🔄 Atualização automática da tabela após cadastrar/editar um veículo.

📜 **Página de Histórico**
- 📅 Listagem das atividades realizadas no sistema.
- 📌 Exemplo de entrada no histórico:
  ```plaintext
  PLACA-XXX alterada/deletada em XX/XX/XX às XX:XX:XX
  ```

📝 **Tela de Cadastro de Usuário**
- **Campos:**
  - 👤 Nome
  - 📧 Email
  - 🔑 Senha
  - 🔄 Confirmar senha
  - 🎂 Data de nascimento

🏎️ **Modal de Detalhes do Veículo**
- 📌 Exibição dos dados cadastrais do veículo.
- 🗺️ Exibição de um mapa indicando o local de repouso do veículo (utilizando [Leaflet.js](https://leafletjs.com)).

---

## 🛠️ **Tecnologias Utilizadas**
- 🏗️ **HTML**
- 🎨 **CSS**
- ⚡ **JavaScript**
- 🗺️ **Leaflet.js** (para exibição do mapa)

---

## 🚀 **Como Rodar o Projeto**

1️⃣ **Clone o Repositório**
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2️⃣ **Abra o arquivo `index.html`**
📂 Basta abrir o arquivo `index.html` no navegador para executar o projeto.

---

## 🤝 **Contribuição**
🍴 **Fork este repositório.**

🌿 **Crie uma branch com a sua feature:**
```sh
git checkout -b minha-feature
```

💾 **Commit suas mudanças:**
```sh
git commit -m 'Adiciona minha feature'
```

🚀 **Push para a branch:**
```sh
git push origin minha-feature
```

📩 **Abra um Pull Request.**

---

## 📜 **Licença**
📝 Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---
🚀 **Feito com dedicação para facilitar a gestão de veículos!**

