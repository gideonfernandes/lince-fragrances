const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');
const ProductController = require('./app/controllers/ProductController');

routes.post('/users', UserController.store);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

module.exports = routes;
