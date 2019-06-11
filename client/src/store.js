import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

// const initianstate= {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [thunk];

// const store = createStore(rootReducer, initianstate, compose(applyMiddleware(...middleware)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
  );
  
export default store