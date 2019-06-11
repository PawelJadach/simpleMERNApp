const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    title: String,
    director: String,
    state: Boolean  
});

module.exports = Film = mongoose.model('films', FilmSchema);