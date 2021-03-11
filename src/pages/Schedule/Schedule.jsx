/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { withTheme } from '@emotion/react';
import { withRouter } from 'react-router-dom';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ScheduleInLocalStorage } from '../../hooks/UseStateWithLocalStorage';
import Button from '../../components/Button/Button';
import styles from './Schedule.module.css';

const Schedule = ({ theme }) => {
  const { secondary } = theme;
  const [time, setTime] = useState(['06:00', '07:00']);
  const [todo, setTodo] = useState('');
  const [add, setAdd] = useState(false);
  const [day, setDay] = useState('Monday');
  const [dayLength, setDayLength] = useState([]);
  const [schedule, setSchedule] = ScheduleInLocalStorage('schedule');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let tempDay;
  let length = 0;
  let styleTableBorder;
  useEffect(() => {
    let monday = 0;
    let tuesday = 0;
    let wednesday = 0;
    let thursday = 0;
    let friday = 0;
    let saturday = 0;
    let sunday = 0;
    schedule.map((s) => {
      if (s.day === 'Monday') {
        monday += 1;
      } else if (s.day === 'Tuesday') {
        tuesday += 1;
      } else if (s.day === 'Wednesday') {
        wednesday += 1;
      } else if (s.day === 'Thursday') {
        thursday += 1;
      } else if (s.day === 'Friday') {
        friday += 1;
      } else if (s.day === 'Saturday') {
        saturday += 1;
      } else if (s.day === 'Sunday') {
        sunday += 1;
      }

      setDayLength([
        monday, tuesday, wednesday, thursday, friday, saturday, sunday,
      ]);
    });
  }, [schedule]);

  const onclickNewButton = () => {
    const condiditon = !add;
    setAdd(condiditon);
  };

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onChangeDay = (e) => {
    setDay(e.target.value);
  };

  const onClickAddButton = () => {
    const addedSchedule = [...schedule, { day, time, todo }];
    if (schedule.length !== 0) {
      const len = addedSchedule.length - 1;
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < len; i += 1) {
          const splitedFirstSchedule = addedSchedule[i].time[0].split(':');
          const parseIntFirstSchedule = parseInt(splitedFirstSchedule[0]);

          const splitedSecondSchedule = addedSchedule[i + 1].time[0].split(':');
          const parseIntSecondSchedule = parseInt(splitedSecondSchedule[0]);
          if (parseIntFirstSchedule > parseIntSecondSchedule) {
            const tmp = addedSchedule[i];
            addedSchedule[i] = addedSchedule[i + 1];
            addedSchedule[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
    }
    setSchedule(addedSchedule);
  };

  return (
    <div id="schedule" className={styles.schedule}>
      <center>
        <h3>Daily Schedule</h3>
        <div style={{ marginTop: '10px' }}>
          <Button onClick={onclickNewButton}>
            <FontAwesomeIcon
              title="Complete"
              color={secondary}
              size="md"
              icon={!add ? faCalendar : faTimes}
            />
          </Button>
        </div>
      </center>
      <br />
      <center>
        { add
          && (
          <div className="todoForm">
            <select className={styles.input} onChange={onChangeDay}>
              {days.map((_day, key) => (
                <option value={_day} key={key}>{_day}</option>
              ))}
            </select>
            <div style={{ marginTop: '10px' }}>
              <TimeRangePicker
                onChange={setTime}
                value={time}
                disableClock
              />
            </div>
            <input className={styles.input} onChange={onChangeTodo} type="text" placeholder="Todo" />
            <div style={{ marginTop: '10px' }}>
              <Button onClick={onClickAddButton}>Add</Button>
            </div>
          </div>
          )}

      </center>
      <table style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th className={styles.th}>Day</th>
            <th className={styles.th}>Time & Todo</th>
          </tr>
        </thead>
        <tbody>
          {
            days.map((_day, key) => (
              <tr key={key}>
                <td className={styles.td}>{_day}</td>
                <td className={styles.td}>
                  <table style={{ width: '100%' }}>
                    {
                      schedule.map((s, k) => {
                        if (tempDay !== _day) {
                          length = 0;
                        }
                        tempDay = _day;

                        if (s.day === _day) {
                          length += 1;
                          styleTableBorder = length === dayLength[key] ? { border: 'unset' } : {};
                          return (
                            <tr key={k}>
                              <td className={styles.tdInside} style={styleTableBorder}>
                                {s.time[0]}
                                {' '}
                                -
                                {' '}
                                {s.time[1]}
                              </td>
                              <td className={styles.tdInside} style={styleTableBorder}>{s.todo}</td>
                            </tr>
                          );
                        }
                      })
                    }
                  </table>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
export default withTheme(withRouter(Schedule));
