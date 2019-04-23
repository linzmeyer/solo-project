import React, {Component} from 'react';


// The header that renders should be propped from the parent that is using this 
// this component.
class Header extends Component {
  render() {
    return (
      <h1>{this.props.header}</h1>
    );
  }
}

export default Header;