const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name: {
        type: String,
        
    },
    completed : {
        type: Boolean,
        default: false
    }

});

module.exports = Todo = mongoose.model('todo', TodoSchema);