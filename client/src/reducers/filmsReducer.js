import { GET_FILMS, ADD_FILM, DELETE_FILM, EDIT_FILM, FILMS_LOADING, EDITSTATE_FILM} from '../actions/types' 
// import FILMsList from '../components/FILMsList';


const initialState = {
    films : [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_FILMS:
            return {
                ...state,
                films: action.payload,
                loading: false
            }

        case ADD_FILM:
            return {
                ...state,
                films: [...state.films, action.film] 
            }
        case DELETE_FILM:
            // console.log(action.payload)
             return {
              ...state,
              films: state.films.filter(film => film._id !== action.payload._id)
            }
        case EDIT_FILM:
            // console.log(action.payload) 
            
             return {
                ...state,
                films: state.films.map(
                    (film) => film._id === action.payload._id ? action.payload : film)
            }
        case FILMS_LOADING:
            
            return {
                ...state,
                loading: true
            }
        case EDITSTATE_FILM:
            //  console.log(action.payload) 
            return{
                ...state,
                films: state.films.map(film => film._id === action.payload._id ? action.payload : film )
            }
        default:
            return state  
    }
}