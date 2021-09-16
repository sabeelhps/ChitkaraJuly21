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

// Model --> JS Class

const Movie = mongoose.model('Movie', movieSchema);

// const ironman = new Movie({ name: 'Ironman', year: 2010, score: 8, isWatched: true });
// const superman = new Movie({ name: 'Superman', year: 2012, score: 8.5, isWatched: false });


const fakeMovies = [
    { name: 'Starwar', year: 2015, score: 6.5, isWatched: true },
    { name: 'Martian', year: 2017, score: 8, isWatched: false },
    { name: 'Spiderman', year: 2012, score: 7.8, isWatched: true },  
]


Movie.insertMany(fakeMovies)
    .then((m) => {
        console.log(m);
    });


// console.log(ironman);

// ironman.save()
//     .then((m) => {
//         console.log(m);
//         console.log('ironman saved in DB')
//     })
//     .catch((err) => {
//         console.log(err);
//     })

