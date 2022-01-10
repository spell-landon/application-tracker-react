import React from 'react';
import styles from './Dashboard.module.css';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className={styles.dbContainer}>
      <h1>
        Welcome back, {user.username}! You last logged in on {user.lastLogIn}.
      </h1>
      <table class='table-sortable'>
        <tr>
          <th>
            Date <i class='fas fa-filter'></i>
          </th>
          <th>
            Time <i class='fas fa-filter'></i>
          </th>
          <th>
            Company <i class='fas fa-filter'></i>
          </th>
          <th>
            Interviewer <i class='fas fa-filter'></i>
          </th>
          <th>
            Email <i class='fas fa-filter'></i>
          </th>
          <th>
            Job Title <i class='fas fa-filter'></i>
          </th>
          <th>
            Salary <i class='fas fa-filter'></i>
          </th>
          <th>
            Remote <i class='fas fa-filter'></i>
          </th>
          <th>
            Second Interview <i class='fas fa-filter'></i>
          </th>
        </tr>
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
              <td id='td-remote'>{element.remote}</td>
              <td id='td-second-interview'>{element.secondInterview}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Dashboard;
