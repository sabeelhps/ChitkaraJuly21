const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');
const seedDB = require('./seed');

mongoose.connect('mongodb://localhost:27017/shop-db')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));



// seed the database with products

// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("Connected");
});

// Get all the products from database
app.get('/products', async (req, res) => {
    
    const products = await Product.find({});

    res.render('index', { products });
});

// get the form to submit new product
app.get('/products/new', (req, res) => {
    res.render('new');
});

// create new product in a database
app.post('/products', async (req, res) => {
    
    const { name, price, desc } = req.body;

    await Product.create({ name, price, desc });

    res.redirect('/products');
});



app.listen(2323, () => {
    console.log('server started at port 2323');
})