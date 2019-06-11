import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, EDIT_BOOK, BOOKS_LOADING, EDITSTATE_BOOK} from '../actions/types' 
// import BooksList from '../components/BooksList';


const initialState = {
    books : [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }

        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.book] 
            }
        case DELETE_BOOK:
             return {
              ...state,
              books: state.books.filter(book => book._id !== action.payload)
            }
        case EDIT_BOOK:
            // console.log(action.payload) 
            
             return {
                ...state,
                books: state.books.map(
                    (book) => book._id === action.payload._id ? action.payload : book)
            }
        case BOOKS_LOADING:
            
            return {
                ...state,
                loading: true
            }
        case EDITSTATE_BOOK:
            //  console.log(action.payload) 
            return{
                ...state,
                books: state.books.map(book => book._id === action.payload._id ? action.payload : book )
            }
        default:
            return state  
    }
}