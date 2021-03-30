import express, {Express} from 'express';
import {createServer} from 'http';
import cors from 'cors';
import('./database');

import {PORT, CLIENT} from './configs/env';
import createSocket from './core/socket';
import createRoutes from './core/routes';


const app: Express = express();
const server = createServer(app);
const io = createSocket(server);

createRoutes(app, io);

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", CLIENT);
  next();
});
app.use(cors({origin: CLIENT, credentials: true}));


server.listen(PORT || 8000, () =>
  // tslint:disable-next-line: no-console
  console.log('server started!')
);
