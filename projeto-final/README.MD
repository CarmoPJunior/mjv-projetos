# Projeto Final DevSchool Node MJV


# Objetivo

Criar um projeto de back-end com tema de livre escolha, porém seguindo as regras abaixo:

- Utilizar boas práticas de criação de pastas/estruturação do projeto;
- Utilizar typescript para escrever o código;
- Utilizar express para roteamento da aplicação;
- Criar no mínimo dois CRUD's(Create, Read, Update e Delete) completos de alguma funcionalidade, conectando com banco de dados MongoDB;
- Criar um endpoint para autenticação dos usuários da sua aplicação e devolver um token com expiração para 1 Hora;
- Criar no mínimo 4 endpoints que só poderão ser acessados por usuários autenticados.


# Tema escolhido

>

# Tecnologias utilizadas:

- Node versão v18.15;
- cors;
- express;
- dotenv;
- moment;
- typescript;
- ts-node;
- ts-node-dev;
- mongoose;
- bcrypt;
- jsonwebtoken;

# Como rodar o projeto
## 1º Instalar as depêndencias

> npm install

## 2ª Configurar o arquivo de variável de ambiente (.env), exemplo:

> SERVER_PORT=3000
> JWT_SECRET_KEY=DKJLSAJHDKLSAHJ456DSADSA1
> DATABASE_URL=mongodb://127.0.0.1:27017/mjvProjetoFinalFinancas


## 3° Roda a aplicação:

> npm run dev

ou

> npm start


---

# Para rodar a aplicação com o docker

# Endpoints

##

> localhost:3000/health
## Rotas de autenticação

> localhost:3000/auth

## Rotas de gerenciamento de usuário

> localhost:3000/user

## Rotas de gerenciamento categoria

> localhost:3000/categoria

## Rotas de gerenciamento de fatura

> localhost:3000/fatura

