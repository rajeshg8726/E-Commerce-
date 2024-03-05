
const admin_register = require('../models/adminModels/loginModels');
const product_category = require('../models/adminModels/productModels');

const load_admin_dashboard = async (req, res) => {
    try {
        res.render('adminview/dashboard');
    } catch (error) {
        console.log(error.message);
    }
}

const load_signIn = async (req, res) => {
    try {
        res.render('adminview/sign-in');
        
    } catch (error) {
        console.log(error.message);
        
    }
}

const load_signUp = async (req, res) => {
    try {
        res.render('adminview/sign-up');
        
    } catch (error) {
        console.log(error.message);
        
    }
}

const load_product_cat = async (req ,res) => {
    try {
        
        res.render('adminview/product_category');

    } catch (error) {
        console.log(error.message);
        
    }
}

const load_product_add = async (req, res) => {
    try {
        res.render('adminview/product_add');
    } catch (error) {
        console.log(error.message);
    }
}
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        
        // Create a new admin user
        const newAdmin = new admin_register({ name, email, password });
        await newAdmin.save();
        
        // Assuming you want to redirect to a dashboard route after successful registration
        // res.status(200).json({message: 'user registerd succes'});
        res.render('adminview/dashboard');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const verify_user = async (req, res) => {

    try {
        
        const {email , password} = req.body;

        const existUser = await admin_register.findOne({email});
    
        if(!existUser){
            res.status(200).json({message: 'User not exits'});
        }
    
        if(existUser.password !== password){
            res.status(200).json({message: 'Enter Valid Password'});
        }
    
        res.render('adminview/dashboard');


    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
  

}

const addProductCategory = async (req, res) => {

    try {
        const {name} = req.body;

        const existCat = await product_category.findOne({name});
        if(existCat){
            res.status(200).json({message: 'Category already exits'});
        }

        const newCat = new product_category({name});
        newCat.save();

        res.render('adminview/product_category');

    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
        
    }
}

module.exports = {
    // load_admin_dashboard,
    load_product_cat,
    load_product_add,
    addProductCategory,
    verify_user,
    load_signIn,
    load_signUp,
    registerAdmin,
}

