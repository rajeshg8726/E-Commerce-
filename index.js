const express = require('express');
const adminroutes = require('./routes/adminRoutes');
const clientroutes = require('./routes/clientRoutes');
const path = require('path');
const ejs = require('ejs');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// connection to database
mongoose
  .connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(()=> console.log("Mongodb is connected"))
  .catch((err) =>console.log("Mongo error", err));

// app.use(express.static('public'));


// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// routes for the admin side use 
// app.use('/', adminroutes);

// routes for client side use
app.use('/', clientroutes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

