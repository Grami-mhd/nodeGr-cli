const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');
const cmd = require('node-cmd');

const superLog = (text, type = 'green') => console.log(chalk[type](figlet.textSync(text, { horizontalLayout: 'full' })));

module.exports = (projectName, nodeGrVersion) => {
  superLog('Node-GR / CLI')
  console.log('creating a new project')
  superLog(projectName, 'red')
  fs.mkdirSync(projectName);
  fs.mkdirSync(`${projectName}/bin`);
  fs.mkdirSync(`${projectName}/src`);
  fs.mkdirSync(`${projectName}/src/environments`);

  const packageJson = JSON.stringify(require('../static/package.json')(projectName, nodeGrVersion), null, 2);
  fs.writeFileSync(`${projectName}/package.json`, packageJson);

  const www = require('../static/www')();
  fs.writeFileSync(`${projectName}/bin/www.ts`, www);

  const tsconfig = JSON.stringify(require('../static/tsconfig')(), null, 2);
  fs.writeFileSync(`${projectName}/tsconfig.json`, tsconfig);

  const server = require('../static/server')();
  fs.writeFileSync(`${projectName}/src/server.ts`, server);

  const environment = require('../static/environment')();
  fs.writeFileSync(`${projectName}/src/environments/environment.ts`, environment);

 const webpackConf = require('../static/webpack')();
  fs.writeFileSync(`${projectName}/src/webpack.config.ts`, webpackConf);

  const envFile = require('../static/envFile')(projectName);
  fs.writeFileSync(`${projectName}/.env`, envFile);
  fs.writeFileSync(`${projectName}/src/environments/prod.env`, envFile);

  console.log('installing dependencies ...')
  // cmd.run('npm install');
}
