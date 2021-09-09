const express = require('express');
const app = express();

// console.log(app);


// app.use((req,res) => {
//     // console.log('YOU MADE A REQUEST');

//     // console.log(res);

//     res.send("THIS IS IS RESPONSE CORRESPONDING TO THE REQUEST THAT YOU JUST MADE!!")
// })


app.get('/', (req, res) => {
    res.send("This is a Root Path");
})


app.get('/cat', (req, res) => {
    
    res.send('<h1>Meeooowwww</h1>')
});

app.get('/dog', (req, res) => {
    
    res.send('<h1>Wooof Woooof</h1>')
});

app.post('/dog', (req, res) => {
    
    res.send("THIS IS THE POST REQUEST.IT IS DIFFERENT THAN GET REQUEST")
})


app.get("*", (req, res) => {
    res.send("YOU ARE REQUESTING THE WRONG URL");
})




app.listen(3000, () => {
    console.log('server listening at port 3000');
})
