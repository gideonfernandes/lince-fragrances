const Yup = require('yup');
const Product = require('../models/Product');

class ProductController {
  async index(request, response) {
    const products = await Product.findAll();

    return response.json(products);
  };

  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      price: Yup.number().required(),
      image: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const {
      title, price, image,
    } = request.body;

    const productTitleExists = await Product.findOne({ where: { title } });
    if (productTitleExists) {
      return response
        .status(400)
        .json({ error: 'Product title already exists.' });
    }

    const productImageExists = await Product.findOne({ where: { image } });
    if (productImageExists) {
      return response
        .status(400)
        .json({ error: 'Product image already exists.' });
    }

    const product = await Product.create({
      title,
      price,
      image,
    });

    return response.json({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      image_url: product.image_url,
    });
  };

  async show(request, response) {
    const { product_id } = request.params;

    const product = await Product.findOne({
      where: { id: product_id },
    });

    if (!product) {
      return response
        .status(400)
        .json({ error: 'Product is not found.' });
    };

    return response.json(product);
  };
}

module.exports = new ProductController();
