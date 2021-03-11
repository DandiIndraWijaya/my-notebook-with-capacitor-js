import React from 'react';
import { withTheme } from '@emotion/react';
import { withRouter } from 'react-router-dom';
import styles from './Schedule.module.css';

const Schedule = () => (
//   const [title, setTitle] = useState('Schedules');

  <div id="schedule" className={styles.schedule}>
    <center>
      <h3>Daily Schedule</h3>
    </center>

  </div>
);
export default withTheme(withRouter(Schedule));
