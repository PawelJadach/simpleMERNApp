import { GET_FILMS, ADD_FILM, DELETE_FILM, EDIT_FILM, FILMS_LOADING, EDITSTATE_FILM} from './types' 
import axios from 'axios';
import { tokenConfig } from './authActions';

export const getFilms = () => (dispatch, getState) => {
    dispatch(setFilmsLoading());
    axios   
        .get('http://localhost:80/films', tokenConfig(getState))
        .then(res => dispatch({
                type: GET_FILMS,
                payload: res.data
            }))
          
}


export const deleteFilm = id => (dispatch, getState) => {
    axios
        .delete(`http://localhost:80/films/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_FILM,
            payload: res.data
        }))
        
    
}


export const editFilm = (id, title, director, state) => (dispatch, getState) => {
    // console.log("działa w actions " + title +" "+ author)
   axios
        .put(`http://localhost:80/films/${id}`, {title, director, state}, tokenConfig(getState))
        .then(res => dispatch({
            type: EDIT_FILM,
            payload: res.data
            
        }))
        .catch(err => console.log("niedziała" + err))
        

}

export const addFilm = (film) => (dispatch, getState) => {
    axios
    .post(`http://localhost:80/films`, film, tokenConfig(getState))
    .then(res => dispatch({
        type: ADD_FILM,
        film: res.data
    }))
}

export const editStateFilm = (id, title, director, state) => (dispatch, getState) => {
   
    // console.log(state+ " w actions")
    axios
    .put(`http://localhost:80/films/${id}`, {title, director, state}, tokenConfig(getState))
      .then(res => dispatch({
        type: EDITSTATE_FILM,
        payload: res.data
    }))
}


export const setFilmsLoading = () => {
    return {
        type: FILMS_LOADING 
    }
}