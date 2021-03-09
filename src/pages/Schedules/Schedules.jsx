import React, { useState } from 'react';
import { withTheme } from '@emotion/react';
import { withRouter } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import styles from './Schedules.module.css';
import Button from '../../components/Button/Button';

const Schedules = () => {
  const [time, setTime] = useState(['10:00', '11:00']);
  const [add, setAdd] = useState(false);
  const [buttonText, setButtonText] = useState('New');
  const onclickNewButton = () => {
    const condiditon = !add;
    setAdd(condiditon);
    const text = !add ? 'Done' : 'New';
    setButtonText(text);
  };

  return (
    <div id="schedules" className={styles.schedules}>
      <center>
        <h1>Schedules</h1>
      </center>
      <Button onClick={onclickNewButton}>{buttonText}</Button>
      <br />
      <center>
        { add
          && (
          <div style={{ marginTop: '5px' }}>
            <TimeRangePicker
              onChange={setTime}
              value={time}
              disableClock
            />
            <br />
            <input className={styles.input} type="text" placeholder="Todo" />
            <div style={{ marginTop: '10px' }}>
              <Button>Add</Button>
            </div>

          </div>
          )}

      </center>

      <hr style={{ marginTop: '20px' }} />

    </div>
  );
};

export default withTheme(withRouter(Schedules));
