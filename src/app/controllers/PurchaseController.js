const Yup = require('yup');
const Purchase = require('../models/Purchase');
const User = require('../models/User');

class PurchaseController {
  async index(request, response) {
    const purchases = await Purchase.findAll({
      attributes: ['id', 'user_id', 'order', 'total'],
      limit: 20,
      order: [
        ['id', 'DESC'],
      ],
      include: [
        {
          model: User,
          as: 'buyer',
          attributes: ['id', 'name', 'last_name'],
        },
      ],
    });

    return response.json(purchases);
  };

  async store(request, response) {
    const schema = Yup.object().shape({
      total: Yup.number().required(),
      order: Yup.string().required(),
      order: Yup.array().of(
        Yup.object().shape({
          product_id: Yup.number().required(),
			    amount: Yup.number().required(),
			    subtotal: Yup.number().required(),
        }),
      ),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    const { user_id } = request.params;

    const buyer = await User.findOne({
      where: { id: user_id },
      attributes: ['id', 'name', 'last_name'],
    });

    if (!buyer) {
      return response.status(400)
        .json({ error: 'Only valid users can do this.' });
    };

    const {
      order, total
    } = request.body;

    await Purchase.create({
      user_id,
      order,
      total,
    });

    return response.json({
      order,
      total,
      buyer,
    });
  };
};

module.exports = new PurchaseController();
