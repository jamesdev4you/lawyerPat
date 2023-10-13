import React from 'react';
import { Box } from '@mui/material';
import HeaderHome from '../Home/headerHome.js';
import BookHome from '../Home/bookHome.js';
import RealEstateHome from '../Home/realestateHome.js';
import PodcastHome from '../Home/podcastHome.js';

const home = () => {
  return (
    <>
      <HeaderHome />
      <RealEstateHome />
      <BookHome />
      <PodcastHome />
    </>
  );
};

export default home;
