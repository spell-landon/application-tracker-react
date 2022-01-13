import React from 'react';
import styles from './Dashboard.module.css';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

function Dashboard({ data }) {
  // //?------------ STATES
  // const [weatherData, setWeatherData] = useState([]);
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // //?------------ GEOLOCATION SECTION
  // var options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };
  // // function success(pos) {
  // //   var crd = pos.coords;
  // //   console.log('Your current position is:');
  // //   console.log(`Latitude : ${crd.latitude}`);
  // //   console.log(`Longitude: ${crd.longitude}`);
  // //   console.log(`More or less ${crd.accuracy} meters.`);
  // //   console.log(pos);
  // // }
  // function successLatitude(pos) {
  //   var crd = pos.coords;
  //   let latitude = crd.latitude;
  //   setLatitude(latitude);
  //   return latitude;
  // }
  // function successLongitude(pos) {
  //   var crd = pos.coords;
  //   let longitude = crd.longitude;
  //   setLongitude(longitude);
  //   return longitude;
  // }
  // // function error(err) {
  // //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // // }
  // // navigator.geolocation.getCurrentPosition(success, error, options);
  // //?------------ WEATHER DATA
  // const apiInfo = {
  //   key: process.env.REACT_APP_OW_KEY,
  // };
  // function getWeather() {
  //   const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiInfo.key}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setWeatherData(res);
  //       console.log(weatherData);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => {
  //       return;
  //     });
  // }
  // useEffect(() => {
  //   if (!longitude && !latitude) {
  //     navigator.geolocation.getCurrentPosition(successLatitude);
  //     navigator.geolocation.getCurrentPosition(successLongitude);
  //   } else if (longitude && latitude) {
  //     getWeather();
  //   }
  // }, [longitude, latitude]);

  console.log(data);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.username) {
      return;
    } else {
      navigate('/login');
    }
  }, [user.username, navigate]);
  const name = user.username.charAt(0).toUpperCase() + user.username.slice(1);

  // MUI DataGrid
  const [rows, setRows] = useState(data);
  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    []
  );
  // const deleteAll = React.useCallback(
  //   (id) => () => {
  //     setTimeout(() => {
  //       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  //     });
  //   },
  //   []
  // );
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const usdPrice = {
    type: 'number',
    width: 120,
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
    cellClassName: 'font-tabular-nums',
  };
  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'ID',
    //   width: 70,
    //   cellClassName: (params) =>
    //     clsx('greyed', {
    //       odd: params.value % 2 === 0,
    //       even: params.value % 2 !== 0,
    //     }),
    // },
    {
      field: 'date',
      headerName: 'Date',
      type: 'date',
      width: 110,
      editable: true,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 110,
      editable: true,
    },
    {
      field: 'company',
      headerName: 'Company',
      width: 110,
      editable: true,
    },
    {
      field: 'interviewer',
      headerName: 'Interviewer',
      width: 140,
      editable: true,
    },
    {
      field: 'interviewerEmail',
      headerName: 'Interviewer Email',
      flex: 1,
      editable: true,
    },
    {
      field: 'jobTitle',
      headerName: 'Job Title',
      width: 160,
      editable: true,
    },
    {
      field: 'salary',
      headerName: 'Salary',
      type: 'number',
      width: 110,
      editable: true,
      ...usdPrice,
    },
    {
      field: 'actions',
      headerName: 'Delete',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<i className='far fa-trash-alt'></i>}
          label='Delete'
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

  return (
    <div className={styles.dbContainer}>
      <section>
        <div>
          <h1>Welcome back, {name}!</h1>
          <p>You last logged in on {user.lastLogIn}.</p>
        </div>
        {/* {weatherData.length !== 0 ? <p className={styles.temp}>{weatherData?.main?.temp}°F</p> : null} */}
      </section>
      <div
        style={{
          height: 'calc(100vh - 150px)',
          width: '100%',
        }}>
        <DataGrid
          rows={rows}
          rowHeight={50}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
          // checkboxSelection
          disableSelectionOnClick
          onColumnResize
          onColumnWidthChange
          components={{ Toolbar: GridToolbar }}
          sx={{
            // fontFamily: 'Playfair Display',
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'rgba( 241, 241, 241, 100%)',
            },
            '& .MuiDataGrid-toolbarContainer': {
              backgroundColor: 'rgba( 241, 241, 241, 100%)',
            },
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: 'rgba( 241, 241, 241, 100%)',
            },
            border: 'none',
          }}
          density='compact'
          editMode='row'
          // showColumnRightBorder
          // showCellRightBorder
        />
      </div>
    </div>
  );
}

export default Dashboard;
