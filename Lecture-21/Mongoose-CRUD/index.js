const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/movie-app')
    .then(() => {
        console.log('Connection Open!!!');
    })
    .catch((err) => {
        console.log('something went wrong');
        console.log(err);
    });


const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    score: Number,
    isWatched: Boolean
});


const Movie = mongoose.model('Movie', movieSchema);