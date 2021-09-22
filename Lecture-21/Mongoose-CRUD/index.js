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
    name: {
        type: String,
        required: true,
        unique:true
    },
    year: {
        type: Number,
        min: 2000,
        max:2021
    },
    score: {
        type: Number,
        min: [0, 'score should not be less than 0'],
        max: [10, 'score should not be greater than 10'],
    },
    isWatched: {
        type: Boolean,
        default:false
    }
});


const Movie = mongoose.model('Movie', movieSchema);