import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, TODOS_LOADING, EDITSTATE_TODO} from './types' 
import axios from 'axios';
import { tokenConfig } from './authActions';

export const getTodos = () => (dispatch, getState) => {
    dispatch(setTodosLoading());
    axios   
        .get('http://localhost:80/todo', tokenConfig(getState))
        .then(res => dispatch({
                type: GET_TODOS,
                payload: res.data
            }))
          
}


export const deleteTodo = id => (dispatch, getState) => {
    axios
        .delete(`http://localhost:80/todo/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: res.data
        }))
        
    
}


export const editTodo = (id, name, completed) => (dispatch, getState) => {
    // console.log("działa w actions " + title +" "+ author)
   axios
        .put(`http://localhost:80/todo/${id}`, {name, completed}, tokenConfig(getState))
        .then(res => dispatch({
            type: EDIT_TODO,
            payload: res.data
            
        }))
        .catch(err => console.log("niedziała" + err))
        

}

export const addTodo = (todo) => (dispatch, getState) => {
    axios
    .post(`http://localhost:80/todo`, todo, tokenConfig(getState))
    .then(res => dispatch({
        type: ADD_TODO,
        todos: res.data
    }))
}

export const editStateTodo = (id, name, completed ) => (dispatch, getState) => {
   
    // console.log(state+ " w actions")
    axios
    .put(`http://localhost:80/todo/${id}`, {name, completed }, tokenConfig(getState))
      .then(res => dispatch({
        type: EDITSTATE_TODO,
        payload: res.data
    }))
}


export const setTodosLoading = () => {
    return {
        type: TODOS_LOADING 
    }
}