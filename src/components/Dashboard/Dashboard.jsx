import React from 'react';
import styles from './Dashboard.module.css';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { moment } from 'moment';

function Dashboard({ data, setData }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.username) {
      return;
    } else {
      navigate('/login');
    }
  }, []);
  const name = user.username.charAt(0).toUpperCase() + user.username.slice(1);
  // useEffect(() => {
  //   return data;
  // }, [data]);

  return (
    <div className={styles.dbContainer}>
      <h1>Welcome back, {name}!</h1>
      <p>You last logged in on {user.lastLogIn}.</p>
      <table className='table-sortable'>
        <thead>
          <tr>
            <th>Date {/* <i className='fas fa-filter'></i> */}</th>
            <th>
              Time
              {/* <i className='fas fa-filter'></i> */}
            </th>
            <th>
              Company
              {/* <i className='fas fa-filter'></i> */}
            </th>
            <th>
              Interviewer
              {/* <i className='fas fa-filter'></i> */}
            </th>
            <th>
              Email
              {/* <i className='fas fa-filter'></i> */}
            </th>
            <th>
              Job Title
              {/* <i className='fas fa-filter'></i> */}
            </th>
            <th>
              Salary
              {/* <i className='fas fa-filter'></i> */}
            </th>
            {/* <th>
              Remote <i className='fas fa-filter'></i>
            </th>
            <th>
              Second Interview <i className='fas fa-filter'></i>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td id='td-date'>{element.date}</td>
                <td id='td-time'>{element.time}</td>
                <td id='td-company'>{element.company}</td>
                <td id='td-interviewer'>{element.interviewer}</td>
                <td id='td-email'>{element.interviewerEmail}</td>
                <td id='td-job-title'>{element.jobTitle}</td>
                <td id='td-salary'>{element.salary}</td>
                {/* <td id='td-remote'>{element.remote}</td>
              <td id='td-second-interview'>{element.secondInterview}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
