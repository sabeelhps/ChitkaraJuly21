const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


// Get all the products
router.get('/products', async(req, res) => {
    
    const products = await Product.find({});

    res.render('products/index',{products});
});

// Get the new from to create new product
router.get('/products/new', (req, res) => {
    res.render('products/new')
});

// create a new product with the given payload
router.post('/products', async (req, res) => {
    
    const newProduct = {
        ...req.body
    }

    await Product.create(newProduct);

    res.redirect('/products');
});

// Show a particular product
router.get('/products/:id', async (req, res) => {
    
    const { id } = req.params;

    // inflating the foundproduct with the reviews using populate
    const product = await Product.findById(id).populate('reviews');

    res.render('products/show', { product });
});


// getting the edit form prefilled with the data
router.get('/products/:id/edit', async (req, res) => {
    
    const { id } = req.params;

    const product = await Product.findById(id);

    res.render('products/edit', { product });
});


// updating the product with the given payload
router.patch('/products/:id', async (req, res) => {
    
    const updatedProduct = req.body;
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, updatedProduct);


    res.redirect(`/products/${id}`);
});

router.delete('/products/:id', async (req, res) => {

    const { id } = req.params;
    
    await Product.findOneAndDelete(id);

    res.redirect('/products');
});


// Creating a review for each product

router.post('/products/:id/review', async(req, res) => {

    const { id } = req.params;
    const product = await Product.findById(id);

    const { rating, comment } = req.body;

    const review = new Review({ rating, comment });

    product.reviews.push(review);

    await product.save();
    await review.save();

    res.redirect(`/products/${id}`);
});


module.exports = router;