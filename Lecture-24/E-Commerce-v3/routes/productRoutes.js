const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn} = require('../middleware');


// Get all the products
router.get('/products', async(req, res) => {
    
    try {
        const products = await Product.find({});

        res.render('products/index',{products});
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
  
});

// Get the new from to create new product
router.get('/products/new',isLoggedIn, (req, res) => {
    res.render('products/new')
});

// create a new product with the given payload
router.post('/products',isLoggedIn, async (req, res) => {
    
    try {
        const newProduct = {
            ...req.body
        }
    
        await Product.create(newProduct);
    
        req.flash('success', 'Product Created Successfully!');
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
});

// Show a particular product
router.get('/products/:id', async (req, res) => {

    try {
        
        const { id } = req.params;
        // inflating the foundproduct with the reviews using populate
        const product = await Product.findById(id).populate('reviews');
        res.render('products/show', { product });
        
    } catch (e) {
        
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
});


// getting the edit form prefilled with the data
router.get('/products/:id/edit',isLoggedIn, async (req, res) => {
    
    try {
        const { id } = req.params;

        const product = await Product.findById(id);
    
        res.render('products/edit', { product });
    } catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
  
});


// updating the product with the given payload
router.patch('/products/:id',isLoggedIn, async (req, res) => {
    
    try {
        const updatedProduct = req.body;
        const { id } = req.params;

        await Product.findByIdAndUpdate(id, updatedProduct);


        res.redirect(`/products/${id}`);
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }
});

router.delete('/products/:id',isLoggedIn, async (req, res) => {

    try {
        const { id } = req.params;
    
        await Product.findOneAndDelete(id);

        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    }    
});


// Creating a review for each product

router.post('/products/:id/review',isLoggedIn, async(req, res) => {


    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        const { rating, comment } = req.body;

        const review = new Review({ rating, comment,user:req.user.username });

        product.reviews.push(review);

        await product.save();
        await review.save();

        req.flash('success', 'Successfully created your review!!');

        res.redirect(`/products/${id}`);
    }
    catch (e) {
        req.flash('error', 'oops,something went wrong');
        res.redirect('/error');
    } 
});


module.exports = router;