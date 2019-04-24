import React, {Component} from 'react';

class EditGameView extends Component {

  handleClearAll = () => {
    console.log('clearing form');
  }

  handleSubmit = () => {
    console.log('submitting form');
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <h1>Hello EditGameView</h1>

          <div>
            <h3>What will the player discover?</h3>
            <textarea rows="2" cols="30" placeholder="This is the answer to win the game." ></textarea>
          </div>

          <div>
            <h3>Clue 1</h3>
            <textarea rows="5" cols="30" placeholder="Enter a descriptive clue. Prompt player to answer." ></textarea>
            <br></br>
            <label>Answer: </label>
            <input></input>
            <br></br>
            <label>Location: </label>
            <input type="text" onSubmit={ this.submit } ></input>
          </div>

          <div>
            <h3>Clue 2</h3>
            <textarea rows="5" cols="30" placeholder="Enter a descriptive clue. Prompt player to answer." ></textarea>
            <br></br>
            <label>Answer: </label>
            <input></input>
            <br></br>
            <label>Location: </label>
            <input type="text" onSubmit={ this.submit } ></input>
          </div>

          <div>
            <h3>Clue 3</h3>
            <textarea rows="5" cols="30" placeholder="Enter a descriptive clue. Prompt player to answer." ></textarea>
            <br></br>
            <label>Answer: </label>
            <input></input>
            <br></br>
            <label>Location: </label>
            <input type="text" onSubmit={ this.submit } ></input>
          </div>

          <div>
            <h3>Clue 4</h3>
            <textarea rows="5" cols="30" placeholder="Enter a descriptive clue. Prompt player to answer." ></textarea>
            <br></br>
            <label>Answer: </label>
            <input></input>
            <br></br>
            <label>Location: </label>
            <input type="text" onSubmit={ this.submit } ></input>
          </div>

          <div>
            <h3>Clue 5</h3>
            <textarea rows="5" cols="30" placeholder="Enter a descriptive clue. Prompt player to answer." ></textarea>
            <br></br>
            <label>Answer: </label>
            <input></input>
            <br></br>
            <label>Location: </label>
            <input type="text" onSubmit={ this.submit } ></input>
          </div>

          <div>
            <h3>What is the reward?</h3>
            <textarea rows="2" cols="30" placeholder="Enter what the player could win." ></textarea>
          </div>

          <button type="submit" >Submit</button>

        </form>
        <button onClick={ this.handleClearAll } >Clear All</button>
      </div>
    );
  }
}

export default EditGameView;