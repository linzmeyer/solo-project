import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../ClueViews.css';

class Clue2View extends Component {

  state = {
    newUserGuess: ''
  }

  componentDidMount = () => {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
    action = { type: 'GET_USER_CLUE_SCORE' }
    this.props.dispatch( action );
  }

  autoFillForm = () => {
    this.setState({ newUserGuess: this.props.allClues[1].answer })
  }

  handleChange = () => {
    return (e) => {
      this.setState({ newUserGuess: e.target.value });
    }
  }

  renderAnswerField = () => {
    if ( this.props.userClueScore >= 3 ) {
      return ( <h3>ANSWER: { this.props.allClues[1].answer }</h3> );
    } else {
      return (
        <form>
          <input
            onFocus={ this.autoFillForm }
            className='in'
            placeholder="Answer here"
            value={ this.state.newUserGuess }
            onChange={ this.handleChange( 'newUserGuess') }
          ></input>
          <br></br>
          <button
            className="btn-clue-submit"
            type="submit"
            onClick={ this.submitGuess }
          >Submit</button>
        </form>
      )
    }
  }

  submitGuess = () => {
    // convert user input to lowercase string
    let userInput = this.state.newUserGuess.toLowerCase();
    if ( userInput === this.props.allClues[1].answer ) {
      // empty input field
      this.setState({ newUserGuess: '' });
      // update score
      let action = {
        type: 'UPDATE_USER_CLUE_SCORE',
        payload: { userId: this.props.user.id, newScore: 3 }
      }
      this.props.dispatch( action );
      // route to clue 3
      this.props.history.push( '/clues/3' );
    } else {
      alert('Incorrect, try again!');
    }
  }
  
  render() {
    return (
      <div>
        <Header header="CLUE 2" />
        <Navbar currentView="CLUE 2" />
        <div className="clue-body" >
          <p className="paragraph">{this.props.allClues[1].description}</p>
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

export default connect( mapStateToProps )(withRouter( Clue2View ));

