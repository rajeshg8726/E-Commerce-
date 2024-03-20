const express = require('express');
const clientController = require('../controllers/clientController');
const path = require('path');
const ejs = require('ejs');
const upload = require('../middleware/index');


const router = express.Router();



const UserController = require('../controllers/loginController');
const AuthController = require('../controllers/authController');



router.get('/register', UserController.loadlogin);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.get('/logout',UserController.logout);



router.get('/blog', clientController.load_blog);
router.get('/product', clientController.load_product);
router.get('/profile', clientController.load_profile);
router.get('/cart', clientController.load_cart);
router.get('/contact', clientController.load_contact);
router.get('/about', clientController.load_about);
router.get('/dashboard', clientController.load_dashboard);
router.get('/productById/:id', clientController.getProductById);
router.post('/add-to-cart' , clientController.addProductToCart);






module.exports = router;
