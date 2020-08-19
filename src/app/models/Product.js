const Sequelize = require('sequelize');

class Product extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        price: Sequelize.FLOAT,
        image: Sequelize.STRING,
        image_url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.image}`;
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

module.exports = Product;
