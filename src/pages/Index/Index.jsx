/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Index.module.css';
import Button from '../../components/Button/Button';
import { UserInLocalStorage } from '../../hooks/UseStateWithLocalStorage';

const Index = () => {
  const [user, setUser] = UserInLocalStorage('user');
  const [name, setName] = useState(user.name);
  const [quote, setQuote] = useState(user.quote);
  const [isEqual, setIsEqual] = useState(false);
  const [onPage, setOnPage] = useState(false);

  useEffect(() => {
    setTimeout(() => setOnPage(true), 500);
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeQuote = (e) => {
    setQuote(e.target.value);
  };

  const onClickSave = () => {
    setUser({ name, quote });
    location.reload();
  };

  useEffect(() => {
    if (name !== user.name || quote !== user.quote) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  }, [name, quote, user]);

  return (
    <CSSTransition
      in={onPage}
      timeout={1000}
      classNames="alert"
      unmountOnExit
    >
      <div id="index" className={styles.index}>
        <center>
          <h4>My Name :</h4>
          <input type="text" onChange={onChangeName} value={name} className={styles.input} />
          <br />
          <br />
          <h4>Quote That Inspire Me :</h4>
          <textarea className={styles.input} value={quote} onChange={onChangeQuote} rows="3" />
          <br />
          <br />
          {
      isEqual
      && <Button onClick={onClickSave}>Save</Button>
    }

        </center>
      </div>
    </CSSTransition>

  );
};

export default withRouter(Index);
