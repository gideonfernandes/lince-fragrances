const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');
const ProductController = require('./app/controllers/ProductController');
const PurchaseController = require('./app/controllers/PurchaseController');
const StockController = require('./app/controllers/StockController');

routes.post('/users', UserController.store);

routes.get('/products', ProductController.index);
routes.get('/products/:product_id', ProductController.show);
routes.post('/products', ProductController.store);

routes.get('/purchases', PurchaseController.index);
routes.post('/purchases', PurchaseController.store);

routes.get('/stocks/:product_id', StockController.show);
routes.post('/stocks/:product_id', StockController.store);

module.exports = routes;
