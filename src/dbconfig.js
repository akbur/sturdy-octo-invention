import env from '../.env';

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: env.dbUser,
    password: env.dbPass,
    database: 'learn_app'
  }
});

knex.schema.createTableIfNotExists('resources', (table) => {
  table.increments('id').primary();
  table.string('name');
  table.string('type');
  table.string('url');
  table.string('details');
  table.string('progress');
  table.integer('priority');
  table.timestamps();
})
.catch((e) => {
  console.error(e);
});

export default knex;
