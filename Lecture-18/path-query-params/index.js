const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.send("CONNECTED");
});



// Working with Path Parameters

// app.get('/r/cats', (req, res) => {
//     res.send("CATS");
// })

// app.get('/r/dogs', (req, res) => {
//     res.send("DOGS");
// })


// app.get('/r/apples', (req, res) => {
//     res.send("APPLES");
// });

app.get('/r/:subredit', (req, res) => {
    
    const { subredit } = req.params;

    // database logic

    res.send(`<h1>This is ${subredit} subreditt</h1>`)
});

app.get('/user/:userid/cart/:productid', (req, res) => {
    
    console.log(req.params);

    res.send("USER ROUTE");
});



// Working with Query Parameters

app.get('/search', (req, res) => {
    
    const { q } = req.query;

    res.send(`You are trying to search for ${q}`);
})



app.listen(3000, () => {
    console.log('server started at port 3000');
})