# Blog Pessoal API

## Descrição

Este projeto é uma API desenvolvida com [NestJS](https://nestjs.com/) e [TypeScript](https://www.typescriptlang.org/) para servir como backend de um blog pessoal. A API foi criada para ser consumida por um frontend em React, permitindo autenticação de usuários, criação de postagens, gerenciamento de temas e usuários.

## Funcionalidades

- Cadastro e autenticação de usuários (JWT)
- CRUD de usuários
- CRUD de postagens
- CRUD de temas
- Proteção de rotas com autenticação
- Documentação automática com Swagger

## Tecnologias Utilizadas

- **NestJS** (Node.js)
- **TypeScript**
- **TypeORM** (MySQL, PostgreSQL, SQLite)
- **Passport** (JWT e Local)
- **Swagger** (documentação da API)
- **Bcrypt** (criptografia de senhas)
- **Class-validator** (validação de dados)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/blogpessoal.git
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd blogpessoal
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

Configure as variáveis de ambiente conforme seu banco de dados em um arquivo `.env` (opcional para produção).

## Executando a Aplicação

Para iniciar em modo de desenvolvimento:
```bash
npm run start:dev
```
A API estará disponível em `http://localhost:4000`.

## Documentação

Acesse a documentação interativa em:
```
http://localhost:4000/swagger
```

## Endpoints Principais

- **Usuários**
  - `POST /usuarios/cadastrar` — Cadastro de usuário
  - `POST /usuarios/logar` — Login e obtenção do token JWT
  - `GET /usuarios/all` — Listar todos os usuários (autenticado)
  - `PUT /usuarios/atualizar` — Atualizar usuário (autenticado)

- **Postagens**
  - `GET /postagens` — Listar postagens (autenticado)
  - `POST /postagens` — Criar postagem (autenticado)
  - `PUT /postagens` — Atualizar postagem (autenticado)
  - `DELETE /postagens/:id` — Deletar postagem (autenticado)

- **Temas**
  - `GET /temas` — Listar temas (autenticado)
  - `POST /temas` — Criar tema (autenticado)
  - `PUT /temas` — Atualizar tema (autenticado)
  - `DELETE /temas/:id` — Deletar tema (autenticado)

## Consumo no React

Para consumir esta API no React, utilize bibliotecas como Axios ou Fetch, enviando o token JWT no cabeçalho `Authorization` das requisições protegidas.

## Licença e Créditos

Este projeto foi desenvolvido durante o bootcamp **Full Stack Java** da **Generation Brasil**.

-  **Bootcamp**: Generation Brasil
-  **Desenvolvido por**:  Matheus Pereira Xavier 
-  **Para fins**: Educacionais e portfólio

**Generation Brasil** - Transformando vidas através da tecnologia! 🚀

##  Autor

**Seu Nome**
- GitHub: [@Matheus97px](https://github.com/Matheus97px)
- LinkedIn: [Matheuspx97](https://www.linkedin.com/in/matheuspx97/)
- Email: matheus97p.q@gmail.com
- Portfolio: [meu portifolio](https://matheus97px.github.io/portifolio/)


---

⭐ **Se este projeto te ajudou, considere dar uma estrela no repositório!**

**Desenvolvido com ❤️ e Nest**