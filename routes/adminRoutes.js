const express = require('express');
const adminController = require('../controllers/adminController');
const path = require('path');
const ejs = require('ejs');

const router = express.Router();




router.get('/',adminController.load_signUp)
router.get('/signup',adminController.load_signIn);
router.post('/login', adminController.verify_user);
router.post('/register',adminController.registerAdmin);
router.get('/product_cat', adminController.load_product_cat);
router.get('/product_add', adminController.load_product_add);
router.post('/addProductCategory' , adminController.addProductCategory);




module.exports = router;
