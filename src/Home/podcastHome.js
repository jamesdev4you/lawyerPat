import React from 'react';
import { Box, Typography } from '@mui/material';
import Book from '../assets/book.jpg';
import { MyBookButton, MyBookPageButton } from '../styledComponents.js';

const podcastHome = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: 'white',
          margin: '1em',
          fontFamily: 'Hi',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Soothe Your Day With This Podcast!
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '70vh',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '4em',
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: '30em',
            border: '3px solid white',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            backgroundColor: 'black',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: 'Hi',
              width: '90%',
              textAlign: 'center',
              paddingTop: '15px',
              paddingBottom: '5px',
              borderBottom: '3px solid white',
              color: 'white',
            }}
          >
            Best Podcast To Upgrade Your Life
          </Typography>
          <Typography
            variant='p'
            sx={{
              fontFamily: 'Hi',
              width: '90%',
              textAlign: 'left',
              paddingTop: '15px',
              color: 'white',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus posuere condimentum. Nulla vitae consectetur ante, vitae
            fermentum lectus. Fusce luctus placerat magna, vel luctus odio
            ultrices eu. In vestibulum mollis urna sed laoreet. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nullam iaculis dictum eros, et molestie urna tempus non.
            Fusce lorem ex, semper nec massa ac, faucibus tincidunt sapien.
            Integer a vestibulum augue. Duis tristique pharetra aliquet. Quisque
            suscipit placerat sollicitudin. Donec in maximus nisl. Aliquam erat
            volutpat. Ut sit amet facilisis velit.
          </Typography>
          <Typography
            variant='p'
            sx={{
              fontFamily: 'Hi',
              width: '90%',
              textAlign: 'left',
              paddingTop: '15px',
              paddingBottom: '15px',
              color: 'white',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus posuere condimentum. Nulla vitae consectetur ante, vitae
            fermentum lectus. Fusce luctus placerat magna, vel luctus odio
            ultrices eu. In vestibulum mollis urna sed laoreet. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nullam iaculis dictum eros, et molestie urna tempus non.
            Fusce lorem ex, semper nec massa ac, faucibus tincidunt sapien.
            Integer a vestibulum augue. Duis tristique pharetra aliquet. Quisque
            suscipit placerat sollicitudin. Donec in maximus nisl. Aliquam erat
            volutpat. Ut sit amet facilisis velit.
          </Typography>
          
          <Box
            sx={{
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <MyBookButton /> <MyBookPageButton />
          </Box>
        </Box>
        <Box
          sx={{
            width: '20%',
            height: '30em',
            background: `url(${Book})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'bottom',
            border: '3px solid white',
            borderRadius: '15px',
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
          }}
        />
      </Box>
    </Box>
  );
};

export default podcastHome;
