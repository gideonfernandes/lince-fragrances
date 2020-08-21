const Yup = require('yup');
const Stock = require('../models/Stock');
const Product = require('../models/Product');

class StockController {
  async store(request, response) {
    const schema = Yup.object().shape({
      amount: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const { product_id } = request.params;

    const productExists = await Product.findOne({ where: { id: product_id } });

    if (!productExists) {
      return response
        .status(401)
        .json({ error: 'You can only create a stock for a valid product.' });
    };

    const stockAlreadyExists = await Stock.findOne({ where: { product_id } });

    if (stockAlreadyExists) {
      return response
        .status(400)
        .json({ error: 'The stock for this product already exists.' });
    };

    const stock = await Stock.create({
      product_id,
      amount: request.body.amount,
    });

    return response.json(stock)
  };

  async show(request, response) {
    const { product_id } = request.params;

    const stock = await Stock.findOne({
      where: { product_id },
      include: [
        {
          model: Product,
          as: 'product',
          attributes: ['id', 'title', 'price', 'image_url'],
        },
      ],
    });

    if (!stock) {
      return response
        .status(400)
        .json({ error: 'Stock for this product does not exists.' });
    };

    return response.json(stock);
  };
}

module.exports = new StockController();
