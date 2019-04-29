// This Component will conditionally render based on the clue_score value of
// the user which is passed in by the parent as 'userScore'

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './CluesWidget.css';
import { Link } from 'react-router-dom';

// This is used in components in user client routes as a way for the user to
// navigate to different clues.
class CluesWidget extends Component {
  
  renderClues = () => {
    let result = [];

    if ( this.props.userScore >= 1 ) {
      result.push( <Link key="1" to="/clues/1">Clue1</Link> );
    }
    if ( this.props.userScore >= 2 ) {
      result.push( <Link key="2" to="/clues/2">Clue2</Link> );
    }
    if ( this.props.userScore >= 3 ) {
      result.push( <Link key="3" to="/clues/3">Clue3</Link> );
    }
    if ( this.props.userScore >= 4 ) {
      result.push( <Link key="4" to="/clues/4">Clue4</Link> );
    }
    if ( this.props.userScore >= 5 ) {
      result.push( <Link key="5" to="/clues/5">Clue5</Link> );
    }
    console.log('result:', result)
    return result;
  }

  render() {
    
    return (
      <div id="cluesWidget" className="CluesWidget-wrapper" >
        {this.renderClues()}
      </div>
    );
  }
}

export default CluesWidget;