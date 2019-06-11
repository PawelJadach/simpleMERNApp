import React, { Component } from 'react';
import { connect } from 'react-redux';


class Index extends Component {
    state = {  }
    render() { 
        const { token } = this.props.auth;
        return (
        <>
            <h1>Witam w aplikacji do zarządzania</h1>
            <br/>
            <h2>{token ? '': 'Zaloguj/zarejestruj się aby korzystać z aplikacji'}</h2>
            </>
         );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Index);

