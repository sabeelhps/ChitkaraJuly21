const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');

mongoose.connect('mongodb://localhost:27017/shop-db')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));

// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/productRoutes');


app.get('/', (req, res) => {
    res.send('Home Page');
});


app.use(productRoutes);



app.listen(2323, (req, res) => {
    console.log('server running at port 2323');
});