import React, { useState } from 'react';
import styles from './AddInterview.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import moment from 'moment';

function AddInterview({ data, setData }) {
  const navigate = useNavigate();

  const index = data.length;
  const [newInterview, setNewInterview] = useState({
    index: index,
    date: '',
    time: '',
    company: '',
    interviewer: '',
    interviewerEmail: '',
    jobTitle: '',
    salary: '',
    // remote: '',
    // secondInterview: '',
  });
  function addItem(e) {
    e.preventDefault();
    const tempInterviews = [...data];
    tempInterviews.push(newInterview);
    setData(tempInterviews);
    navigate('/dashboard');
  }
  function dateChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, date: event.target.value });
  }
  function timeChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, time: event.target.value });
  }
  function companyChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, company: event.target.value });
  }
  function interviewerChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, interviewer: event.target.value });
  }
  function intEmailChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, interviewerEmail: event.target.value });
  }
  function jobTitleChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, jobTitle: event.target.value });
  }
  function salaryChange(event) {
    event.preventDefault();
    setNewInterview({ ...newInterview, salary: event.target.value });
  }

  return (
    <div className={styles.addContainer}>
      <section className={styles.addInterview}>
        <h1>Track a new interview</h1>
        <form className={styles.jobInput} onSubmit={addItem}>
          {/* Date */}
          <label htmlFor='date'>Interview Date: </label>
          <input
            type='date'
            id='date'
            value={newInterview.date}
            onChange={dateChange}
            autoComplete='off'
          />
          {/* Time */}
          <label htmlFor='time'>Interview time: </label>
          <input
            type='time'
            id='time'
            value={newInterview.time}
            onChange={timeChange}
            autoComplete='off'
          />
          {/* Company */}
          <label htmlFor='company'>Company: </label>
          <input
            type='text'
            id='company'
            value={newInterview.company}
            onChange={companyChange}
            autoComplete='off'
          />
          {/* Interviewer */}
          <label htmlFor='interviewer'>Interviewer Name: </label>
          <input
            type='text'
            id='interviewer'
            value={newInterview.interviewer}
            onChange={interviewerChange}
            autoComplete='off'
          />
          {/* Interviewer Email */}
          <label htmlFor='interviewer-email'>Interviewer Email: </label>
          <input
            type='text'
            id='interviewer-email'
            value={newInterview.intEmail}
            onChange={intEmailChange}
            autoComplete='off'
          />
          {/* Job Title */}
          <label htmlFor='job-title'>Job Title: </label>
          <input
            type='text'
            id='job-title'
            value={newInterview.jobTitle}
            onChange={jobTitleChange}
            autoComplete='off'
          />
          {/* Salary */}
          <label htmlFor='salary'>Salary: </label>
          <input
            type='number'
            id='salary'
            value={newInterview.salary}
            onChange={salaryChange}
            autoComplete='off'
          />
          {/* Remote */}
          {/* <label htmlFor='remote'>Option For Remote Work? </label>
          <div className={styles.remoteContainer}>
            <div className={styles.remoteYes}>
              <input
                type='radio'
                name='remote'
                id='remote-yes'
                value='Yes'
                onChange={remoteChange}
              />
              <label htmlFor='remote-yes'>Yes</label>
            </div>
            <div className={styles.remoteNo}>
              <input
                type='radio'
                name='remote'
                id='remote-no'
                value='No'
                onChange={remoteChange}
              />
              <label htmlFor='remote-no'>No</label>
            </div>
          </div> */}
          {/* Second Interview */}
          {/* <label htmlFor='second'>
            Did you get asked to come back for a second interview?{' '}
          </label>
          <div className={styles.secondContainer}>
            <div className={styles.secondYes}>
              <input type='radio' name='second' id='second-yes' value='Yes' />
              <label htmlFor='second-yes'>Yes</label>
            </div>
            <div className={styles.secondNo}>
              <input type='radio' name='second' id='second-no' value='No' />
              <label htmlFor='second-no'>No</label>
            </div>
          </div> */}
          {/* Submit */}
          <input type='submit' value='Add' id={styles.addBtn} />
        </form>
      </section>
    </div>
  );
}

export default AddInterview;
