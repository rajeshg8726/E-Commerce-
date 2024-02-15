const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

const bodyParser = require('body-parser');


const mongoose = require('mongoose');
// const { error } = require('console');

const loginroutes = require('./routes/loginRoutes');

// connection to database
mongoose
  .connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(()=> console.log("Mongodb is connected"))
  .catch((err) =>console.log("Mongo error", err));


// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Route handler for rendering the HTML file with included styles and JavaScript
// to load the view
// app.get('/register', (req, res)=>{
//   res.render('login');
// });


app.use('/' , loginroutes);
app.get('/about', (req, res)=>{

  res.render('about');

});
app.get('/blog', (req, res)=>{

  res.render('blog-detail');

});
app.get('/product', (req, res)=>{

  res.render('product');

});
// app.use('/login', loginroutes);

// app.post('/login', loginroutes);
// app.get('/home' , loginroutes);

// after submitting the form
// Routes
// app.post('/signup', UserController.signup);
// app.post('/login', UserController.login);



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
