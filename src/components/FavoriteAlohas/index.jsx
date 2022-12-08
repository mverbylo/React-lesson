import React from 'react';

const FavoriteAlohas = ({ favoriteUsers }) => {
    // создаем для них верстку
    const favorites = favoriteUsers.map((user) => (
      <li key={user.id}>{user.name}</li>
    ));

  return <ul>{favorites}</ul>;
};

export default FavoriteAlohas;