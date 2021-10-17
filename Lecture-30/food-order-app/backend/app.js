const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');

mongoose.connect('mongodb://localhost/food-app')
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log(err);
    });


// seedDB();

app.use(cors(
    {
        origin: ['http://localhost:3000'],
        credentials:true
    },
))


const foodRoutes = require('./api/foodRoutes');


app.get('/hello', (req, res) => {
    
    res.status(200).json({msg:'Hello from the server'})
})






app.use(foodRoutes);


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running at ${port}`)
})