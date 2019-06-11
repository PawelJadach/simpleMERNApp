import React from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar'
import BooksList from './components/BooksList'
import FilmsList from './components/FilmsList'
import TodosList from './components/TodosList'
import Index from './components/Index'
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


 


export class App extends React.Component {
 
 


  render(){
  
   return (
     <Router>
      <div className="App">
        <AppNavbar/>
        <Route path="/" exact component={Index} />
        <Route path="/books/" component={BooksList} />
        <Route path="/films/" component={FilmsList} />
        <Route path="/todo/" component={TodosList} />
      </div>
    </Router>
  );
  }
}


export default App;
