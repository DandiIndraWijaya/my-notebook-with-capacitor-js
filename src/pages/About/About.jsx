/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { withTheme } from '@emotion/react';
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './About.module.css';

const About = ({ theme }) => {
  const [onPage, setOnPage] = useState(false);
  const { primary } = theme;
  useEffect(() => {
    setTimeout(() => setOnPage(true), 500);
  }, []);

  return (
    <div id="about" className={styles.about}>
      <CSSTransition
        in={onPage}
        timeout={1000}
        classNames="alert"
        unmountOnExit
      >
        <center>
          <h1>About</h1>
          <p style={{ marginTop: '20px' }}>MyNoteBook is an application for writing daily schedule and activities.</p>
          <p style={{ marginTop: '60px', color: primary }}>
            © copyright 2020 | Built By
            {' '}
            <a href="https://dandiindrawijaya.web.app" style={{ color: primary }}>Dandi Indra Wijaya</a>
          </p>
        </center>

      </CSSTransition>
    </div>
  );
};

export default withTheme(withRouter(About));
