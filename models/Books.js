const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    state: Boolean
});

module.exports = Book = mongoose.model('books', BookSchema);