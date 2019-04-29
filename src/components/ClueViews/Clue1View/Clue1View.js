import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import '../ClueViews.css';
import { connect } from 'react-redux';

class Clue1View extends Component {

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
    return (event) => {
      this.setState({ newUserGuess: event.target.value });
    }
  }

  submitGuess = () => {
    console.log( 'submitting answer:', this.state.newUserGuess );
    console.log( 'comparing with answer:', this.props.allClues[0].answer );
    // if ( this.state.newUserGuess === this.props.allClues[0].answer ) {
      console.log('correct!');
      let action = {
        type: 'UPDATE_USER_CLUE_SCORE',
        payload: { userId: this.props.user.id, newScore: 2 }
      }
      this.props.dispatch( action );
    // }
    this.setState({ newUserGuess: '' });
  }

  render() {
    return (
      <div>
        <Header header="CLUE 1" />
        <Navbar currentView="CLUE 1" />
        <div className="clue-body" >
          <p className="paragraph">{this.props.allClues[0].description}</p>
          <CluesWidget userScore={ this.props.userClueScore } />
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues, user, userClueScore }) => ({ allClues, user, userClueScore });

export default connect( mapStateToProps )(Clue1View);
