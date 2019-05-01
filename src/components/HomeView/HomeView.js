import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

class HomeView extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Header header="HOME" />
        <Navbar currentView="HOME" />
        <h1 id="welcome">Welcome, { this.props.user.username }!</h1>
        <p>Use the links above to get started!</p>
        
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted, you could write this code like this:
const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });
// const mapStateToProps = reduxState => ({ user: reduxState.user, loginMode: reduxState.loginMode });
// const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(HomeView);
