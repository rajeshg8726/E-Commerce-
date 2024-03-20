
const Product = require('../models/adminModels/productDetailsModel');
const product_category = require('../models/adminModels/productModels');
const Cart = require('../models/adminModels/cartModel');
const secret = "rajeshgupta@8726"
const jwt = require('jsonwebtoken');

const load_dashboard = async (req, res) => {

    try {
            const product = await Product.find();
            const categories = await product_category.find();
        res.render('index' , { product : product , categories:categories });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const load_blog = async (req, res) => {

    try {
        const product = await Product.find();
        const categories = await product_category.find();
        res.render('blog', { product : product , categories:categories });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const load_contact = async (req, res) => {

    try {
        const product = await Product.find();
        const categories = await product_category.find();
        res.render('contact', { product : product , categories:categories });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const load_product = async (req, res) => {

    try {
        const product = await Product.find();
        const categories = await product_category.find();
      
        res.render('product', { product : product , categories:categories  });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const load_cart = async (req, res) => {

    try {
        const product = await Product.find();
        const categories = await product_category.find();
      
        const token = req.cookies.usercookies; // Assuming the token is stored in a cookie named 'usercookies'
        //    extracting the cookie from the token
        const payload = jwt.decode(token);
        const cart = await Cart.find({user_id : payload.userId});
        console.log(cart);
        res.render('shoping-cart', { product : product , categories:categories  , user_id : payload.userId , cart : cart});
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}
 
const load_about = async (req, res) => {

    try {
        const product = await Product.find();
        const categories = await product_category.find();
        res.render('about', { product : product , categories:categories });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}


const load_profile = async (req, res) => {

try {
        const product = await Product.find();
        const categories = await product_category.find();
        res.render('profile', { product : product , categories:categories });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const getProductById = async(req,res) => {
try {
   const productId = req.params.id;
   const probyid = await Product.findById(productId);
   const product = await Product.find();
   const categories = await product_category.find();
   const token = req.cookies.usercookies; // Assuming the token is stored in a cookie named 'usercookies'
   //    extracting the cookie from the token
   const payload = jwt.decode(token);
   const cart = await Cart.find({user_id : payload.userId});
   console.log(cart);
   res.render('product-detail', { product : product , categories:categories , probyid : probyid , user_id : payload.userId , cart : cart });

} catch (error) {
    res.status(500).json({message: 'Internal server error'});
}
}

const addProductToCart = async (req, res) => {
        try {
            // Extract product details from the request body
            const { product_id, user_id } = req.body;
        
            // Create a new document in MongoDB collection
            await Cart.create({
              product_id: product_id,
              user_id: user_id,
              // Add more fields as needed
            });
        
 res.status(200).json({message: 'Product added in the cart successfully'});
        
 
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
        
    }
}

module.exports = {
    load_dashboard,
    load_blog,
    load_about,
    load_cart,
    load_contact,
    load_product,
    load_profile,
    getProductById,
    addProductToCart,

}

