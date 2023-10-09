import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as RealEstateIcon } from '../assets/real-estate.svg';
import { ReactComponent as PodcastIcon } from '../assets/podcast.svg';
import { ReactComponent as BookIcon } from '../assets/book.svg';
import { ReactComponent as LoveIcon } from '../assets/love.svg';
import Woman from '../assets/woman.jpg';
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
