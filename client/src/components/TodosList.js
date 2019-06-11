import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import './BooksList.css'
import { connect } from 'react-redux';
import { getTodos, deleteTodo, editTodo, addTodo, editStateTodo } from '../actions/todosActions';
import PropTypes from 'prop-types';



class TodosList extends Component {
    state = { 
        
     }

       
     componentDidMount(){
        this.props.getTodos();
        
      }

      onDeleteClick = (_id) =>{
        this.props.deleteTodo(_id);
      }

      onEditClick = (id, name) => {
        const newTask = prompt('Wpisz nową nazwę zadania', name)
        if(newTask){
            this.props.editTodo(id, newTask)
        }
      }


      onAddClick = () => {
        const name = prompt('Wpisz nazwe')
        if(name){
            this.props.addTodo({name:name})
        }
      }

      onStateClick = (id, name, completed) => {
        completed = !completed
        
        this.props.editStateTodo(id, name, completed)
      }
      
    render() { 
        const { todos } = this.props.todos;
      //  console.log(todos)
        return ( 
            <Container>
                <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.onAddClick}>
                    Add Todo</Button>
                    <ListGroup>
                        {todos.map((todo) => 
                        <ListGroupItem key={todo._id} className="d-flex flex-column flex-md-row justify-content-between">
                            <ButtonGroup >
                                <Button color="danger" onClick={this.onDeleteClick.bind(this, todo._id)}>x</Button>
                                <Button color="info" onClick={this.onEditClick.bind(this, todo._id, todo.name)}>Edit</Button>
                                <Button color={todo.completed ? "success" : "danger"} onClick={this.onStateClick.bind(this, todo._id, todo.name, todo.completed)}><span className="state">{todo.completed? "V":"X"}</span></Button>
                            </ButtonGroup>
                            <span className="title mr-auto">{todo.name}</span> 
                        </ListGroupItem>)}
                    </ListGroup>
            </Container>
         );
    }
}
 
TodosList.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    todos: state.todos
  })
  export default connect(mapStateToProps, { getTodos, deleteTodo, editTodo, addTodo, editStateTodo })(TodosList);