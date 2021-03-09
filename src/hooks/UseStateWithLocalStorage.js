import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UseStateWithLocalStorage = (localStorageKey) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || [],
  );

  if (!localStorageKey) {
    throw new Error('You have to passed in a localStorage key as an argument');
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos, localStorageKey]);

  return [todos, setTodos];
};

UseStateWithLocalStorage.propTypes = {
  localStorageKey: PropTypes.string.isRequired,
};

export default UseStateWithLocalStorage;
