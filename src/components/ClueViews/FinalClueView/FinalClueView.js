import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LettersWidget from '../../LettersWidget/LettersWidget';
import '../ClueViews.css';

class FinalClueView extends Component {

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

  handleChange = () => {
    return (e) => {
      this.setState({ newUserGuess: e.target.value });
    }
  }

  renderAnswerField = () => {
    if ( this.props.userClueScore >= 7 ) {
      return ( <h3>ANSWER: { this.props.allActiveContent.solution }</h3> );
    } else {
      return (
        <form>
          <input
            className='in'
            placeholder="Answer here"
            value={ this.state.newUserGuess }
            onChange={ this.handleChange( 'newUserGuess') }
          ></input>
          <button
            type="submit"
            onClick={ this.submitGuess }
          >Submit</button>
        </form>
      )
    }
  }

  submitGuess = () => {
    if ( this.state.newUserGuess === this.props.allClues[4].answer ) {
      let action = {
        type: 'UPDATE_USER_CLUE_SCORE',
        payload: { userId: this.props.user.id, newScore: 7 }
      }
      this.props.dispatch( action );
    }
    this.setState({ newUserGuess: '' });
  }

  render() {
    console.log('props:', this.props);
    return (
      <div>
        <Header header="HOO! LAST CLUE!" />
        <Navbar currentView="LAST CLUE" />
        <div className="clue-body" >
          <p className="paragraph" >{ this.props.allActiveContent.clue }</p>
          <CluesWidget userScore={ this.props.userClueScore } />
          <div className="answer-field" >
            { this.renderAnswerField() }
            <LettersWidget />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ 
  allClues,
  user,
  userClueScore,
  allActiveContent
}) => ({
  allClues,
  user,
  userClueScore,
  allActiveContent
});

export default connect( mapStateToProps )(withRouter( FinalClueView ));
