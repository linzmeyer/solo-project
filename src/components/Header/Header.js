import React, {Component} from 'react';
import './Header.css';

// The header that renders should be propped from the parent that is using this 
// this component.
class Header extends Component {
  render() {
    return (
      <h1 className="Header-wrapper">{this.props.header}</h1>
    );
  }
}

export default Header;