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

  renderAboutLink = () => {
    if(
      this.props.currentView !== 'ABOUT'
    ){ return <Link to="/about" className="nav-item" >About</Link>; }
  }

  renderTrailMap = () => {
    if(
      this.props.currentView !== 'TRAIL MAP'
    ){ return <Link to="/trail-map" className="nav-item" >Trail Map</Link>; }
  }

  // render Admin Home link based on current view
  renderAdminHomeLink = () => {
    if(
      this.props.currentView === 'EDIT GAME' ||
      this.props.currentView === 'GAME DETAILS'
    ){ return <Link to="/admin/home" className="nav-item" ><FontAwesomeIcon icon="home" /> Home</Link>; }
  } 

  // render Home and Trail Map links based on current view
  renderHomeLink = () => {
    if(
      this.props.currentView === 'ABOUT' ||
      this.props.currentView === 'TRAIL MAP' ||
      this.props.currentView === 'CLUE 1' ||
      this.props.currentView === 'CLUE 2' ||
      this.props.currentView === 'CLUE 3' ||
      this.props.currentView === 'CLUE 4' ||
      this.props.currentView === 'CLUE 5'
    ){ return ( <Link to="/home" className="nav-item" >Home</Link>); }
  }

  // render Log Out link based on current view
  renderLogOutLink = () => {
    if(
      this.props.currentView === 'HOME'
    ){ return <Link to="/about" className="nav-item" >Home</Link>; }
  }



  render() {
    return (
      <div className="Navbar-wrapper" >
        { this.renderHomeLink() }
        { this.renderAdminHomeLink() }
        { this.renderLogOutLink() }
        { this.renderAboutLink() }
        { this.renderTrailMap() }
      </div>
    );
  }
}

const mapStateToProps = ({ allClues }) => ({ allClues });

export default connect( mapStateToProps )(Navbar);