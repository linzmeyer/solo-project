import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css';

class Navbar extends Component {

  // This could be a tracker in the nav bar to show the player's current score / unlocked hints
  // componentDidMount = () => {
  //   let action = { type: 'GET_PLAYER_STATS' };
  //   this.props.dispatch( action );
  // }

  // render About Link if the current view is not 'ABOUT'
  renderAboutLink = () => {
    if(
      this.props.currentView !== 'ABOUT'
    ){ return <Link to="/about" className="nav-item" ><FontAwesomeIcon icon={["fab", "earlybirds"]} /> About</Link>; }
  }

  // render Admin Edit Game link if user is admin and current view is the following
  renderEditGameLink = () => {
    if(( this.props.user.is_admin ) &&
      (
        this.props.currentView === 'ADMIN HOME' ||
        this.props.currentView === 'GAME DETAILS' ||
        this.props.currentView === 'TRAIL MAP'
      )    
    ){ return <Link to="/admin/edit-game" className="nav-item" ><FontAwesomeIcon icon={["far", "edit"]} /> Edit Game</Link>; }
  }

  // render Admin Game Details if user is admin and current view is the following
  renderGameDetailsLink = () => {
    if(( this.props.user.is_admin ) &&
      (
        this.props.currentView === 'ADMIN HOME' ||
        this.props.currentView === 'EDIT GAME' ||
        this.props.currentView === 'TRAIL MAP'
      )
    ){ return <Link to="/admin/game-details" className="nav-item" ><FontAwesomeIcon icon="scroll" /> Game Details</Link>; }
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
    ) { return <Link className="nav-item" to="/clues/1" ><FontAwesomeIcon icon={["fab", "pagelines"]} /> Game</Link>; }
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
        this.props.currentView === 'CLUE 5'
      )
    ){ return <Link to="/home" className="nav-item" ><FontAwesomeIcon icon="home" /></Link>; }
    else if (
      this.props.currentView === 'EDIT GAME' ||
      this.props.currentView === 'GAME DETAILS'
    ) { return <Link to="/admin/home" className="nav-item" ><FontAwesomeIcon icon="home" /></Link>; }
  }

  // render Log In link based on if the user is logged in
  renderLogInLink = () => {
    if ( this.props.currentView === "REGISTER" ) {
      return (
        <Link
          className="nav-item sign-out"
          to="/"
          onClick={() => this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })}
        ><FontAwesomeIcon icon="sign-out-alt" />Log In</Link>
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
        >Log Out <FontAwesomeIcon icon="sign-out-alt" /></Link>
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
        ><FontAwesomeIcon icon="user-plus" /> Register</Link>
      );
    }
  }

  // render Trail Map link based on current view
  renderTrailMap = () => {
    if(
      this.props.currentView !== 'TRAIL MAP'
    ){ return <Link to="/trail-map" className="nav-item" ><FontAwesomeIcon icon="map-signs" /> Trail Map</Link>; }
  }
    
  render() {
    console.log( 'this.props:', this.props );
    return (
      <div className="Navbar-wrapper" >
        { this.renderRegisterLink() }
        { this.renderLogInLink() }
        { this.renderHomeLink() }
        { this.renderGameDetailsLink() }
        { this.renderEditGameLink() }
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