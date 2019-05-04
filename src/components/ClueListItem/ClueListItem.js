import React, { Component } from 'react';
import './ClueListItem.css';

class ClueListItem extends Component {

  render () {
    return (
        <div className="ClueListItem-wrapper">
          <h3>Clue {this.props.clue.clue_number}</h3>
          <p className="clue-description" >{this.props.clue.description}</p>
          <div className="card-bottom" >
            <hr></hr>
            <h4>Answer:</h4>
            <p>{this.props.clue.answer}</p>
            <br></br>
            <h4 className="clue-location" >Location:</h4>
            <p className="clue-location" >{this.props.clue.location}</p>
          </div>
        </div>
		);
  }
}

export default( ClueListItem );