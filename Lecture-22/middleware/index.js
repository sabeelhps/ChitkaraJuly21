const express = require('express');
const app = express();


app.use((req, res, next) => {
    
    req.name = 'Sabeel';
    console.log('My First Middleware');
    // res.send("HIJACKED BY MY APP.USE()");
    return next();

    console.log('Inside First Middleware after next()')
});

app.use((req, res, next) => {
    console.log('My Second Middleware');
    next();
});

app.use('/cat', (req, res, next) => {
    
    console.log('Middleware function at path /cat');

    next();
})


const verify = (req,res,next) => {
    
    const { password } = req.query;

    if (password === 'apple') {
        next();
    }

    res.send('TRY Again');
}


app.get('/greet',verify, (req, res) => {

    const { name } = req;

    console.log(name);

    res.send(`Hello from ${name}`);
});


app.get('/secret', verify, (req, res) => {
    
    res.send('This is a Secret.Only Verified user can see it');
});


app.get('/', (req, res) => {
    res.send('Connected');
})






app.listen(3000, () => {
    console.log('server running at port 3000');
})