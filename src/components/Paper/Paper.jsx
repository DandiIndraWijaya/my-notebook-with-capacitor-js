/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Paper.module.css';

const Paper = ({ children, theme }) => {
  const { primary } = theme;
  return (
    <div className={styles.paper}>
      <div style={{ position: 'fixed', top: '10px' }}>
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

      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withTheme(Paper);
