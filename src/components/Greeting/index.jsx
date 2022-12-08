import React from 'react';

function Greeting(props) {
  const { name } = props;
  return name ? <GreetUser name={name} /> : <GreetGuest />;
}

function GreetGuest(props) {
  return <p>Hello, Guest</p>;
}
function GreetUser(props) {
  const { name } = props;
  return <p>Hello, {name}</p>;
}

export default Greeting;
