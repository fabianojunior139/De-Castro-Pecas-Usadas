<h1 align="center"> ⚙ API De Castro Peças Usadas ⚙</h1>
A seguir estarei falando um pouco sobre as estretégias de desenvolvimento adotadas para a API da De Castro Peças Usadas

## 🚀 Tecnologias Utilizadas

A API da De Castro Peças Usadas foi desenvolvida utilizando as seguintes tecnologias:

- Java 17
- Maven 
- Spring Boot 3.1
- Spring Data JPA
- Spring MVC
- Spring DOC (Swagger)
- Spring Security
- Padrão DTO

## ✅ Principais Funcionalidades da API

- [x] Autenticação de usuários utilizando o Json Web Token (JWT)
- [x] Gerenciamento de peças, vendas e anúncios da empresa

## 📈 Diagrama de Classes

Essa foi a estrutura do banco de dados utilizada no desenvolvimento dessa aplicação <br>

![image](https://github.com/fabianojunior139/de-castro/assets/100708547/5285cb25-8c06-4a72-8d02-014e945f3e80)

## Endpoints

Abaixo estarão expostos os principais endpoints da API

### Endpoint para login
```ts
Método: POST
URL: `http://localhost:8080/login` endpoint para autenticação de usuários.
```

### Endpoints para gerenciar peças cadastradas no estoque
```ts
Método: GET
URL: `http://localhost:8080/automotive-part` endpoint para listar todas as peças cadastradas na base de dados.

Método: GET
URL: `http://localhost:8080/automotive-part/{id}` endpoint para listar uma peça específica.

Método: POST
URL: `http://localhost:8080/automotive-part` endpoint para cadastrar uma nova peça ao estoque.

Método: PUT
URL: `http://localhost:8080/automotive-part/{id}` endpoint para alterar uma peça.
```

### Endpoints para gerenciar as vendas da empresa
```ts
Método: GET
URL: `http://localhost:8080/sale` endpoint para listar todas as vendas cadastradas na base de dados.

Método: GET
URL: `http://localhost:8080/sale/{id}` endpoint para listar uma venda específica.

Método: POST
URL: `http://localhost:8080/sale` endpoint para cadastrar uma nova venda.

Método: PUT
URL: `http://localhost:8080/sale/{id}` endpoint para alterar uma venda.
```

### Endpoints para gerenciar os anúncios dos produtos da empresa
```ts
Método: GET
URL: `http://localhost:8080/announcement` endpoint para listar todos os anúncios cadastrados na base de dados.

Método: GET
URL: `http://localhost:8080/announcement/{id}` endpoint para listar um anúncio específica.

Método: POST
URL: `http://localhost:8080/announcement` endpoint para cadastrar um novo anúncio.

Método: PUT
URL: `http://localhost:8080/announcement/{id}` endpoint para alterar um anúncio.

Método: DELETE
URL: `http://localhost:8080/announcement/{id}` endpoint para excluir um anúncio.
```

### Endpoints para gerenciar os usuários
```ts
Método: GET
URL: `http://localhost:8080/user` endpoint para listar todos os usuários cadastrados na base de dados.

Método: GET
URL: `http://localhost:8080/user/{id}` endpoint para listar um usuário específico.

Método: POST
URL: `http://localhost:8080/user` endpoint para cadastrar um novo usuário.

Método: PUT
URL: `http://localhost:8080/user/{id}` endpoint para alterar um usuário.

Método: DELETE
URL: `http://localhost:8080/user/{id}` endpoint para excluir um usuário.
```
