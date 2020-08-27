# lince-fragrances

## Project

***EN:*** As a practical challenge proposed by the technology company Lince Net I developed this project which is basically a small ecommerce developed with Node.js on the backend and ReactJS on the frontend where it is possible for the user to create their account and select the desired items in the product list and make your purchase. It has features such as user registration, user login, shopping cart with values, quantities and products updated dynamically according to the user's actions, etc ...

***PT-BR:*** Como um desafio prático proposto pela empresa de tecnologia Lince Net desenvolvi este projeto que é basicamente um pequeno ecommerce desenvolvido com Node.js no backend e ReactJS no frontend onde é possível ao usuário criar sua conta e selecionar os itens desejados na lista de produtos e efetuar a sua compra. Possui funcionalidades como cadastro de usuário, login de usuário, carrinho de compras com valores, quantidades e produtos atualizados dinamicamente de acordo com as ações do usuário, etc ...

This project was developed with the following technologies:

- Node.js
- Express.js
- PostgreSQL & Sequelize
- Docker
- Yup
- JWT & bcryptjs
- ReactJS
- Styled Components
- Axios
- React Toastify
- Redux & Redux Saga
- {...}
***

## Preview Web
![preview-web](preview.png)
***

### How To Install

To clone and run this application, you'll need Git, Node.js, NPM/Yarn & Docker installed on your computer.

First, in order to get started, it is necessary to install Docker on your machine.
If you haven't installed it yet, click on this [link](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2) and see how to proceed.

#### After that from your command line:

```bash
# Start postgres container
$ sudo docker run --name lincedb -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Check if the container is running
$ sudo docker ps
```

#### Install Lince Fragrances API 

```bash
# Clone this repository
$ git clone https://github.com/gideonfernandes/lince-fragrances.git

# Go into the repository
$ cd lince-fragrances

# Install dependencies
$ yarn install

# Run migrations to create the database tables
$ yarn migrate

# Run seeds to populate products & stocks tables
$ yarn seed

# Start server
$ yarn start

# running on port 8888
```

#### Install Lince Fragrances Web Client

```bash
# Go into the repository
$ cd lince-fragrances/client

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### License

This project is under the MIT license.
