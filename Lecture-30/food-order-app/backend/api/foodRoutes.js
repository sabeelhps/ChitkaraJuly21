const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.get('/allfoods', async (req, res) => {
    try {
        const allfoods = await Food.find({});
        res.status(200).json(allfoods);
    }
    catch (e) {
        res.status(404).json({msg:"Cannot fetch the foods at the moment"})
    }
})






module.exports = router;