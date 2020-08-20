const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');
const ProductController = require('./app/controllers/ProductController');
const PurchaseController = require('./app/controllers/PurchaseController');

routes.post('/users', UserController.store);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

routes.get('/purchases', PurchaseController.index);
routes.post('/purchases', PurchaseController.store);

module.exports = routes;
