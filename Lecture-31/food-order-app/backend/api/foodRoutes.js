const express = require('express');
const router = express.Router();
const Food = require('../models/food');
const Order = require('../models/order');

router.get('/allfoods', async (req, res) => {
    try {
        const allfoods = await Food.find({});
        res.status(200).json(allfoods);
    }
    catch (e) {
        res.status(404).json({ msg: "Cannot fetch the foods at the moment" })
    }
});

router.post('/placeorder', async (req, res) => {

    try {
        const { cart: orderedItems } = req.body;
        const newOrder = new Order({ orderedItems });
       
        await newOrder.save()
        
        res.status(200).json({ msg: 'Order Place Successfully' });
    }
    catch (e) {
        res.status(400).json({ msg: 'Order Cannot be placed' });
    }
})





module.exports = router;