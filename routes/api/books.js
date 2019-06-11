const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const Book = require('../../models/Books');

// GET Books
router.get('/', auth, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Book.find()
    .sort({ date:-1 })
    .then(items => {res.json(items).status(200)})
    .catch(err => req.err)
});


// POST Book
router.post('/', auth, (req, res) => {
    
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        state: false
    });

    newBook.save().then(item => res.status('200').json(item));
});

// DELETE Book
router.delete('/:id', auth, (req, res) => {

   Book.findById(req.params.id)
   .then(item => (item.remove())
   .then(item => res.json(item).status(200)))
   .catch(err => res.status(404));
});

// EDIT Book(title/author/state)
router.put('/:id', auth, (req, res) => {
    // console.log(req.body.state + "state w routerze")
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        state : req.body.state,
        _id: req.params.id
    });
    
    
        Book.findByIdAndUpdate(req.params.id, newBook, {new: true}, (err, model) => {
        if(err) res.status(404).send(model)
        res.status(200).send(model)
        
    
        
    })})
   





module.exports = router;