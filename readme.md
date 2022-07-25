# <p align = "center"> Projeto RepoProvas </p>

<p align="center">
   <img width="30%" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5c3-fe0f.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Daniel Oliveira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/DanielCdOliveira/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

- **RepoProvas**, um sistema de compartilhamento de provas entre estudantes!
    
- No RepoProvas qualquer pessoa pode procurar provas antigas de suas disciplinas e professores ou enviar provas antigas para ajudar os calouros.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs 
- Node.js
- TypeScript
- Postgresql
- Prisma
- Jest
- Heroku

***

## :rocket: Rotas

```yml
POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "senha": "loremipsum",
        "passwordConfirmation": "loremipsum"
}
```
    
```yml 
POST /sign-in
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```

```yml 
POST /test/create (autenticada)
    - Rota para criar teste
    - headers: {"Authorization": "Bearer $token" }
    - body: {
    "name": "Nome da prova",
    "pdfUrl":"https://urldopdf.com",
    "category": "Projeto",
    "teacher":"Diego Pinho" ,
    "discipline": "React"
}
```
    
```yml 
GET /tests/discipline (autenticada)
    - Rota para listar testes ordenados por disciplinas
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

    
```yml 
GET /tests/tests (autenticada)
    - Rota para listar testes ordenados por professores
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/DanielCdOliveira/projeto20-repoprovas
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor:

- Para subir a aplicação em ambiente de desenvolvimento:
```
npm run dev
```

- Para subir a aplicação de testes de integração:
```
npm run test
```

- Para rodar a build do projeto com typescript:
```
npm run build
```
- Para subir a aplicação após o build:
```
npm run start
```

## Thunder client

- Para testes manuais é possível importar o arquivo **thunder-collection_repoprovas.json**