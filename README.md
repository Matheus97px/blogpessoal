# Blog Pessoal

## Descrição

Este é um projeto de um blog pessoal desenvolvido com NestJS, uma estrutura Node.js para a construção de aplicativos do lado do servidor eficientes e escaláveis. O projeto inclui funcionalidades como autenticação de usuário, postagens, temas e gerenciamento de usuários.

## Tecnologias Utilizadas

*   **Framework:** [NestJS](https://nestjs.com/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Banco de Dados:** [TypeORM](https://typeorm.io/) com suporte para [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/) e [SQLite](https://www.sqlite.org/index.html)
*   **Autenticação:** [Passport](http://www.passportjs.org/) com estratégias [JWT](https://jwt.io/) e local
*   **Validação:** [class-validator](https://github.com/typestack/class-validator) e [class-transformer](https://github.com/typestack/class-transformer)
*   **Documentação da API:** [Swagger](https://swagger.io/)

## Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/blogpessoal.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd blogpessoal
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

## Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento com recarregamento automático, execute o seguinte comando:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Endpoints da API

A seguir estão os principais endpoints da API. Para uma documentação completa e interativa, acesse `http://localhost:3000/api` após iniciar a aplicação.

### Autenticação

*   `POST /auth/login` - Autentica um usuário e retorna um token JWT.
*   `GET /auth/profile` - Retorna o perfil do usuário autenticado.

### Usuários

*   `GET /usuarios` - Lista todos os usuários.
*   `GET /usuarios/{id}` - Obtém um usuário por ID.
*   `POST /usuarios` - Cria um novo usuário.
*   `PUT /usuarios/{id}` - Atualiza um usuário.
*   `DELETE /usuarios/{id}` - Deleta um usuário.

### Postagens

*   `GET /postagens` - Lista todas as postagens.
*   `GET /postagens/{id}` - Obtém uma postagem por ID.
*   `POST /postagens` - Cria uma nova postagem.
*   `PUT /postagens/{id}` - Atualiza uma postagem.
*   `DELETE /postagens/{id}` - Deleta uma postagem.

### Temas

*   `GET /temas` - Lista todos os temas.
*   `GET /temas/{id}` - Obtém um tema por ID.
*   `POST /temas` - Cria um novo tema.
*   `PUT /temas/{id}` - Atualiza um tema.
*   `DELETE /temas/{id}` - Deleta um tema.

## Autor

*   **Matheus** - *Desenvolvedor* - [Matheus](https://github.com/Matheus97px)

