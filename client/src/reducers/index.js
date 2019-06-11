import { combineReducers } from 'redux'
import booksReducer from './booksReducer'
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import filmsReducer from './filmsReducer';
import todosReducer from './todoReducer';

export default combineReducers({
    books: booksReducer,
    error: errorReducer,
  auth: authReducer,
  films: filmsReducer,
  todos: todosReducer
})