import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import './BooksList.css'
import { connect } from 'react-redux';
import { getFilms, deleteFilm, editFilm, addFilm, editStateFilm } from '../actions/filmsActions';
import PropTypes from 'prop-types';



class FilmsList extends Component {
    state = { 
        
     }

       
     componentDidMount(){
        this.props.getFilms();
        
      }

      onDeleteClick = (_id) =>{
        this.props.deleteFilm(_id);
      }

      onEditClick = (id, name, director) => {
        const newTitle = prompt('Wpisz nowy tytuł', name)
        if(newTitle){
          const newDirector = prompt('Wpisz nowego reżysera', director)
          // console.log("działa")
            this.props.editFilm(id, newTitle, newDirector)
        }
      }


      onAddClick = () => {
        const title = prompt('Wpisz nazwe')
        if(title){
          const director = prompt('Podaj Reżysera')
            this.props.addFilm({title:title, director:director})
        }
      }

      onStateClick = (id, title, director, state) => {
        state = !state
        
        this.props.editStateFilm(id, title, director, state)
      }
      
    render() { 
        const { films } = this.props.films;
       
        return ( 
            <Container>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.onAddClick}>
                    Add Film</Button>
                    <ListGroup>
                        {films.map((film) => 
                        <ListGroupItem key={film._id} className="d-flex flex-column flex-md-row justify-content-between">
                            <ButtonGroup >
                                <Button color="danger" onClick={this.onDeleteClick.bind(this, film._id)}>x</Button>
                                <Button color="info" onClick={this.onEditClick.bind(this, film._id, film.title, film.director)}>Edit</Button>
                                <Button color={film.state ? "success" : "danger"} onClick={this.onStateClick.bind(this, film._id, film.title, film.director, film.state)}><span className="state">{film.state? "Obejrzany":"Do obejrzenia"}</span></Button>
                            </ButtonGroup>
                            <span className="title mr-auto">{film.title}</span> 
                            <span className="director">{film.director}</span>
                        </ListGroupItem>)}
                    </ListGroup>
            </Container>
         );
    }
}
 
FilmsList.propTypes = {
    getFilms: PropTypes.func.isRequired,
    films: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    films: state.films
  })
  export default connect(mapStateToProps, { getFilms, deleteFilm, editFilm, addFilm, editStateFilm })(FilmsList);