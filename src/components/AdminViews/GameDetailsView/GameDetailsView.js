import React, {Component} from 'react';

class GameDetailsView extends Component {

  renderClueList = () => {
    return (
      { 
        this.props.reduxState.clueList.map( clue =>
          <ClueListItem key={ clue.id } clue={ clue } />
        )
      }
    );
  }

  render() {
    return (
      <div>
        <div>f
          <label>What people will discover:</label>
          <p>Lorem Ipsum</p>
        </div>
        <div>
          {this.renderClueList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ clueList, solution }) => ({ clueList, solution });

export default GameDetailsView;