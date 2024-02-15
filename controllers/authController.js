// controllers/AuthController.js

const jwt = require('jsonwebtoken');

const generateAuthToken = (user) => {
  const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
  return token;
};

module.exports = {
  generateAuthToken
};
