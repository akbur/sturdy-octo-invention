import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import config from '../.env';

import router from './routes';
import knex from './dbconfig';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(__dirname));
app.use(router);

app.listen(8080, ()=>{
  console.log('You are listening on port 8080');
});
