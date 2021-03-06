import React from 'react';
import { connect } from 'react-redux';

const LogOutButton = props => (
  <button
    // This button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >Log Out</button>
);

export default connect()(LogOutButton);
