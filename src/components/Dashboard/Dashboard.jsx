import React from 'react';
import styles from './Dashboard.module.css';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbar,
} from '@mui/x-data-grid';

function Dashboard({ data }) {
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
      width: 120,
      editable: true,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 120,
      editable: true,
    },
    {
      field: 'company',
      headerName: 'Company',
      width: 120,
      editable: true,
    },
    {
      field: 'interviewer',
      headerName: 'Interviewer',
      width: 150,
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
      width: 120,
      editable: true,
      ...usdPrice,
    },
    {
      field: 'actions',
      headerName: 'Delete',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          icon={<i class='far fa-trash-alt'></i>}
          label='Delete'
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ];

  return (
    <div className={styles.dbContainer}>
      <h1>Welcome back, {name}!</h1>
      <p>You last logged in on {user.lastLogIn}.</p>
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
            fontFamily: 'Playfair Display',
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
