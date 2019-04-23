import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

class HomeView extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h1 id="welcome">
          Welcome, { this.props.user.username }!
        </h1>
        <p>Your ID is: {this.props.user.id}</p>
        <p>Your login mode is: {this.props.loginMode}</p>
        <button>Clues</button>
        <button>Trail Map</button>
        <button>About</button>
        <LogOutButton className="log-in" />
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
