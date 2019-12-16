<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="./web/src/assets/logo.png" width="200px" />
  <br>
</h1>

<p align="center">
<img alt="Github last commit" src="https://img.shields.io/github/last-commit/almir-figueiredo/gympoint">
<a href="https://www.codefactor.io/repository/github/almir-figueiredo/gympoint"><img src="https://www.codefactor.io/repository/github/almir-figueiredo/gympoint/badge" alt="CodeFactor" /></a>
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/almir-figueiredo/gympoint">
<img alt="Repository size" src="https://img.shields.io/github/repo-size/almir-figueiredo/gympoint.svg">
<a href="https://github.com/almir-figueiredo/gympoint/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/almir-figueiredo/gympoint.svg"></a>
<img alt="GitHub" src="https://img.shields.io/github/license/almir-figueiredo/gympoint.svg">
</p>

<h4 align="center">API Rest developed with Node.js, using Postgresql and Redis.</h4>
<h4 align="center">Web application developed with React.js, using Postgresql and Redis.</h4>
<h4 align="center">Mobile developed with React Native, using Postgresql.</h4>
<p align="center"><strong>Current Status:</strong> Ready for Rocketseat Review as GoStack Course Completion Work.</p>


<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-functionalities">Functionalities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-runnig-for-first-time">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## :rocket: Technologies

This project was developed with the following technologies:

For API Rest:

- [Express][express]
- [Node.js][nodejs]
- [Sequelize][sequelize]
- [node-postgres][pg] and [pg-hstore][pg-hstore]
- [Json Web Tokens][jwt]
- [Nodemailer][nodemailer]
- [Bee Queue][bee]
- [dotenv][dotenv]
- [bcryptjs][bcryptjs]
- [Date-fns][date-fns]
- [express-handlebars][exphbs]
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

For Web Application:

- [React.js][reactjs]
- [@rocketseat/unform][@rocketseat/unform]
- [Axios][axios]
- [Date-fns][date-fns]
- [History][history]
- [immer][immer]
- [Polished][polished]
- [prop-types][prop-types]
- [Reactotron][reactotron]
- [Redux][redux] and [Redux-saga][redux-saga]
- [Styled-components][styled-components]
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :construction: Functionalities

Gympoint is a web application that assists the management of gyms. The system is divided into two applications: Gympoint Web and Gympoint Mobile. 

Gympoint Web is used by the gym's management team to register and update student data; manage plans and enroll. In addition, through the web application it is possible to receive requests for help from students and answer them. 

Gympoint Mobile is a student-oriented application. With this app the student will be able to check in at the gym, make requests for assistance and receive the answers from the gym team.


## :information_source: Running for First Time

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.19][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/almir-figueiredo/gympoint gympoint

# For API:

# Go into the repository
$ cd gympoint
$ cd server

# Install dependencies
$ yarn

# Upgrade dependencies
$ yarn upgrade

# Run Postgres
$ docker run --name database -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -d postgres:11

# Run Redis
$ docker run --name redisgympoint -p 6379:6379 -d -t redis:alpine

# Setup the Postgres Database:
# Create the Database, then run Migrations & Seeds
$ yarn sequelize db:create 
$ yarn sequelize db:migrate && yarn sequelize db:seed:all

# Run Nodemailer
$ yarn queue

# Run the Server
$ yarn dev

# For Web Application:

# Go into the repository
$ cd gympoint
$ cd web

# Install dependencies
$ yarn

# Upgrade dependencies
$ yarn upgrade

# Run the Application on localhost
$ yarn start

# For Mobile Application:

# Install emulator:
# Follow the guidelines on the site: [Rocketseat][rocketseat]

# Go into the repository
$ cd gympoint
$ cd mobile

# Install dependencies
$ yarn

# Upgrade dependencies
$ yarn upgrade

# Run the Application on Android Emulator
$ yarn android

```


## :memo: License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

Made by Almir Figueiredo [Get in touch!](https://www.linkedin.com/in/almir-figueiredo-b23b53b9/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[express]: https://expressjs.com
[sequelize]: https://sequelize.org
[pg]:https://github.com/brianc/node-postgres
[pg-hstore]: https://github.com/scarney81/pg-hstore
[jwt]: https://jwt.io/
[nodemailer]: https://nodemailer.com/about/
[bee]: https://bee-queue.com/
[dotenv]: https://github.com/motdotla/dotenv#readme
[bcryptjs]: https://github.com/dcodeIO/bcrypt.js/
[date-fns]: https://date-fns.org/
[exphbs]: https://github.com/ericf/express-handlebars
[rocketseat]: https://docs.rocketseat.dev/ambiente-react-native/introducao
[reactjs]: https://pt-br.reactjs.org/
[@rocketseat/unform]: https://github.com/Rocketseat/unform
[axios]: https://github.com/axios/axios
[history]: https://www.npmjs.com/package/history?activeTab=versions
[immer]: https://github.com/immerjs/immer
[polished]: https://github.com/styled-components/polished
[prop-types]: https://www.npmjs.com/package/prop-types
[reactotron]: https://github.com/infinitered/reactotron
[redux]: https://redux.js.org/  
[redux-saga]: https://github.com/redux-saga/redux-saga
[styled-components]: https://www.styled-components.com/


