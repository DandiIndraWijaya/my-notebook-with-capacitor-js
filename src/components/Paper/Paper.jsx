/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import { UserInLocalStorage } from '../../hooks/UseStateWithLocalStorage';
import styles from './Paper.module.css';

const Paper = ({ children, theme }) => {
  const { primary } = theme;
  const { name } = UserInLocalStorage('user')[0];

  return (
    <div className={styles.paper}>
      <div style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div style={{ position: 'fixed', top: '10px', backgroundColor: 'white' }}>
            <h5 style={{ color: primary }}>
              <FontAwesomeIcon
                color={primary}
                size="md"
                icon={faBook}
              />
              {' '}
              My NoteBook
            </h5>
          </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <div style={{
            position: 'fixed', top: '10px', right: '6%', backgroundColor: 'white',
          }}
          >
            <h5 style={{ color: primary, textDecoration: 'underline' }}>
              {name}
            </h5>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withTheme(Paper);
