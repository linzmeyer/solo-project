import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CongratsView.css';

class Clue5View extends Component {

  state = {
    newUserGuess: ''
  }

  componentDidMount = () => {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
    action = { type: 'GET_USER_CLUE_SCORE' }
    this.props.dispatch( action );
    action = { type: 'GET_ALL_ACTIVE_CONTENT' }
    this.props.dispatch( action );
  }


  renderAnswerField = () => {
    if ( this.props.userClueScore >= 6 ) {
      return (
        <div>
          <h3>Congrats!</h3>
          <p>You won!</p>
          <p>Collect your reward at the discovery center!</p>
          <p>Current reward for winning: {this.props.allActiveContent.reward }</p>
        </div>
      );
    } else {
      return (
        <div>
          <h3>You have not solved this game yet!</h3>
          <h3>You will see a secret code here when you finish the game.</h3>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Header header="CONGRATS" />
        <Navbar currentView="CONGRATS" />
        <div className="clue-body" >
          <CluesWidget userScore={ this.props.userClueScore } />
          <div className="answer-field" >
            { this.renderAnswerField() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues, allActiveContent, user, userClueScore }) => ({ allClues, allActiveContent, user, userClueScore });

export default connect( mapStateToProps )(withRouter( Clue5View ));
