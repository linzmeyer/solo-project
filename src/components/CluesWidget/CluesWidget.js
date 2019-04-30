// This Component will conditionally render based on the clue_score value of
// the user which is passed in by the parent as 'userScore'

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './CluesWidget.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// This is used in components in user client routes as a way for the user to
// navigate to different clues. The widget renders based on the user's clue score
class CluesWidget extends Component {
  
  renderClues = () => {
    let clueList = [];
    if ( this.props.userScore >= 1 ) {
      clueList.push( <Link key="1" to="/clues/1">Clue1</Link> );
    }
    if ( this.props.userScore >= 2 ) {
      clueList.push( <Link key="2" to="/clues/2">Clue2</Link> );
    }
    if ( this.props.userScore >= 3 ) {
      clueList.push( <Link key="3" to="/clues/3">Clue3</Link> );
    }
    if ( this.props.userScore >= 4 ) {
      clueList.push( <Link key="4" to="/clues/4">Clue4</Link> );
    }
    if ( this.props.userScore >= 5 ) {
      clueList.push( <Link key="5" to="/clues/5">Clue5</Link> );
    }
    if ( this.props.userScore >= 6 ) {
      clueList.push( <Link key="6" to="/clues/final">Final Clue</Link> );
    }
    return clueList;
  }

  render() {
    return (
      <div className="CluesWidget-wrapper" >
        <Link to="/clues/letters" ><FontAwesomeIcon icon="feather" /></Link>
        { this.renderClues() }
      </div>
    );
  }
}

const mapStateToProps = ({ userClueScore }) => ({ userClueScore });

export default connect( mapStateToProps )( CluesWidget );