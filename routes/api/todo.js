const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const Todo = require('../../models/Todo');


// GET Todos
router.get('/', auth, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    Todo.find()
    .sort({ date:-1 })
    .then(items => {res.json(items).status(200)})
    .catch(err => req.err)
});


router.post('/', auth, (req, res) => {
    const newTask = new Todo({
        name: req.body.name,
        completed: false
    });

    newTask.save().then(item => res.status(200).json(item));
});


router.delete('/:id', auth, (req, res) => {
   Todo.findById(req.params.id)
   .then(item => item.remove().then((item) => res.status(200).send(item)))
   .catch(err => res.status(404).json({success: false}));
});


// EDIT Task(name/state)
router.put('/:id', auth, (req, res) => {
    // console.log(req.body.state + "state w routerze")
    const newTodo = new Todo({
        name: req.body.name,
        completed : req.body.completed,
        _id: req.params.id
    });
    
    
        Todo.findByIdAndUpdate(req.params.id, newTodo, {new: true}, (err, model) => {
        if(err) res.status(404).send(model)
        res.status(200).send(model)
        
    
        
    })})




module.exports = router;