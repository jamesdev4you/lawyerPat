import React from 'react';
import { Box } from '@mui/material';
import HeaderHome from '../Home/headerHome.js';

const home = () => {
  return (
   <>
    <HeaderHome />
    <Box 
    sx={{ width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',}}>

    </Box>
    <Box 
    sx={{ width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',}}>

    </Box>
    <Box 
    sx={{ width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey',}}>

    </Box>
    <Box 
    sx={{ width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'purple',}}>

    </Box>
   </>
  );
};

export default home;
