/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@emotion/react';
import styles from './Paper.module.css';

const Paper = ({ children, theme }) => {
  const { primary } = theme;
  return (
    <div className={styles.paper}>
      <div style={{ position: 'fixed', top: '10px' }}>
        <h3 style={{ color: primary }}>My NoteBook</h3>
      </div>

      {children}
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withTheme(Paper);
