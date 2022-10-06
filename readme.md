
<div align="center"><img style = "width:100%;"src="https://i.imgur.com/WfTHidZ.png"></img></div>
<hr>
<h2 align=center>RepoProvas</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center> <b>RepoProvas</b>, a system for sharing exams between students!</h4>
<h4 align=center>In RepoProvas anyone can look for old tests of their subjects and teachers or send old tests to help freshmen</h4>


<hr>


<p align="center">
   <img src="https://img.shields.io/badge/author-Daniel Oliveira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/DanielCdOliveira/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>


## :computer: Technologies and Concepts

- REST APIs
- JWTs
- Node.js
- TypeScript
- postgresql
- Prism
- Jest
- Heroku

***

## :rocket: Routes

```yml
POST /sign-up
    - Route to register a new user
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "passwordConfirmation": "loremipsum"
}
```
    
```yml
POST /sign-in
    - Route to login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "password": "loremipsum"
    }
```

```yml
POST /test/create (authenticated)
    - Route to create test
    - headers: {"Authorization": "Bearer $token" }
    - body: {
    "name": "Exam name",
    "pdfUrl":"https://urldopdf.com",
    "category": "Project",
    "teacher":"Diego Pinho" ,
    "discipline": "React"
}
```
    
```yml
GET /tests/discipline (authenticated)
    - Route to list tests ordered by subjects
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

    
```yml
GET /tests/tests (authenticated)
    - Route to list tests ordered by teachers
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Running the application

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository on your machine:

```
git clone https://github.com/DanielCdOliveira/projeto20-repoprovas
```

Then, inside the folder, run the following command to install the dependencies.

```
npm install
```

Once the process is finished, just start the server:

> To upload the application to the development environment:
```
npm run dev
```

> To upload the integration testing application:
- it is necessary to create a **.env.test** file to run this command
```
npm run test
```

> To run the project build with typescript:

```
npm run build
```
> To upload the application after the build:
```
npm run start
```

## Thunder client

- For manual tests it is possible to import the file **thunder-collection_repoprovas.json**
