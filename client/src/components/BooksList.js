import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import './BooksList.css'
import { connect } from 'react-redux';
import { getBooks, deleteBook, editBook, addBook, editStateBook } from '../actions/booksActions';
import PropTypes from 'prop-types';



class BooksList extends Component {
    state = { 
        
     }

        //<ul>{books.map(book => <li>{book.name}</li>)}</ul>  
     componentDidMount(){
        this.props.getBooks();
        
      }

      onDeleteClick = (id) =>{
        this.props.deleteBook(id);
      }

      onEditClick = (id, name, author) => {
        const newTitle = prompt('Wpisz nową nazwe', name)
        if(newTitle){
          const newAuthor = prompt('Wpisz nowego autora', author)
          // console.log("działa")
            this.props.editBook(id, newTitle, newAuthor)
        }
      }


      onAddClick = () => {
        const title = prompt('Wpisz nazwe')
        if(title){
          const author = prompt('Podaj Autora')
            this.props.addBook({title:title, author:author})
        }
      }

      onStateClick = (id, title, author, state) => {
        state = !state
        
        this.props.editStateBook(id, title, author, state)
      }
      
    render() { 
        const { books } = this.props.books;
       
        return ( 
            <Container>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.onAddClick}>
                    Add Book</Button>
                    <ListGroup>
                        {books.map((book) => 
                        <ListGroupItem key={book._id} className="d-flex flex-column flex-md-row justify-content-between">
                            <ButtonGroup >
                                <Button color="danger" onClick={this.onDeleteClick.bind(this, book._id)}>x</Button>
                                <Button color="info" onClick={this.onEditClick.bind(this, book._id, book.title, book.author)}>Edit</Button>
                                <Button color={book.state ? "success" : "danger"} onClick={this.onStateClick.bind(this, book._id, book.title, book.author, book.state)}><span className="state">{book.state? "Przeczytana":"Nieprzeczytana"}</span></Button>
                            </ButtonGroup>
                            <span className="title mr-auto">{book.title}</span> 
                            <span className="author">{book.author}</span>
                        </ListGroupItem>)}
                    </ListGroup>
            </Container>
         );
    }
}
 
BooksList.propTypes = {
    getBooks: PropTypes.func.isRequired,
    books: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    books: state.books
  })
  export default connect(mapStateToProps, { getBooks, deleteBook, editBook, addBook, editStateBook })(BooksList);