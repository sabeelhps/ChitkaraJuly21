const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/',express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));


const todos = ["Go for Gym", "Buy Groceries", "Watch Web Series", "Learn Web"];



app.get('/todo', (req, res) => {

    if (req.xhr) {
        console.log("AJAX Request");
        res.status(200).json(todos);
    } else {
        console.log("Normal Request");
        res.render('todos', { todos });
    }
});

app.post('/todo', (req, res) => {
    
    const { todo } = req.body;

    todos.push(todo);

    res.redirect('/todo');
})


app.listen(2323, () => {
    console.log('server running at port 2323');
})
