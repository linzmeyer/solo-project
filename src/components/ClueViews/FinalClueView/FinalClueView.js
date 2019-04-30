import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';
import '../ClueViews.css';

class Clue5View extends Component {

  state = {
    newUserGuess: ''
  }

  componentDidMount = () => {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
    action = { type: 'GET_USER_CLUE_SCORE' }
    this.props.dispatch( action );
  }

  handleChange = () => {
    return (e) => {
      this.setState({ newUserGuess: e.target.value });
    }
  }

  renderAnswerField = () => {
    if ( this.props.userClueScore >= 6 ) {
      return ( <h3>ANSWER: { this.props.allClues[4].answer }</h3> );
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
      console.log('correct!');
      let action = {
        type: 'UPDATE_USER_CLUE_SCORE',
        payload: { userId: this.props.user.id, newScore: 6 }
      }
      this.props.dispatch( action );
    }
    this.setState({ newUserGuess: '' });
  }

  render() {
    return (
      <div>
        <Header header="HOO! LAST CLUE!" />
        <Navbar currentView="LAST CLUE" />
        <div className="clue-body" >
          <p className="paragraph" >{ this.props.allClues[4].description }</p>
          <CluesWidget userScore={ this.props.userClueScore } />
          <div className="answer-field" >
            { this.renderAnswerField() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues, user, userClueScore }) => ({ allClues, user, userClueScore });

export default connect( mapStateToProps )( Clue5View );
