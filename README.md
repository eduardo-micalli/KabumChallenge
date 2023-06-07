<h1 align="center">Kabum Challenge</h1>

# Sobre 

Projeto CRUD para gerenciamento de clientes, com acesso via login.

## Stacks 💻

- **Node.js**
- **React** 
- **MySQL**
- **Express**

## Iniciando Projeto 🚀

### Requisitos

1. Configurar a conexão com o MySQL no arquivo **KabumChallenge/backend/config/database.js** preenchendo os seguintes dados: 
    host:  ,
    port:  ,
    user:  ,
    password:  ,
    database: 'KabumChallenge',

2. Rodas os scripts para a criação do banco e das tabelas, e também popular a tabela de Usuários:

    <p>create database KabumChallenge
    use KabumChallenge

    create table User(
    Userid int AUTO_INCREMENT,
    Email varchar(255) not null,
    Password varchar(40) not null,
    Primary key (Userid)
    );

    Insert into User (Email, Password) Values ("admin@gmail.com", "admin")

    create table Client(
    Clientid int AUTO_INCREMENT,
    Name varchar(255) not null,
    DOB date not null,
    CPF varchar(11) not null,
    RG varchar(10) not null,
    Phone varchar(15) not null,
    PRIMARY KEY (Clientid)
    );

    create table Address(
    Addressid int auto_increment,
    Clientid int not null,
    Street varchar(255) not null,
    District varchar(100) not null,
    City varchar(100) not null,
    HouseNumber varchar(5),
    ZipCode varchar(9) not null,
    State varchar(2) not null,
    Country varchar (100) not null,
    PRIMARY KEY(Addressid),
    Foreign Key(Clientid) references Client(Clientid)
    ); <p>

### Rodar Aplicação

1. Rodar o comando npm install no **KabumChallenge/** e no **KabumChallenge/client** para instalar as dependências de ambos os projetos. 
2. Rodar o comando npm start nos mesmos caminhos do passo anterior para iniciar cada um dos projetos separadamente.

**Obs: Backend usa a porta 3001 e o frontend usa a porta 3000, por isso foi adicionado um proxy para o redirecionamento das requisições**


## Processo de desenvolvimento

- Como descrito no desafio, o desenvolvimento foi feito sem utilizar frameworks extras.
- Ambos os projetos (frontend e backend) foram sendo feitos simultâneamente por partes, primeiramente pelo login e em seguida passando para o gerenciamento dos clientes.
- O Backend chegou a ser finalizado e testado via postman, antes da finalização do frontend. 
- Por não ter sido possível finalizar o projeto por completo, dexarei em sequência quais seriam os próximos passos.

## Próximos passos

- Como o frontend não chegou a ser finalizado, o primeiro passo seria finalizar os requests do frontend com o mínimo de UI (Cadastro, Edição , Exclusão de clientes e Listagem, Criação, Edição e Exclusão de endereços).

- Melhoria de tratamento de excessões dos endpoints do Backend.

- Refinamento da UI com componentização e melhora visual. 

- Salvamento do token de autenticação em cache e verificações relativas ao uso do token.

- Criação dos testes unitários para ambos os projetos. 


