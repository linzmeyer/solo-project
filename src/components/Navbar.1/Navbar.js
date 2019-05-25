import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

class Navbar extends Component {

  // if the user is an admin
  renderAdminNavbar = () => {
    if ( this.props.user.is_admin ) {
      console.log( 'user is admin!' );
      if ( this.props.currentView === 'ADMIN HOME' ) {
        return (
          <div>
            <Link to="/trail-map" className="nav-item" >
              <button className="nav-btn" >Map</button>
            </Link>
            <Link to="/about" className="nav-item" >
              <button className="nav-btn" >About</button>
            </Link>
            <Link
              className="nav-item"
              to="/"
              onClick={() => this.props.dispatch({ type: 'LOGOUT' })}
            >
              <button className="nav-btn" >Log Out</button>
            </Link>
          </div>
        );
      }
    }
  }

  // if the user is a player
  renderPlayerNavbar = () => {
    if ( !this.props.user.is_admin ) {
      console.log( 'user is a player!' );
    }
  }

  // if the user is not logged in / registered
  renderNoCredentialNavbar = () => {
    if ( !this.props.user.id ) {
      console.log( 'user is not logged in!' );
    }
  }

  render() {
    console.log( 'this.props:', this.props );
    return (
      <div className="Navbar-wrapper" >
        { this.renderAdminNavbar() }
        { this.renderPlayerNavbar() }
        { this.renderNoCredentialNavbar() }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect( mapStateToProps )(Navbar);