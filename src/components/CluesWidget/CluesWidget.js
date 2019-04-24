import React, {Component} from 'react';
import './CluesWidget.css';
import { Link } from 'react-router-dom';

// This is used in components in user client routes as a way for the user to
// navigate to different clues.
class CluesWidget extends Component {
  render() {
    return (
      <div className="CluesWidget-wrapper" >
        <Link to="/clues/1">Clue1</Link>
        <Link to="/clues/2">Clue2</Link>
        <Link to="/clues/3">Clue3</Link>
        <Link to="/clues/4">Clue4</Link>
        <Link to="/clues/5">Clue5</Link>
      </div>
    );
  }
}

export default CluesWidget;