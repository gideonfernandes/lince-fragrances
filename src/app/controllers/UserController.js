const Yup = require('yup');
const User = require('../models/User');

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required()
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const {
      name, lastName, email,
    } = request.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return response.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create({
      name,
      last_name: lastName,
      email,
    });

    return response.json({
      id: user.id,
      name: user.name,
      lastName: user.last_name,
      email: user.email,
    });
  }
}

module.exports = new UserController();
