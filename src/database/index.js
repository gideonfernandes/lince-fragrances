require('dotenv/config');
const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const User = require('../app/models/User');
const Product = require('../app/models/Product');
const Purchase = require('../app/models/Purchase');
const Stock = require('../app/models/Stock');

const models = [User, Product, Purchase, Stock];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();
