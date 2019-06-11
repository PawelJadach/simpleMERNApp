const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const Item = require('../../models/ShoppingList');


router.get('/shoppingList', auth, (req, res) => {
    Item.find()
    .sort({ date:-1 })
    .then(items => res.json(items))
});



router.post('/shoppingList', auth, (req, res) => {
    const newProduct = new Item({
        name: req.body.name,
        bought: false
    });

    newProduct.save().then(item => res.json(item));
});


router.delete('/shoppingList/:id', auth, (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
});


// EDIT Film(title/director/state)
router.put('/shoppingList/:id', auth, (req, res) => {
    const name = req.body.name;
    const bought = req.body.bought;
    console.log(name, bought);
    if(name) {
        Item.findByIdAndUpdate(req.params.id, { name: name }, (err) => {
        if(err) return res.status(404).send(err);
        
    })}
    if(bought){
        Item.findByIdAndUpdate(req.params.id, { bought: bought }, (err) => {
        if(err) return res.status(404).send(err);
    })}
    
    return res.send("Item editing");
 });





module.exports = router;