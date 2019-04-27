import React, {Component} from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// The header that renders should be propped from the parent that is using this 
// this component.
class Header extends Component {
  render() {
    return (
      <h1 className="Header-wrapper"><FontAwesomeIcon icon={["fab", "earlybirds"]} /> {this.props.header}</h1>
    );
  }
}

export default Header;