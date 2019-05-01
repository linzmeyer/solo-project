import React, { Component } from 'react';
import Header from '../../Header/Header';
import { connect } from 'react-redux';
import Navbar from '../../Navbar/Navbar';
import './EditGameView.css';
// module that stores a game setup.
import savedGames from '../../../modules/savedGames';

const emptyGame = {
  solution: '',
  reward: '',
  clue1Hint: '',
  clue2Hint: '',
  clue3Hint: '',
  clue4Hint: '',
  clue5Hint: '',
  finalClueHint: '',
  clue1Answer: '',
  clue2Answer: '',
  clue3Answer: '',
  clue4Answer: '',
  clue5Answer: '',
  clue1Location: '',
  clue2Location: '',
  clue3Location: '',
  clue4Location: '',
  clue5Location: ''
}

class EditGameView extends Component {

  state = {
    newGame: emptyGame
  };

  // quickly init form
  autoFillForm = () => {
    this.setState({
      newGame: {
        ...this.state.newGame, ...savedGames.game1
      }
    });
  }

  handleClearAll = () => {
    console.log('clearing form');
    this.setState({ newGame: emptyGame });
  }

  handleChange = propertyName => {
    return (e) => {
      console.log(e.target.pattern);
      let userInput = e.target.value;
      // if change in input field is for the solution, or a clue answer
      // - convert the input text to lowercase
      if ( e.target.pattern === '[a-z]' ) {
        userInput = userInput.toLowerCase();
      }

      this.setState({
        newGame: { ...this.state.newGame, [propertyName]: userInput }
      });
    }
  }

  handleSaveGame = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting form');
    // console.log( 'validating:', this.state.newProject );
		// // User input validation (returns T/F value)
    // let isValidInput = validate( this.state.newProject );
    // // if input is not valid, exit handleSubmit
		// if ( isValidInput === false ) {
		// 	return;
    // }


    this.props.dispatch({ type: 'UPDATE_GAME', payload: this.state.newGame })


    // Reset the state to clear inputs
    this.setState({ newGame: emptyGame });
    document.getElementById('in-1').focus();
  }

  render() {
    return (
      <div>
        <Header header="EDIT GAME"/>
        <Navbar currentView="EDIT GAME" />
        <form onSubmit={ this.handleSubmit }>
          <div className="discover-form-grid" >
            {/* SOUTION  */}
            <div>
              <h3>What Will The Player Discover?</h3>
              <input
                id='in-1'
                pattern="[a-z]"
                placeholder="This is the answer to win the game."
                onChange={this.handleChange( 'solution' )}
                value={this.state.newGame.solution}
              ></input>
              <p>(lowercase only)</p>
            </div>

            {/* REWARD */}
            <div>
              <h3>What is the reward?</h3>
              <textarea
                placeholder="Enter what the player could win."
                onChange={this.handleChange( 'reward' )}
                value={this.state.newGame.reward}
              ></textarea>
            </div>
          </div>

          <hr></hr>

          <div className="clues-form-grid" >
            {/* CLUE 1 */}
            <div>
              <h3>Clue 1</h3>
              <textarea
                placeholder="Enter a descriptive clue that leads the player to the answer."
                onChange={this.handleChange( 'clue1Hint' )}
                value={this.state.newGame.clue1Hint}
              ></textarea>
              <br></br>

              <label>Answer: </label>
              <input
                placeholder="lowercase"
                pattern="[a-z]"
                onChange={this.handleChange( 'clue1Answer' )}
                value={this.state.newGame.clue1Answer}
              ></input>
              <br></br>

              <label>Location: </label>
              <input
                onChange={this.handleChange( 'clue1Location' )}
                value={this.state.newGame.clue1Location}
              ></input>
            </div>


            {/* CLUE 2 */}
            <div>
              <h3>Clue 2</h3>
              <textarea
                placeholder="Enter a descriptive clue that leads the player to the answer."
                onChange={this.handleChange( 'clue2Hint' )}
                value={this.state.newGame.clue2Hint}
              ></textarea>
              <br></br>

              <label>Answer: </label>
              <input
                placeholder="lowercase"
                pattern="[a-z]"
                onChange={this.handleChange( 'clue2Answer' )}
                value={this.state.newGame.clue2Answer}
              ></input>
              <br></br>

              <label>Location: </label>
              <input
                onChange={this.handleChange( 'clue2Location' )}
                value={this.state.newGame.clue2Location}
              ></input>
            </div>


            {/* CLUE 3 */}
            <div>
              <h3>Clue 3</h3>
              <textarea
                placeholder="Enter a descriptive clue that leads the player to the answer."
                onChange={this.handleChange( 'clue3Hint' )}
                value={this.state.newGame.clue3Hint}
              ></textarea>
              <br></br>

              <label>Answer: </label>
              <input
                placeholder="lowercase"
                pattern="[a-z]"
                onChange={this.handleChange( 'clue3Answer' )}
                value={this.state.newGame.clue3Answer}
              ></input>
              <br></br>

              <label>Location: </label>
              <input
                onChange={this.handleChange( 'clue3Location' )}
                value={this.state.newGame.clue3Location}
              ></input>
            </div>


            {/* CLUE 4 */}
            <div>
              <h3>Clue 4</h3>
              <textarea
                placeholder="Enter a descriptive clue that leads the player to the answer."
                onChange={this.handleChange( 'clue4Hint' )}
                value={this.state.newGame.clue4Hint}
              ></textarea>
              <br></br>

              <label>Answer: </label>
              <input
                placeholder="lowercase"
                pattern="[a-z]"
                onChange={this.handleChange( 'clue4Answer' )}
                value={this.state.newGame.clue4Answer}
              ></input>
              <br></br>

              <label>Location: </label>
              <input
                onChange={this.handleChange( 'clue4Location' )}
                value={this.state.newGame.clue4Location}
              ></input>
            </div>


            {/* CLUE 5 */}
            <div>
              <h3>Clue 5</h3>
              <textarea
                placeholder="Enter a descriptive clue that leads the player to the answer."
                onChange={this.handleChange( 'clue5Hint' )}
                value={this.state.newGame.clue5Hint}
              ></textarea>
              <br></br>

              <label>Answer: </label>
              <input
                placeholder="lowercase"
                pattern="[a-z]"
                onChange={this.handleChange( 'clue5Answer' )}
                value={this.state.newGame.clue5Answer}
              ></input>
              <br></br>

              <label>Location: </label>
              <input
                onChange={this.handleChange( 'clue5Location' )}
                value={this.state.newGame.clue5Location}
              ></input>
            </div>

            {/* FINAL CLUE */}
            <div>
              <h3>FINAL CLUE</h3>
              <textarea
                placeholder="This is the a description of what the player will discover."
                onChange={this.handleChange( 'finalClueHint' )}
                value={this.state.newGame.finalClueHint}
              ></textarea>
              <br></br>
            </div>

          </div>
        </form>

        <button onClick={ this.handleSubmit } >Submit</button>
        <button onClick={ this.handleClearAll } >Clear All</button>
        <button onClick={ this.handleSaveGame } >Save Game</button>

        <h2>Saved Games</h2>
        <button onClick={ this.autoFillForm } >Game 1</button>

      </div>
    );
  }
}

export default connect()(EditGameView);