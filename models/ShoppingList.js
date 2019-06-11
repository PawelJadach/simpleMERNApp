// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ShoppingListSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     include: {
//         type: Boolean,
//         default: false
//     }
// });

// module.exports = ShoppingListSchema = mongoose.model('ShoppingListSchema', ShoppingListSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
    name: String,
    bought: Boolean
});

module.exports = ShoppingList = mongoose.model('shopping-list', ShoppingListSchema);