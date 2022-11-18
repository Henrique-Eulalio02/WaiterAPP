<h1 align="center">WaiterApp</h1>
<h2>Descrição do Projeto</h2>
<p>Projeto desenvolvido durante o evento O Poder do Javascript. Este projeto consiste em uma aplicação voltada para o meio alimentíceo, o qual é utilizado em dois meios: o garçom cadastra o pedido efetuado pelo cliente através de um aplicativo e, através desse app, os dados são enviados para um dashboard. Nesse meio, os funcionários responsáveis pela cozinha tem acesso a todos os pedidos ordenados por seus respectivos status (em espera, em produção, feito).
</p>
<h2>Funcionalidades do Projeto</h2>
<h3>Parte Web - Dashboard</h3>
<li>Visualização dos Pedidos: Através dessa funcionalidade o funcionário na parte da cozinha pode, de forma rápida, checar todos os pedidos realizados, suas respectivas quantidades e o preço total;</li>
<li>Ordenação de Pedidos por Status: Todos os pedidos estão ordenados pelos seus respectivos status (em espera, em produção, feito).</li>
<h3>Parte Mobile - Aplicativo</h3>

<h2>:mag_right: Como Iniciar o Projeto</h2>
<h3>:closed_lock_with_key: Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e o MongoDB (esse último requisito fica por conta pessoal, uma vez que a aplicação pode ser desenvolvida tanto através da instalação do MongoDB em seu computador, ou então, através do Docker).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

<h3>🎲 Rodando o Back End (API)</h3>
Obs: os comandos via terminal podem ser executados via npm ou <a href="https://yarnpkg.com/">yarn</a>.

```bash
# Clone este repositório
$ git clone <https://github.com/Henrique-Eulalio02/WaiterApp>

# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta api
$ cd api

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# A api inciará na porta:3001 - acesse <http://localhost:3001>
```

<h3>🎲 Rodando o Front End</h3>

```bash
# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta client
$ cd fe

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O client inciará na porta:5173 - acesse <http://localhost:5173>
```
<h2>🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/) - [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled-Components](https://styled-components.com/)
