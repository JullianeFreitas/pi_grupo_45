# Avaliador de Bairros

Como prova de conceito do projeto Avaliador de Bairros, desenvolvemos um protótipo funcional de uma aplicação web responsiva que permite aos usuários realizar avaliações de bairros. O sistema inclui funcionalidades de login, cadastro, avaliação e visualização das avaliações por bairro, utilizando React no frontend, PHP no backend e MySQL como banco de dados. Essa versão inicial valida a viabilidade da plataforma e demonstra o potencial da proposta em centralizar informações úteis para futuros moradores, corretores e administradoras.


## 🛠 Tecnologias utilizadas( Preparação do Ambiente )

Para o desenvolvimento do projeto Avaliador de Bairros, foi definido um ambiente composto pelas seguintes tecnologias:

- **Frontend**: •	Frontend: React com JavaScript, utilizando create-react-app para estruturação inicial do projeto, e React Router para navegação entre páginas. A estilização foi feita com CSS puro, organizado por página.
- **Backend**: PHP puro, rodando localmente em um servidor Apache com o XAMPP. Os arquivos PHP são responsáveis pelas operações de login, cadastro, envio e consulta de avaliações.
- **Banco de dados**: MySQL, com tabelas para usuários, bairros e avaliações. A base foi criada e gerenciada via phpMyAdmin.


## ▶️ Como rodar

1. **Clone este repositório**

2. **Backend (PHP + MySQL)**
   - Copie os arquivos da pasta `/backend` para a pasta `htdocs` (caso use XAMPP).
   - Importe o banco de dados usando o script `/database/avaliador_bairros.sql` pelo phpMyAdmin.

3. **Frontend (React)**
   - Navegue até a pasta `/frontend`
   - Execute:
     ```bash
     npm install
     npm start
     ```

## ✅ Funcionalidades implementadas

- [x] Cadastro e login de usuários
- [x] Logout
- [x] Tela inicial com botão para avaliar bairros
- [x] Sistema de proteção de rota para Avaliação
- [x] Avaliação de bairros (nota + comentário)
- [x] Visualização de avaliações por bairro
- [x] Navegação entre páginas com React Router
- [x] Cabeçalho fixo e responsivo

## 📌 Requisitos atendidos

- Interface limpa e responsiva
- Separação clara entre frontend e backend
- Login com controle de sessão (em memória no frontend)
- Persistência das avaliações no banco de dados
- Navegação com React Router
- Organização em componentes reutilizáveis

## Nome dos integrantes

- AUGUSTO OTTO BIGUETTI RIBEIRO
- DANILO FOGACA PACHECO
- GABRIEL HUFF LEMOS
- JOAO VICTOR PEREIRA LIMA
- JULLIANE DE FREITAS
- MARIANA DIAS OLIVEIRA