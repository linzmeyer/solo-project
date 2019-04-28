import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserListItem.css';

class UserListItem extends Component {

  deleteUserListItem = () => {
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