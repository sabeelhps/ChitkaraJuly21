const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const comments = [
    {
        id:0,
        username: 'Kartik',
        comment:'Hello from CB'
    },
    {
        id:1,
        username: 'Cat',
        comment:'Meeooowww'
    },
    {
        id:2,
        username: 'Dog',
        comment:'Woooof Wooof'
    },
]



app.get('/', (req, res) => {
    res.send("Connected");
});


// Restful Routes ----------------------------

// Get all the Comments and Display
app.get('/comments', (req, res) => {
    res.render('index', { comments });
});

// Display from to create new comment
app.get('/comments/new', (req, res) => {
    
    res.render('new');
});

// create a new Comment

app.post('/comments', (req, res) => {
    
    const newComment = {
        id:comments.length,
        ...req.body
    }

    comments.push(newComment);

    res.redirect('/comments');
});


app.get('/comments/:id', (req, res) => {
   
    const { id } = req.params;
    
    const foundComment = comments.find((c) => c.id === parseInt(id));

    
    res.render('show', {foundComment });
});


app.listen(2323, () => {
    console.log('server runnig at port 2323');
})