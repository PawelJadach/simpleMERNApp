import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, EDIT_BOOK, BOOKS_LOADING, EDITSTATE_BOOK} from './types' 
import axios from 'axios';
import { tokenConfig } from './authActions';

export const getBooks = () => (dispatch, getState) => {
    dispatch(setBooksLoading());
    axios   
        .get('http://localhost:80/books', tokenConfig(getState))
        .then(res => dispatch({
                type: GET_BOOKS,
                payload: res.data
            }))
          
}


export const deleteBook = id => (dispatch, getState) => {
    axios
        .delete(`http://localhost:80/books/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_BOOK,
            payload: res.data._id
        }))
        
    
}


export const editBook = (id, title, author, state) => (dispatch, getState) => {
    // console.log("działa w actions " + title +" "+ author)
   axios
        .put(`http://localhost:80/books/${id}`, {title, author, state}, tokenConfig(getState))
        .then(res => dispatch({
            type: EDIT_BOOK,
            payload: res.data
            
        }))
        .catch(err => console.log("niedziała" + err))
        

}

export const addBook = (book) => (dispatch, getState) => {
    axios
    .post(`http://localhost:80/books`, book, tokenConfig(getState))
    .then(res => dispatch({
        type: ADD_BOOK,
        book: res.data
    }))
}

export const editStateBook = (id, title, author, state) => (dispatch, getState) => {
   
    // console.log(state+ " w actions")
    axios
    .put(`http://localhost:80/books/${id}`, {title, author, state}, tokenConfig(getState))
      .then(res => dispatch({
        type: EDITSTATE_BOOK,
        payload: res.data
    }))
}


export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING 
    }
}