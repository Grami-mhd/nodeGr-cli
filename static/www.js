module.exports = () => {
  return `
import * as https      from 'https';
import * as http       from 'http';
import { Application } from 'express';

import { Environment } from '../src/environments/environment';
import { GrApplicationServer, GRLogger } from '@node-gr/core';
import { Server } from '../src/server';

const
  appServer: Server & GrApplicationServer = new Server() as Server & GrApplicationServer,
  listener = (options?: https.ServerOptions) => (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      const app: Application = appServer.app;

      /**
       * Normalize a port into a number, string, or false.
       */

      const
        normalizePort = (val: any): any => {
          const port: any = parseInt(val, 10);
          if (isNaN(port)) {
            return val;
          }
          if (port >= 0) {
            return port;
          }
          return false;
        },

        /**
         * Event listener for HTTP server "error" event.
         */
        onError = (error: any) => {
          if (error.syscall !== 'listen') {
            throw error;
          }
          const bind = typeof appPort === 'string' ? 'Pipe ' + appPort : 'Port ' + appPort;
          switch (error.code) {
            case 'EACCES':
              console.error(bind + ' requires elevated privileges');
              process.exit(1);
              break;
            case 'EADDRINUSE':
              console.error(bind + ' is already in use ');
              process.exit(1);
              break;
            default:
              throw error;
          }
          reject();
        },

        /**
         * Event listener for HTTP server "listening" event.
         */
        onListening = (): void => {
          const
            addr = server.address(),
            bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

          GRLogger.log('Listening on ' + bind);
          resolve();
        },

        /**
         * Get port from environment and store in Express.
         */
        appPort: any = normalizePort(Environment.PORT),

        /**
         * Create HTTP server.
         */
        server = options ? https.createServer(
          options,
          app
        ) : http.createServer(app);

      app.set('port', appPort);

      /**
       * Listen on provided port, on all network interfaces.
       */
      server.listen(appPort);
      server.on('error', onError);
      server.on('listening', onListening);
    });
  },
  start = (options?: https.ServerOptions) => {
    appServer.onConfigured(listener(options));
  };
if (appServer.app) {
  start();
} else {
  GRLogger.logError('no GRServer found');
}
`
}
