const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const Film = require('../../models/Films');

// GET Films
router.get('/', auth, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Film.find()
    .sort({ date:-1 })
    .then(items => {res.json(items).status(200)})
    .catch(err => req.err)
});


// POST Film
router.post('/', auth, (req, res) => {
    
    const newFilm = new Film({
        title: req.body.title,
        director: req.body.director,
        state: false
    });

    newFilm.save().then(item => res.status('200').json(item));
});

// DELETE Film
router.delete('/:id', auth, (req, res) => {
   Film.findById(req.params.id)
   .then(item => item.remove().then((item) => res.status(200).send(item)))
   .catch(err => res.status(404).json({success: false}));
});

// EDIT Film(title/director/state)
router.put('/:id', auth, (req, res) => {
    // console.log(req.body.state + "state w routerze")
    const newFilm = new Film({
        title: req.body.title,
        director: req.body.director,
        state : req.body.state,
        _id: req.params.id
    });
    
    
        Film.findByIdAndUpdate(req.params.id, newFilm, {new: true}, (err, model) => {
        if(err) res.status(404).send(model)
        res.status(200).send(model)
        
    
        
    })})





module.exports = router;