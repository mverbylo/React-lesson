import React, { Component } from 'react';
import {getUsers} from '../../api';
class UserLoader extends Component {
  state = { users: [], isLoading: false, error: null, currrentPage: 1 };

  load = () => {
    this.setState({ isLoading: true });
    getUsers({page:this.state.currrentPage, results:10, seed:'123456', nat:'ua'})
      .then((users) => {
        this.setState({ users });
      })
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currrentPage !== prevState.currrentPage) {
      this.load();
    }
  }

  nextPage = () => {
    this.setState({ currrentPage: this.state.currrentPage + 1 });
  };
  mapUsers = (user) => <pre key={user.id}>{JSON.stringify(user, '', 4)}</pre>;

  render() {
    const { users, isLoading, error } = this.state;
    const usersList = users.map(this.mapUsers);

    if (isLoading) {
      return <div>LOADING...</div>;
    }
    if (error) {
      return <div>ERROR: {error}.</div>;
    }
    return (
      <div>
        <button onClick={this.nextPage}>nextPage</button>
        {usersList}
      </div>
    );
  }
}

export default UserLoader;
