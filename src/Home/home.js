import React from 'react';
import { Box } from '@mui/material';
import HeaderHome from '../Home/headerHome.js';
import BookHome from '../Home/bookHome.js';
import RealEstateHome from '../Home/realestateHome.js';

const home = () => {
  return (
    <>
      <HeaderHome />
      <RealEstateHome />
      <BookHome />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey',
        }}
      ></Box>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'purple',
        }}
      ></Box>
    </>
  );
};

export default home;
