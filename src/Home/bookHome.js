import React from 'react';
import { Box, Typography } from '@mui/material';
import Book from '../assets/book.jpg';
import { MyBookButton, MyBookPageButton } from '../styledComponents.js';

const bookHome = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          color: 'black',
          margin: '1em',
          fontFamily: 'Hi',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Divorced? Your Life Starts Now!
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
            width: '20%',
            height: '30em',
            background: `url(${Book})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'bottom',
            border: '3px solid black',
            borderRadius: '15px',
          }}
        />
        <Box
          sx={{
            width: '40%',
            height: '30em',
            border: '3px solid black',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
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
              borderBottom: '3px solid black',
            }}
          >
            The Way To Live After Divorce
          </Typography>
          <Typography
            variant='p'
            sx={{
              fontFamily: 'Hi',
              width: '90%',
              textAlign: 'left',
              paddingTop: '15px',
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
      </Box>
    </Box>
  );
};

export default bookHome;
