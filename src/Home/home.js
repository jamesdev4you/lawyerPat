import React from 'react';
import { Box } from '@mui/material';

const home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '100vh',
          backgroundColor: 'blue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: '40%',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '100vh',
          backgroundColor: 'purple',
        }}
      ></Box>
    </Box>
  );
};

export default home;
