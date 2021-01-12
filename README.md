# Be The Hero

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Alexz96/be-the-hero/blob/main/LICENSE)

# Sobre o projeto

Aplicação desenvolvida com base nas aulas da Semana OmniStack 11 onde no evento proporcionado pela Rocketseat de forma gratuita, pode-se aprender muito sobre ReactJS, HTML, CSS de forma prática e voltada para o mercado.

Sobre a aplicação desenvolvida, esta tem como objetivo incentivar a colaboração entre ONGs e demais usuários, visando uma colaboração para o bem comum. Na aplicação desenvolvida, é possível incluir "casos", ou seja, situações em que a ONG em questão necessita de um auxílio monetário para que possa solucionar o problema em questão, seja ela passível de impactar a comunidade em geral ou não.

## Layout web
![Web 1](https://github.com/Alexz96/be-the-hero/blob/main/assets/web/logon.png)
![Web 2](https://github.com/Alexz96/be-the-hero/blob/main/assets/web/register.png)
![Web 3](https://github.com/Alexz96/be-the-hero/blob/main/assets/web/profile.png)

## Layout App
<img src="https://github.com/Alexz96/be-the-hero/blob/main/assets/mobile/splashScreen.jpg" width="250" height="420">

# Tecnologias

## Back-end
- Node
  - CORS
  - Express
  - Knex
  - Sqlite3
  
## Front-end
- HTML
- CSS 
- JavaScript / TypeScript
- ReactJS

## Mobile
- Expo
- React Native

# Como executar o projeto

## Back end

```bash
# clonar repositório
git clone https://github.com/Alexz96/be-the-hero.git

# entrar na pasta do projeto
cd be-the-hero

# entrar na pasta do projeto back-end
cd backend

# instalar as dependências
npm install ou yarn install

# executar o projeto
npm start ou yarn start
```

## Front end

```bash
# clonar repositório
git clone https://github.com/Alexz96/be-the-hero.git

# entrar na pasta do projeto
cd be-the-hero

# entrar na pasta do projeto front-end
cd frontend

# instalar as dependências
npm install ou yarn install

# executar o projeto
npm start ou yarn start
```

## Mobile

```bash
# clonar repositório
git clone https://github.com/Alexz96/be-the-hero.git

# entrar na pasta do projeto
cd be-the-hero

# entrar na pasta do projeto mobile
cd mobile

# instalar o Expo caso não o possua, com o comando 
npm install -g expo-cli

# instalar as dependências do app mobile
npm install ou yarn install (preferencialmente)

# executar o app mobile
yarn start ou expo start (preferencialmente)
```

# Notas
- Em caso de execução completa da solução, deve-se executar o Back-end simultaneamente através do terminal, com as demais etapas do projeto
- Ao utilizar o Expo para execução do Mobile, deve-se verificar o endereço IP local para alteração no arquivo api.js dentro de mobile/src/services/ e mesmo assim, pode ser que ocorra erro na requisição (onde até o momento não identifiquei a solução)

# Autor

Alexsander de A. Oliveira

# Agradecimentos
- Rocketseat (Diego Fernandes)
- DevSuperior (Nelio Alves)
