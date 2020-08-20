const Sequelize = require('sequelize');

class Purchase extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        order: Sequelize.JSON,
        total: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'buyer' });
  }
}

module.exports = Purchase;
