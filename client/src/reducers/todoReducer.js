import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO, TODOS_LOADING, EDITSTATE_TODO} from '../actions/types' 
// import todosList from '../components/todosList';


const initialState = {
    todos : [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todos] 
            }
        case DELETE_TODO:
            // console.log(action.payload)
             return {
              ...state,
              todos: state.todos.filter(todo => todo._id !== action.payload._id)
            }
        case EDIT_TODO:
            // console.log(action.payload) 
            
             return {
                ...state,
                todos: state.todos.map(
                    (todo) => todo._id === action.payload._id ? action.payload : todo)
            }
        case TODOS_LOADING:
            
            return {
                ...state,
                loading: true
            }
        case EDITSTATE_TODO:
            //  console.log(action.payload) 
            return{
                ...state,
                todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo )
            }
        default:
            return state  
    }
}