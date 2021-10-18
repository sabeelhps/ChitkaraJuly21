const mongoose = require('mongoose');



const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        min: 0
    },
    desc: {
        type: String,
        trim: true
    }
});


const Food = mongoose.model('Food', foodSchema);

module.exports = Food;