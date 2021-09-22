const Product = require('./models/product');


const products = [
    {
        name: 'Iphone',
        price: 10000,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto, nobis minus unde voluptas itaque. Numquam velit nemo ad, iure voluptate, aliquam quam maiores a quisquam enim rem culpa ipsum.'
    },
    {
        name: 'Laptop',
        price: 99000,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto, nobis minus unde voluptas itaque. Numquam velit nemo ad, iure voluptate, aliquam quam maiores a quisquam enim rem culpa ipsum.'
    },
    {
        name: 'MacBook Air',
        price: 999999,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto, nobis minus unde voluptas itaque. Numquam velit nemo ad, iure voluptate, aliquam quam maiores a quisquam enim rem culpa ipsum.'
    },
    {
        name: 'T-Shirt',
        price: 999,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto, nobis minus unde voluptas itaque. Numquam velit nemo ad, iure voluptate, aliquam quam maiores a quisquam enim rem culpa ipsum.'
    },
    {
        name: 'Camara',
        price: 10000,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto, nobis minus unde voluptas itaque. Numquam velit nemo ad, iure voluptate, aliquam quam maiores a quisquam enim rem culpa ipsum.'
    }
];


const seedDB = async() => {
    
    await Product.deleteMany({});

    await Product.insertMany(products);
    console.log('DB Seeded');
}


module.exports = seedDB;