/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { withTheme } from '@emotion/react';
import { withRouter } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faTrash, faPencilAlt, faTimes, faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { TodosInLocalStorage, UserInLocalStorage } from '../../hooks/UseStateWithLocalStorage';
import styles from './Todos.module.css';
import Button from '../../components/Button/Button';

const Todos = ({ theme }) => {
  const [time, setTime] = useState(['06:00', '07:00']);
  const { quote } = UserInLocalStorage('user')[0];
  const [add, setAdd] = useState(false);
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = TodosInLocalStorage('todos');
  const { primary, secondary } = theme;
  const [onPage, setOnPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setOnPage(true), 500);
  }, []);

  const onclickNewButton = () => {
    const condiditon = !add;
    setAdd(condiditon);
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onClickAddButton = () => {
    const addedTodo = [...todos, { time, todo, isComplete: false }];
    if (todos.length !== 0) {
      const len = addedTodo.length - 1;
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < len; i += 1) {
          const splitedFirstTodo = addedTodo[i].time[0].split(':');
          const parseIntFirstTodo = parseInt(splitedFirstTodo[0]);

          const splitedSecondTodo = addedTodo[i + 1].time[0].split(':');
          const parseIntSecondTodo = parseInt(splitedSecondTodo[0]);
          if (parseIntFirstTodo > parseIntSecondTodo) {
            const tmp = addedTodo[i];
            addedTodo[i] = addedTodo[i + 1];
            addedTodo[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
    }
    setTodos(addedTodo);
  };

  return (
    <CSSTransition
      in={onPage}
      timeout={1000}
      classNames="alert"
      unmountOnExit
    >
      <div id="schedules" className={styles.schedules}>
        <center>
          <h3>Todos</h3>
          <div style={{ marginTop: '10px', color: 'grey' }}>
            <i>
              <h5>{`''${quote}''`}</h5>
            </i>
          </div>
          <div style={{ marginTop: '10px' }}>
            <Button onClick={onclickNewButton}>
              <FontAwesomeIcon
                title="Complete"
                color={secondary}
                size="md"
                icon={!add ? faPencilAlt : faTimes}
              />
            </Button>
          </div>
        </center>

        <br />
        <center>
          { add
          && (
          <div className="todoForm">
            <TimeRangePicker
              onChange={setTime}
              value={time}
              disableClock
            />
            <br />
            <input className={styles.input} onChange={onChangeTodo} type="text" placeholder="Todo" />
            <div style={{ marginTop: '10px' }}>
              <Button onClick={onClickAddButton}>Add</Button>
            </div>
          </div>
          )}

        </center>
        {
        todos.length > 0
        && (
        <table style={{ width: '100%', margin: '0px 0px 150px' }}>
          <thead>
            <tr>
              <th className={styles.th}>Time</th>
              <th className={styles.th}>Todo</th>
            </tr>
          </thead>

          <tbody>
            {
              todos.map((data, key) => (
                <tr key={key} style={data.isComplete ? { textDecoration: 'line-through' } : {}}>
                  <td className={styles.td}>{`${data.time[0]} - ${data.time[1]}`}</td>
                  <td className={styles.td}>{data.todo}</td>
                  <td className={styles.td}>
                    <FontAwesomeIcon
                      title="Complete"
                      style={{ marginRight: '10px', cursor: 'pointer' }}
                      color={primary}
                      size="sm"
                      icon={faCheck}
                      onClick={() => {
                        todos[key].isComplete = !todos[key].isComplete;
                        const updateTodos = [...todos];
                        setTodos(updateTodos);
                      }}
                    />

                    <FontAwesomeIcon
                      title="Delete"
                      style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                      size="sm"
                      icon={faTrash}
                      onClick={() => {
                        const removedTodos = todos.filter((_todo, index) => index !== key);
                        setTodos(removedTodos);
                      }}
                    />

                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        )
      }

        {
        todos.length === 0
        && (
          <div style={{ marginTop: '150px', color: primary }}>
            <center>
              <h2>
                Nothing To Do
                {' '}
                <FontAwesomeIcon
                  title="Smile"
                  color={primary}
                  size="lg"
                  icon={faSmile}
                />

              </h2>
            </center>
          </div>
        )
      }

      </div>
    </CSSTransition>

  );
};

export default withTheme(withRouter(Todos));
