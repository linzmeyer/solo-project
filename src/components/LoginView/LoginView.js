import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './LoginView.css';

class LoginView extends Component {
  state = {
    username: '',
    password: '',
  };

  login = ( event ) => {
    event.preventDefault();

    if ( this.state.username && this.state.password ) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => ( event ) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Header header="LOGIN" />
        <Navbar currentView="LOGIN" />
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            { this.props.errors.loginMessage }
          </h2>
        )}
        <form onSubmit={ this.login }>
          <h1>Login</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={ this.state.username }
              onChange={this.handleInputChangeFor( 'username' )}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={ this.state.password }
              onChange={ this.handleInputChangeFor( 'password' ) }
            />
          </div>
          <button
            className="btn-login"
            type="submit"
            name="submit"
            value="Log In"
          >
            Log In
          </button>
        </form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
const mapStateToProps = ({errors}) => ({ errors });

export default connect(mapStateToProps)(LoginView);
