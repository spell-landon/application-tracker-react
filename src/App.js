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
      index: 0,
      date: '01/11/2022',
      time: '8:00AM',
      company: 'Google',
      interviewer: 'David Myers',
      interviewerEmail: 'Myers.David@gmail.com',
      jobTitle: 'Software Engineer',
      salary: '80000',
    },
    {
      index: 1,
      date: '01/12/2022',
      time: '10:00AM',
      company: 'Facebook',
      interviewer: 'Jason Quackers',
      interviewerEmail: 'Quackers123@gmail.com',
      jobTitle: 'Junior Developer',
      salary: '73000',
    },
    {
      index: 2,
      date: '01/12/2022',
      time: '1:00PM',
      company: 'Amazon',
      interviewer: 'Fern Plant',
      interviewerEmail: 'im_not_a_plant@hotmail.com',
      jobTitle: 'UI Design',
      salary: '79500',
    },
    {
      index: 3,
      date: '01/14/2022',
      time: '11:00AM',
      company: 'Netflix',
      interviewer: 'Bruce Willis',
      interviewerEmail: 'therealbrucewillis@yahoo.com',
      jobTitle: 'Full Stack Developer',
      salary: '109000',
    },
    {
      index: 4,
      date: '01/15/2022',
      time: '9:30AM',
      company: 'Stamps',
      interviewer: 'George Watson',
      interviewerEmail: 'watson-george@telegram.com',
      jobTitle: 'Software Engineer',
      salary: '99000',
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
