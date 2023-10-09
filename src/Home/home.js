import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as RealEstateIcon } from '../assets/real-estate.svg';
import { ReactComponent as PodcastIcon } from '../assets/podcast.svg';
import { ReactComponent as BookIcon } from '../assets/book.svg';
import { ReactComponent as LoveIcon } from '../assets/love.svg';
import Woman from '../assets/woman.jpg';

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
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: '40%',
            background: `url(${Woman})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            borderRadius: '50%',
          }}
        ></Box>
        <SvgIcon
          component={RealEstateIcon}
          viewBox='0 0 512 512'
          sx={{
            position: 'absolute',
            height: '50px',
            width: '50px',
            top: '62%',
            left: '29%',
            transform: 'rotate(350deg)',
          }}
        />
        <SvgIcon
          component={PodcastIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '50px',
            width: '50px',
            top: '32%',
            left: '65%',
            transform: 'rotate(10deg)',
          }}
        />
        <SvgIcon
          component={BookIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '70px',
            width: '70px',
            top: '30%',
            left: '32%',
            transform: 'rotate(350deg)',
          }}
        />
        <SvgIcon
          component={LoveIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '70px',
            width: '70px',
            top: '60%',
            left: '65%',
            transform: 'rotate(30deg)',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '100vh',
          backgroundColor: 'purple',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Typography variant='h1' sx={{ marginTop: '15%' }}>
          Patricia Scimone
        </Typography>
        <Typography variant='h2'>of Tampa Bay!</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
            height: '20em',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
              height: '10em',
            }}
          >
            <Box
              sx={{
                width: '45%',
                height: '7rem',
                backgroundColor: 'white',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
              }}
            >
              <SvgIcon
                component={LoveIcon}
                inheritViewBox
                sx={{
                  height: '70px',
                  width: '70px',
                  marginLeft: '5%',
                }}
              />
              <Box
                sx={{
                  marginLeft: '15%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography>Recently Divorced?</Typography>
                <Typography>Click here!</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '45%',
                height: '7rem',
                backgroundColor: 'white',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
              }}
            >
              <SvgIcon
                component={LoveIcon}
                inheritViewBox
                sx={{
                  height: '70px',
                  width: '70px',
                  marginLeft: '5%',
                }}
              />
              <Box
                sx={{
                  marginLeft: '15%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography>Recently Divorced?</Typography>
                <Typography>Click here!</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
              height: '10em',
            }}
          >
            <Box
              sx={{
                width: '45%',
                height: '7rem',
                backgroundColor: 'white',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
              }}
            >
              <SvgIcon
                component={LoveIcon}
                inheritViewBox
                sx={{
                  height: '70px',
                  width: '70px',
                  marginLeft: '5%',
                }}
              />
              <Box
                sx={{
                  marginLeft: '15%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography>Recently Divorced?</Typography>
                <Typography>Click here!</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '45%',
                height: '7rem',
                backgroundColor: 'white',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
              }}
            >
              <SvgIcon
                component={LoveIcon}
                inheritViewBox
                sx={{
                  height: '70px',
                  width: '70px',
                  marginLeft: '5%',
                }}
              />
              <Box
                sx={{
                  marginLeft: '15%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography>Recently Divorced?</Typography>
                <Typography>Click here!</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default home;
