import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    Container
 } from 'reactstrap';
 import { NavLink } from "react-router-dom";
import './AppNavbar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    state = { 
        isOpen: false
     }

     static propTypes = {
        auth: PropTypes.object.isRequired
      };
     toogle = () =>{
         this.setState({
             isOpen: !this.state.isOpen
         })
     }

    render() { 
        const { token } = this.props.auth;

        const authLinks = (
            <Fragment>
                            <NavItem className="mb-4 mb-md-0">
                                <NavLink exact={true} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="mb-4 mb-md-0">
                                <NavLink to="/todo">ToDo List</NavLink>
                            </NavItem>
                            <NavItem className="mb-4 mb-md-0">
                                <NavLink to="/books">Books Library</NavLink>
                            </NavItem>
                            <NavItem className="mb-4 mb-md-0">
                                <NavLink to="/films">Films Library</NavLink>
                            </NavItem>
                                
                            
                            <NavItem>
                              <Logout />
                            </NavItem>
            </Fragment>
          );
      
          const guestLinks = (
            <Fragment>
              <NavItem>
                <RegisterModal />
              </NavItem>
              <NavItem>
                <LoginModal />
              </NavItem>
            </Fragment>
          );
        return ( 
            <Navbar color="dark" dark expand="md" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toogle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            

                            
                                 {token ? authLinks : guestLinks}
                            
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
         );
    }
}
 
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);