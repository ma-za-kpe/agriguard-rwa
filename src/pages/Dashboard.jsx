import React from 'react';
import * as MUI from '@mui/material';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();


  const goToFarm = (event) => {
    event.preventDefault();
    // check if farmer already exists
    navigate("/farm");
  };

  return (
    <MUI.Container maxWidth="m" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '100px' }}>
      <MUI.Typography variant="h5" gutterBottom>
        Welcome, Farmer! Get started by adding your farm to our system.
      </MUI.Typography>
      <MUI.Button variant="contained" color="primary" onClick={goToFarm} href="/add-farm">
        Add Farm
      </MUI.Button>
    </MUI.Container>
  );
};

export default Dashboard;