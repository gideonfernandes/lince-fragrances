const Sequelize = require('sequelize');

class Stock extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        product_id: Sequelize.INTEGER,
        amount: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}

module.exports = Stock;
