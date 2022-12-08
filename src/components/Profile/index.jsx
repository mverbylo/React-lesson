import React, { Component } from 'react';
import { UserContext } from '../../App';

class Profile extends Component {
  render() {
    return (
        <UserContext.Consumer>
          {(value) => (
            <div>
              <h5>Profile</h5>
              <p>{value.username}</p>
            </div>
          )}
        </UserContext.Consumer>
    );
  }
}

export default Profile;
