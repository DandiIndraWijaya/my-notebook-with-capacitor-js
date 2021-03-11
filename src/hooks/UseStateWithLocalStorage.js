import { useEffect, useState } from 'react';

const TodosInLocalStorage = (localStorageKey) => {
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

const ScheduleInLocalStorage = (localStorageKey) => {
  const [schedule, setSchedule] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || [],
  );

  if (!localStorageKey) {
    throw new Error('You have to passed in a localStorage key as an argument');
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(schedule));
  }, [schedule, localStorageKey]);

  return [schedule, setSchedule];
};

export { TodosInLocalStorage, ScheduleInLocalStorage };
