const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));




const todos = ['Go to Market', 'Learn Web', 'Watch Movies', 'Play Football', 'Go Shopping'];


app.get('/', (req, res) => {
    
    res.send('<h1>Home Route</h1>');
});


app.get('/temp', (req, res) => {
    
    res.render("home");
});

app.get('/random', (req, res) => {
    
    const randomNum = Math.floor(Math.random() * 100)

    res.render('random', { rnum: randomNum });
});

app.get('/todos', (req, res) => {
    
    res.render('todo', { todos });
});

app.get('/r/:subredit', (req, res) => {

    const { subredit } = req.params;

    // datbase logic

    res.render('subreditDemo', { subredit });
})


app.listen(8080, () => {
    console.log('server runnig at http://localhost:8080');
})