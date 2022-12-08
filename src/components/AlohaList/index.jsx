import React, { Component } from 'react';
import Aloha from '../Aloha';
import FavoriteAlohas from '../FavoriteAlohas';

class AlohaList extends Component {
  state = {
    users: [
      { id: 1, name: 'user 1', isFavorite: false },
      { id: 2, name: 'user 2', isFavorite: false },
      { id: 3, name: 'user 3', isFavorite: false },
      { id: 4, name: 'user 4', isFavorite: false },
      { id: 5, name: 'user 5', isFavorite: false },
      { id: 6, name: 'user 6', isFavorite: false },
    ],
  };

  sortUsers = () => {
    const { users } = this.state;

    const copy = structuredClone(users);
    // copy.reverse();

    this.setState({
      users: copy.reverse(),
    });
  };

  makeFavorite = (userId) => {
    const newUsers = this.state.users.map((user) => {
      const newUser = {
        ...user,
        isFavorite: userId === user.id ? true : user.isFavorite,
      };

      return newUser;
    });

    this.setState({
      users: newUsers,
    });
  };

  render() {
    const { users } = this.state;

    const alohas = users.map((user) => (
      <li key={`${user.id}-${user.name}`}>
        <Aloha id={user.id} name={user.name} makeFavorite={this.makeFavorite} />
      </li>
    ));
    // отсеяли нефаворитов
    const favoriteUsers = users.filter((user) => user.isFavorite);

    return (
      <div>
        <h1>Aloha list</h1>
        <button onClick={this.sortUsers}>Change order</button>
        <section>
          <h2>Favorite users</h2>
          <FavoriteAlohas favoriteUsers={favoriteUsers} />
        </section>
        <section>
          <h2>Users:</h2>
          <ul>{alohas}</ul>
        </section>
      </div>
    );
  }
}

export default AlohaList;