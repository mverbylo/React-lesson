import { useEffect, useState } from 'react';

export default function useClicker(elemRef) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleClick = () => setCounter(counter + 1);
    const elem = elemRef.current;
    if (elem) {
      elem.addEventListener('click', handleClick);
    }

    return () => {
      if (elem) {
        elem.removeEventListener('click', handleClick);
      }
    };
  }, [counter, elemRef]);

  return counter;
}
