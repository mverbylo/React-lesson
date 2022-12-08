import { useState, useContext, useMemo } from 'react';
import { ThemeContext } from '../../contexts';

import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

function calculateNumber(num) {
  for (let i = 0; i < 999999990; i++) {
    let x = 0;
    x++;
  }
  return num ** 2;
}

const HomePage = () => {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useContext(ThemeContext);

  const styles = {
    background: theme === THEMES.DARK ? '#444444' : '#bbbbbb',
    color: theme === THEMES.DARK ? 'white' : 'black',
  };
  const handleChange = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
  };
  const calcNumber = useMemo(() => calculateNumber(number), [number]);
  return (
    <main style={styles}>
      <h1>Home page</h1>
      <button onClick={handleChange}>Change Theme</button>
      <p>{calcNumber}</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </main>
  );
};

export default HomePage;
