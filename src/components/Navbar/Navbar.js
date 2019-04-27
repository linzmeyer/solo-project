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

  // render About link based on current view
  renderAboutLink = () => {
    if(
      this.props.currentView !== 'ABOUT'
    ){ return <Link to="/about" className="nav-item" ><FontAwesomeIcon icon={["fab", "earlybirds"]} /> About</Link>; }
  }

  // render Admin Edit Game link based on current view
  renderAdminEditGame = () => {
    if(
      this.props.currentView === 'GAME DETAILS' ||
      this.props.currentView === 'TRAIL MAP'
    ){ return <Link to="/admin/edit-game" className="nav-item" ><FontAwesomeIcon icon={["far", "edit"]} /> Edit Game</Link>; }
  }

  // render Admin Game Details link based on current view
  renderAdminGameDetails = () => {
    if(
      this.props.currentView === 'EDIT GAME' ||
      this.props.currentView === 'TRAIL MAP'
    ){ return <Link to="/admin/game-details" className="nav-item" ><FontAwesomeIcon icon="coffee" /> Game Details</Link>; }
  }

  // render Admin Home link based on current view
  renderAdminHomeLink = () => {
    if(
      this.props.currentView === 'EDIT GAME' ||
      this.props.currentView === 'GAME DETAILS'
    ){ return <Link to="/admin/home" className="nav-item" ><FontAwesomeIcon icon="home" /> Home</Link>; }
  }
    
  // render Home link based on current view
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
      
  // // render Sign Out link based on current view
  // renderLogOutLink = () => {
  //   if(
  //     this.props.currentView === 'HOME'
  //   ){ return <Link to="/about" className="nav-item" >Home</Link>; }
  // }
    
  // render Trail Map link based on current view
  renderTrailMap = () => {
    if(
      this.props.currentView !== 'TRAIL MAP'
    ){ return <Link to="/trail-map" className="nav-item" ><FontAwesomeIcon icon="map-signs" /> Trail Map</Link>; }
  }
    
  render() {
    return (
      <div className="Navbar-wrapper" >
        { this.renderHomeLink() }
        { this.renderAdminHomeLink() }
        {/* { this.renderLogOutLink() } */}
        { this.renderAdminGameDetails() }
        { this.renderAdminEditGame() }
        { this.renderTrailMap() }
        { this.renderAboutLink() }
      </div>
    );
  }
}

const mapStateToProps = ({ allClues }) => ({ allClues });

export default connect( mapStateToProps )(Navbar);