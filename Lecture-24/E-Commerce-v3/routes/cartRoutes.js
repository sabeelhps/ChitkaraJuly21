const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const { isLoggedIn } = require('../middleware');

router.post('/cart/:productid/add', isLoggedIn, async (req, res) => {
    
    const { productid } = req.params;

    const product = await Product.findById(productid);

    const currentUser = req.user;

    currentUser.cart.push(product);

    await currentUser.save();

    req.flash('success', 'Item added to your cart successfully');
    res.redirect(`/products/${productid}`);
});


router.get('/user/cart', isLoggedIn, async (req, res) => {
    
    const userid = req.user._id;

    const user = await User.findById(userid).populate('cart');


    res.render('cart/userCart', { user });
});


router.delete('/cart/:id/remove',isLoggedIn, async(req, res) => {
    
    const productid = req.params.id;
    const userid = req.user._id;

    await User.findByIdAndUpdate(userid,{$pull:{cart:productid}})

    res.redirect('/user/cart');
})



module.exports = router;