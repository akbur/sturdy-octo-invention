import knex from './dbconfig';

export const getAllResources = (req, res) => {
  knex.select().table('resources')
  .then((response) => {
    res.json(response);
  });
};

export const getResource = (req, res) => {
  const { resourceId } = req.params;
  res.end('get resource ', resourceId);
};

export const addResource = (req, res) => {
  const { name, type, url, details, progress, priority } = req.body;
  knex.insert({ name, type, url, details, progress, priority }).into('resources')
  .then((id) => {
    console.log(id);
    res.end();
  })
  .catch((err) => {
    if (err) {
      console.error(err);
    }
  });
}
