// A SHORT DISCALAIMER ABOUT THIS FILE
// I wrote this component to conditionally render each link based on a few things:
// - if the user is admin
// - the current view
// What I should have done is conditionally rendererd THE ENTIRE navbar component
// based on just the current view. That would've been much cleaner.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

class Navbar extends Component {

  // if the user is admin, render link to admin home on user home view
  renderAdminHomeLink = () => {
    if ( this.props.user.is_admin && this.props.currentView === 'HOME' ) 
    { return(
      <Link to="/admin/home" className="nav-item" >
        <button className="nav-btn" >Admin</button>
      </Link>
      );}
  }

  // render About Link if the current view is not 'ABOUT'
  renderAboutLink = () => {
    if(
      this.props.currentView !== 'ABOUT'
    ){ return(
      <Link to="/about" className="nav-item" >
        <button className="nav-btn" >About</button>
      </Link>
    );}
  }

  // render Game Link
  // - if user is logged in & user is not admin & if current view is one of the following
  renderGameLink = () => {
    if(
      (( this.props.user.id ) && ( !this.props.user.is_admin )) &&
      (
        this.props.currentView === 'HOME' ||
        this.props.currentView === 'TRAIL MAP' ||
        this.props.currentView === 'ABOUT'
      )
    ) { return (
      <Link className="nav-item" to="/clues/1" >
        <button className="nav-btn" ><FontAwesomeIcon icon={["fab", "pagelines"]} className="icon" />Game</button>
      </Link>
    );}
  }
    
  // render Home link based on current view and if the user is admin
  renderHomeLink = () => {
    if( ( !this.props.user.is_admin ) &&
      (
        this.props.currentView === 'ABOUT' ||
        this.props.currentView === 'TRAIL MAP' ||
        this.props.currentView === 'CLUE 1' ||
        this.props.currentView === 'CLUE 2' ||
        this.props.currentView === 'CLUE 3' ||
        this.props.currentView === 'CLUE 4' ||
        this.props.currentView === 'CLUE 5' ||
        this.props.currentView === 'LAST'
      )
    ){ return (
      <Link to="/home" className="nav-item" >
        <FontAwesomeIcon icon="home" className="home-icon" />
      </Link>
    );}
    else if ( ( this.props.user.is_admin ) &&
      (
        this.props.currentView === 'EDIT GAME' ||
        this.props.currentView === 'GAME DETAILS' ||
        this.props.currentView === 'TRAIL MAP' ||
        this.props.currentView === 'MANAGE USERS' ||
        this.props.currentView === 'ABOUT'
      )
    ) { return(
      <Link to="/admin/home" className="nav-item" >
        <FontAwesomeIcon icon="home" className="home-icon" />
      </Link>
    );}
  }

  // render Log In link based on if the user is logged in
  renderLogInLink = () => {
    if ( this.props.currentView === "REGISTER" ) {
      return (
        <Link
          className="nav-item sign-out"
          to="/"
          onClick={() => this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })}
        >
          <button className="nav-btn" >Log In</button>
        </Link>
      );
    }
  }
      
  // render Log Out link based on if the user is logged in
  renderLogOutLink = () => {
    if( this.props.user.id ) {
      return (
        <Link
          className="nav-item"
          to="/"
          onClick={() => this.props.dispatch({ type: 'LOGOUT' })}
        >
          <button className="nav-btn" >Log Out</button>
        </Link>
      );
    }
  }

  // render Register Link if user is not logged in
  renderRegisterLink = () => {
    if ( this.props.currentView === 'LOGIN' ) {
      return (
        <Link
          className="nav-item"
          to="/"
          onClick={() => this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' })}
        >
          <button className="nav-btn" >
            <FontAwesomeIcon icon="user-plus" className="icon" />
            Register
          </button>
        </Link>
      );
    }
  }

  // render Trail Map link based on current view
  renderTrailMap = () => {
    if(
      this.props.currentView !== 'TRAIL MAP'
    ){ return (
      <Link to="/trail-map" className="nav-item" >
        <button className="nav-btn" >Map</button>
      </Link>
    );}
  }
    
  render() {
    return (
      <div className="Navbar-wrapper" >
        { this.renderRegisterLink() }
        { this.renderLogInLink() }
        { this.renderHomeLink() }
        { this.renderAdminHomeLink() }
        { this.renderGameLink() }
        { this.renderTrailMap() }
        { this.renderAboutLink() }
        { this.renderLogOutLink() }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect( mapStateToProps )(Navbar);