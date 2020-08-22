const Yup = require('yup');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authConfig = require('../../config/auth');

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    }

    const {
      name, lastName, email, password,
    } = request.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return response.status(400).json({ error: 'User already exists!' });
    };

    const user = await User.create({
      name,
      last_name: lastName,
      email,
      password,
    });

    return response.json({
      user: {
        id: user.id,
        name: user.name,
        last_name: user.last_name,
      },
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new UserController();
