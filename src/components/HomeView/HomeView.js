import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import AdminHomeView from '../AdminViews/AdminHomeView/AdminHomeView';

class HomeView extends Component {
  // if the user is an admin
  renderForAdmin = () => {
    if ( this.props.user.is_admin ) {
      return (
        <AdminHomeView />
      );
    }
  }

  // if the user is registerd & if the user isn't an admin
  renderForPlayer = () => {
    if ( this.props.user.id && !this.props.user.is_admin ) {
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

  render() {
    return (
      <div>
        { this.renderForAdmin() }
        { this.renderForPlayer() }
      </div>
    );
  }
}

const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });

// Other ways to write mapStateToProps:
// const mapStateToProps = reduxState => ({ user: reduxState.user, loginMode: reduxState.loginMode });
// const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(HomeView);
