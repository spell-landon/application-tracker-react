import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Home(props) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function navigateLogin() {
    navigate('/login');
  }
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to Job Search Tracker</h1>
      <p>
        Here you can add job interviews to a tracker so you can see all the jobs
        that you have applied to and update accordingly!
      </p>

      {user.username ? (
        <Link to='/dashboard'>
          <button>Dashboard</button>
        </Link>
      ) : (
        <button onClick={navigateLogin}>Login</button>
      )}
    </div>
  );
}

export default Home;
