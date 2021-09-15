const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware to parse the req.body - when data is sent through form data
app.use(express.urlencoded({ extended: true }));

// To parse the json data
app.use(express.json())


app.get('/', (req, res) => {
    
    res.render('index');
});


app.get('/user', (req, res) => {
    
    console.log(req.query);

    res.send("GET REQUEST");
});

app.post('/user', (req, res) => {
    
    console.log(req.body);

    res.send("POST REQUEST");
});



app.listen(2323, () => {
    console.log('server running at port 2323');
})