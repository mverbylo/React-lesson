import React, { useReducer } from 'react';

function reducer(state, action) {
  //содерит логику изменения состояния
  //возвращает новое состояние

  // console.log(state);
  // console.log(action);
  const { type, payload } = action;
  const newState = {
    ...state,
    // [action.name]: [action.newData],
    [type]: payload,
  };
  return newState;
}

const initialState = {
  email: '',
  password: '',
  isRemembering: false,
};
const LoginForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isRemembering, setIsRemembering] = useState(false);
  // const handleChange = ({ target: { value, name, checked } }) => {
  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   } else if (name === 'isRemembering') {
  //     setIsRemembering(checked);
  //   }
  // };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, isRemembering } = state;
  // const handleChange = ({ target: { value, name, checked, type } }) => {
  //   const newData = type === 'checkbox' ? checked : value;
  //   const action = { name, newData };
  //   dispatch(action);
  // };

  const handleChange = ({ target: { value, name, checked, type } }) =>
    dispatch({ type: name, payload: type === 'checkbox' ? checked : value });

  const handleSubmit = (e) => {
    e.PreventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" value={email} onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="isRemembering"
          checked={isRemembering}
          onChange={handleChange}
        />
        Remember me
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
