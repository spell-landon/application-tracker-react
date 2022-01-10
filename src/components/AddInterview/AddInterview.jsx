import React, { useState } from 'react';
import styles from './AddInterview.module.css';
import { useNavigate } from 'react-router-dom';

function AddInterview({ data, setData }) {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [dateString, setDateString] = useState('');
  function addItem(e) {
    e.preventDefault();
    console.log('item has been added');
    let tempInterviews = [...data];
    
    navigate('/dashboard');
  }
  function handleInputChange(event) {
    event.preventDefault();
    setDate(event.target.value);
    setDateString(event.target.value);
  }
  return (
    <div className={styles.addContainer}>
      <section className={styles.addInterview}>
        <h1>Add an interview to start tracking</h1>
        <form className={styles.jobInput} onSubmit={addItem}>
          {/* Date */}
          <label htmlFor='date'>Interview Date: </label>
          <input type='date' id='date' />
          {/* Time */}
          <label htmlFor='time'>Interview time: </label>
          <input type='time' id='time' />

          {/* Company */}
          <label htmlFor='company'>Company: </label>
          <input type='text' id='company' />
          {/* Interviewer */}
          <label htmlFor='interviewer'>Interviewer Name: </label>
          <input type='text' id='interviewer' />
          {/* Interviewer Email */}
          <label htmlFor='interviewer-email'>Interviewer Email: </label>
          <input type='text' id='interviewer-email' />
          {/* Job Title */}
          <label htmlFor='job-title'>Job Title: </label>
          <input type='text' id='job-title' />
          {/* Salary */}
          <label htmlFor='salary'>Salary: </label>
          <input type='number' id='salary' />
          {/* Remote */}
          <label htmlFor='remote'>Option For Remote Work? </label>
          <div className={styles.remoteContainer}>
            <div className={styles.remoteYes}>
              <input type='radio' name='remote' id='remote-yes' value='Yes' />
              <label htmlFor='remote-yes'>Yes</label>
            </div>
            <div className={styles.remoteNo}>
              <input type='radio' name='remote' id='remote-no' value='No' />
              <label htmlFor='remote-no'>No</label>
            </div>
          </div>
          {/* Second Interview */}
          <label htmlFor='second'>
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
          </div>
          {/* Submit */}
          <input type='submit' value='Add' id={styles.addBtn} />
        </form>
      </section>
    </div>
  );
}

export default AddInterview;
