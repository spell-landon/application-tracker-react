import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import AddInterview from './components/AddInterview/AddInterview';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState({
    username: '',
    lasLogIn: '',
  });
  const [data, setData] = useState([
    {
      date: '01/10/2022',
      time: '9:00AM',
      company: 'Google',
      interviewer: 'David',
      interviewerEmail: 'david.google@google.com',
      jobTitle: 'Software Engineer',
      salary: '30000',
      remote: 'Yes',
      secondInterview: 'No',
    },
    {
      date: '01/11/2022',
      time: '12:00PM',
      company: 'Amazon',
      interviewer: 'Lance',
      interviewerEmail: 'lance.amazon@google.com',
      jobTitle: 'UI Designer',
      salary: '120000',
      remote: 'Yes',
      secondInterview: 'Yes',
    },
  ]);
  console.log(data);
  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route
            path='/dashboard'
            element={<Dashboard data={data} setData={setData} />}></Route>
          <Route
            path='/add-interview'
            element={<AddInterview data={data} setData={setData} />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
