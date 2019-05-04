import React, {Component} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

// The header that renders should be propped from the parent that is using this 
// this component.
class Header extends Component {

  routeToClue1 = () => {
    this.props.history.push('/clues/1');
  }

  render() {
    return (
      <div className="Header-wrapper" >
        <FontAwesomeIcon
          icon={["fab", "earlybirds"]}
          className="header-icon"
          onClick={ this.routeToClue1 }
        />
        <h2 className="title-header">Discover Oakdale</h2>
        <h1 className="view-header">{this.props.header}</h1>
      </div>
    );
  }
}

export default withRouter( Header );