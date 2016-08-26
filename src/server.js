import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import routes from './routes';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);
app.use(express.static(__dirname));

app.listen(8080, ()=>{
  console.log('You are listening on port 8080');
});