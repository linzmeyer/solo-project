import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';


class HomeView extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Header header="HOME" />
        <h1 id="welcome">
          Welcome, { this.props.user.username }!
        </h1>
        <p>Your ID is: {this.props.user.id}</p>
        <p>Your login mode is: {this.props.loginMode}</p>
        <img src="./bridge.jpg" alt="Bridge in nature preserve" />
        <div>
          <button>Clues</button>
        </div>
        <div>
          <button>Trail Map</button>
        </div>
        <div>
          <button>About</button>
        </div>
        <div>
          <Link
          to="/"
          onClick={() => this.props.dispatch({ type: 'LOGOUT' })}
          >Sign Out</Link>
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted, you could write this code like this:
const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });
// const mapStateToProps = reduxState => ({ user: reduxState.user, loginMode: reduxState.loginMode });
// const mapStateToProps = reduxState => ({ reduxState });

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomeView);
