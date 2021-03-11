import React, { useEffect, useState } from 'react';
import { withTheme } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { withRouter, useLocation, Link } from 'react-router-dom';
import {
  faClock,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navigation.module.css';
import './style.css';
// eslint-disable-next-line react/prop-types
const Navigation = ({ theme }) => {
  const [onPage, setOnPage] = useState(false);

  const setOnPageValue = (state) => {
    setOnPage(state);
  };

  useEffect(() => {
    setTimeout(() => setOnPageValue(true), 2900);
  }, []);
  // eslint-disable-next-line react/prop-types
  const { primary } = theme;
  const location = useLocation();

  const selected = {
    color: 'white',
    backgroundColor: primary,
    padding: '2px',
    borderRadius: '8px',
  };

  return (
    <CSSTransition in={onPage} timeout={1000} classNames="alert" unmountOnExit>
      <div className={styles.navigation} style={{ color: primary }}>

        <center>
          <div style={{ display: 'flex' }}>
            <div>
              <Link to="/todos" className={styles.link}>
                <FontAwesomeIcon
                  title="Todo"
                  className={styles.icon}
                  size="2x"
                  icon={faClock}
                />
                <br />
                {location.pathname === '/todos' && (
                <span style={selected}>Todos</span>
                )}
                {location.pathname !== '/todos' && <span>Todos</span>}
              </Link>
            </div>
            <div>
              <Link to="/schedule" className={styles.link}>
                <FontAwesomeIcon
                  title="Schedule"
                  className={styles.icon}
                  size="2x"
                  icon={faCalendar}
                />
                <br />
                {location.pathname === '/schedule' && (
                <span style={selected}>Schedule</span>
                )}
                {location.pathname !== '/schedule' && <span>Schedule</span>}
              </Link>
            </div>
          </div>
        </center>
      </div>
    </CSSTransition>
  );
};

export default withRouter(withTheme(Navigation));
