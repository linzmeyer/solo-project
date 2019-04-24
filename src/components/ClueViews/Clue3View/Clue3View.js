import React, {Component} from 'react';
import Nav from '../../Nav/Nav';
import Header from '../../Header/Header';
import CluesWidget from '../../CluesWidget/CluesWidget';

class Clue3View extends Component {
  render() {
    return (
      <div>
        <Header header="CLUE 3" />
        <Nav />
        <div className="clue-body" >
          {/* {this.props.reduxState.clues.description} */}
          <p className="paragraph">
            Cupidatat ea ipsum cupidatat eiusmod irure laboris quis officia deserunt ut culpa sunt. Do velit velit laboris tempor est anim exercitation. Minim nisi fugiat consequat consectetur duis cupidatat magna duis exercitation eiusmod excepteur ipsum magna. Quis do ad aliquip non adipisicing laborum ea esse nisi anim adipisicing cillum tempor. Duis labore amet irure commodo ex fugiat ex. Ullamco eu do mollit dolor voluptate qui nulla eu labore pariatur voluptate consequat eiusmod.
          </p>
          <CluesWidget />
          <input className='in' placeholder="Answer here" ></input>
          <button className='btn' >Submit</button>
        </div>
      </div>
    );
  }
}

export default Clue3View;