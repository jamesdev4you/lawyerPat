import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as realhomebroken } from '../assets/realhomebroken.svg';
import { ReactComponent as realhomehome } from '../assets/realhomehome.svg';
import { ReactComponent as realhomeold } from '../assets/realhomeold.svg';
import { MyServiceButton } from '../styledComponents.js';
import '../index.css';

const realestateHome = () => {
  const realEstateHomeOptions = [
    {
      title: 'Recently Divorced?',
      picture: realhomebroken,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus. Aenean a malesuada lectus. Vivamus faucibus arcu dolor, eget pellentesque mi sollicitudin ac. ',
    },
    {
      title: 'Real Estate',
      picture: realhomehome,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus. Aenean a malesuada lectus. Vivamus faucibus arcu dolor, eget pellentesque mi sollicitudin ac. ',
    },
    {
      title: 'Elderly Estate',
      picture: realhomeold,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus. Aenean a malesuada lectus. Vivamus faucibus arcu dolor, eget pellentesque mi sollicitudin ac. ',
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '82vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: 'black',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: 'white',
          margin: '.8em',
          fontFamily: 'Hi',
        }}
      >
        See How I Can Help
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
          height: '70vh',
        }}
      >
        {realEstateHomeOptions.map(({ title, picture, description }) => (
          <Box
            sx={{
              gap: '15px',
              padding: '1.3em',
              borderRadius: '15px',
              width: '23.5%',
              height: '55vh',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              flexDirection: 'column',
              border: '3px solid gold',
              boxShadow:
                'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
            }}
          >
            <SvgIcon
              component={picture}
              inheritViewBox
              sx={{
                height: '100px',
                width: '100px',
                color: 'black',
              }}
            />
            <Typography variant='h3' sx={{ fontFamily: 'Hi' }}>
              {title}
            </Typography>
            <Typography variant='p' sx={{ fontFamily: 'Hi' }}>
              {description}
            </Typography>
            <Typography variant='p' sx={{ fontFamily: 'Hi' }}>
              {description}
            </Typography>
            <Typography variant='p' sx={{ fontFamily: 'Hi' }}>
              {description}
            </Typography>
            <MyServiceButton />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default realestateHome;
