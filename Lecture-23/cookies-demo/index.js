const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser());



app.get('/', (req, res) => {
    
    res.send("COOKIE DEMO");
});

app.get('/greet', (req, res) => {

    console.log(req.cookies);

    const { user } = req.cookies;

    res.send(`Hello from ${user}`);
})


app.get('/setname', (req, res) => {
    
    const { name } = req.query;

    res.cookie('user', name);
    res.cookie('mode', 'dark');

    res.redirect('/greet');
})




app.listen(3000, () => {
    console.log('server running at port 3000');
})