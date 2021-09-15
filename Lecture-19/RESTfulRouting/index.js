const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

let comments = [
    {
        id:uuid(),
        username: 'Kartik',
        comment:'Hello from CB'
    },
    {
        id:uuid(),
        username: 'Cat',
        comment:'Meeooowww'
    },
    {
        id:uuid(),
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
        id:uuid(),
        ...req.body
    }

    comments.push(newComment);

    res.redirect('/comments');
});

// Display one comment
app.get('/comments/:id', (req, res) => {
   
    const { id } = req.params;
    
    const foundComment = comments.find((c) => c.id === id);

    
    res.render('show', {foundComment });
});

// displaying the form with prefilled data to be edited
app.get('/comments/:id/edit', (req, res) => {
    
    const { id } = req.params;

    const foundComment = comments.find((c) => c.id === id);

    res.render('edit', { foundComment });
});

// upadting the comment with the given id
app.patch('/comments/:id', (req, res) => {
   
    const { id } = req.params;

    const updatedCommentText = req.body.comment;

    const foundComment = comments.find((c) => c.id === id);

    foundComment.comment = updatedCommentText;

    res.redirect('/comments');
});

// Delete and destroy particular route
app.delete('/comments/:id', (req, res) => {
    
    const { id } = req.params;

    const newCommentsArray = comments.filter((c) => c.id !== id);

    comments = newCommentsArray;

    res.redirect('/comments');
});

app.listen(2323, () => {
    console.log('server runnig at port 2323');
})