
const Product = require('../models/adminModels/productDetailsModel');
const product_category = require('../models/adminModels/productModels');


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
        res.render('product', { product : product , categories:categories });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
}

const load_cart = async (req, res) => {

    try {
        const product = await Product.find();
        const categories = await product_category.find();
        res.render('shoping-cart', { product : product , categories:categories });
        
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
   res.render('product-detail', { product : product , categories:categories , probyid : probyid });
// res.render('product-detail');
// res.json({probyid});
   
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

}