import React from 'react';
import { useState, useEffect } from 'react';

import { useData } from 'Hooks';
const UserLoaderHook = (props) => {
  const { data: users, isLoading, error } = useData();
  const userList = users.map(({ name, email, id }) => (
    <article key={id}>
      <h2>{name}</h2>
      <p>
        email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </article>
  ));
  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      {!!users.length && userList}
    </div>
  );
};

export default UserLoaderHook;
