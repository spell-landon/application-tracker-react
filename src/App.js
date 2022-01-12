import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import AddInterview from './components/AddInterview/AddInterview';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from './UserContext';

function App() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(pos);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  const [user, setUser] = useState({
    username: '',
    lasLogIn: '',
  });
  const [data, setData] = useState([
    // {
    //   id: 0,
    //   date: '01/11/2022',
    //   time: '8:00AM',
    //   company: 'Google',
    //   interviewer: 'David Myers',
    //   interviewerEmail: 'Myers.David@gmail.com',
    //   jobTitle: 'Software Engineer',
    //   salary: '50000',
    // },
    // {
    //   id: 1,
    //   date: '01/12/2022',
    //   time: '10:00AM',
    //   company: 'Facebook',
    //   interviewer: 'Jason Quackers',
    //   interviewerEmail: 'Quackers123@gmail.com',
    //   jobTitle: 'Junior Developer',
    //   salary: '73000',
    // },
    // {
    //   id: 2,
    //   date: '01/12/2022',
    //   time: '1:00PM',
    //   company: 'Amazon',
    //   interviewer: 'Fern Plant',
    //   interviewerEmail: 'im_not_a_plant@hotmail.com',
    //   jobTitle: 'UI Design',
    //   salary: '64500',
    // },
    // {
    //   id: 3,
    //   date: '01/14/2022',
    //   time: '11:00AM',
    //   company: 'Netflix',
    //   interviewer: 'Bruce Willis',
    //   interviewerEmail: 'therealbrucewillis@yahoo.com',
    //   jobTitle: 'Full Stack Developer',
    //   salary: '1090000',
    // },
    // {
    //   id: 4,
    //   date: '01/15/2022',
    //   time: '9:30AM',
    //   company: 'Stamps',
    //   interviewer: 'George Watson',
    //   interviewerEmail: 'watson-george@telegram.com',
    //   jobTitle: 'Software Engineer',
    //   salary: '81000',
    // },
    // {
    //   id: 5,
    //   date: '01/15/2022',
    //   time: '9:30AM',
    //   company: 'Stamps',
    //   interviewer: 'George Watson',
    //   interviewerEmail: 'watson-george@telegram.com',
    //   jobTitle: 'Software Engineer',
    //   salary: '81000',
    // },
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
            element={<Dashboard data={data} />}></Route>
          <Route
            path='/add-interview'
            element={<AddInterview data={data} setData={setData} />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
