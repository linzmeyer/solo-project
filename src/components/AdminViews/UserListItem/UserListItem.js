import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserListItem.css';

class UserListItem extends Component {

  deleteUserListItem = () => {
    // Confirm Admin's choice to delete a user's account
    let answer = window.confirm(`Are you sure you want to delete ${ this.props.user.username }'s account?`);
    if ( answer === false ) { return; }
    // Dispatch action to delete user
    let action = { type: 'DELETE_USER', payload: this.props.user.id };
    this.props.dispatch( action );
  }

  render () {
    return (
      <div className="UserListItem-wrapper" >
        <h3> {this.props.user.username}</h3>
        <button
          className="btn-delete"
          onClick={ this.deleteUserListItem }
        ><FontAwesomeIcon icon={["far", "trash-alt"]} size="2x" /></button>
      </div>
		);
  }
}

export default connect()( UserListItem );