const User = require('../models/loginModel');

// controllers/UserController.js


const AuthController = require('./authController');

module.exports = {

  async loadlogin(req, res){
    try {

      res.render('login');

    } catch (error) {
      console.log(error.message);
    }
  },

  async signup(req, res) {
    try {
      const { email, password , recheck } = req.body;
      // Check if the user already exists
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      // Create a new user
      const newUser = new User({ email, password,recheck });
      await newUser.save();
      // Generate JWT token for authentication
      const token = AuthController.generateAuthToken(newUser);
      // res.status(201).json({ token });
      res.render('index');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Check password
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      // Generate JWT token for authentication
      const token = AuthController.generateAuthToken(user);
      // res.status(200).json({ token });
      res.render('index');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  async logout(req,res){
    try {
      res.render('login');
    } catch (error) {
      console.log(error.message);
      
    }
  }
};
