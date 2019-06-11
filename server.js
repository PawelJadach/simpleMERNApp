const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const todo = require('./routes/api/todo');
const books = require('./routes/api/books');
const films = require('./routes/api/films');
const shoppingList = require('./routes/api/shoppingList');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');




const app = express();

//Middleware
app.use(bodyParser.json());

//Database
// DB Config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('błąd ' + err));



// //Routes
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);
app.use('/todo', todo);
app.use('/shoppingList', shoppingList);
app.use('/books', books);
app.use('/films', films);
app.use('/users', users);
app.use('/auth', auth);





// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server start on port ${port}`));