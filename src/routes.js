const { Router } = require('express');
const User = require('./app/models/User');

const routes = new Router();

routes.get('/', async (request, response) => {
  return response.json({ ok: true });
});

routes.get('/users', async (request, response) => {
  const user = await User.create({
    name: 'Gideon',
    last_name: 'Fernandes',
    email: 'gideon.de.fernandes@gmai.com',
  });

  return response.json(user);
});

module.exports = routes;
