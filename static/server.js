module.exports = () => {
  return `
import { OnStartup, GRServer, GrApplicationServer } from '@node-gr/core';
import { Environment }                              from './environments/environment';
import * as bodyParser                              from 'body-parser';

const MONGO_URL = \`mongodb://\${ Environment.MONGO_SERVER_ADDRESS }:\${ Environment.MONGO_SERVER_PORT }/\${ Environment.MONGO_DATABASE_NAME }\`;

@GRServer({
  modules: [],
  mongoUrl: MONGO_URL,
  handleAppCreated: (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }
})
export class Server extends GrApplicationServer {

  @OnStartup
  public async onStartUp() {
    console.log('app started');
  }

}

`;
}
