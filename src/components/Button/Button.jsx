/* eslint-disable react/prop-types */
import React from 'react';
import { withTheme } from '@emotion/react';
import styles from './Button.module.css';

const Button = ({ children, theme, onClick }) => {
  const { primary, secondary } = theme;
  return (
    <button type="button" onClick={onClick} className={styles.button} style={{ color: secondary, backgroundColor: primary }}>
      {children}
    </button>
  );
};

export default withTheme(Button);
