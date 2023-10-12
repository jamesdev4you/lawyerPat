import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as RealEstateIcon } from '../assets/real-estate.svg';
import { ReactComponent as RealEstateAvatarIcon } from '../assets/sign.svg';
import { ReactComponent as PodcastAvatarIcon } from '../assets/podcast.svg';
import { ReactComponent as PodcastIcon } from '../assets/podcast1.svg';
import { ReactComponent as BookAvatarIcon } from '../assets/book.svg';
import { ReactComponent as BookIcon } from '../assets/reading-book.svg';
import { ReactComponent as LoveAvatarIcon } from '../assets/love.svg';
import { ReactComponent as LoveIcon } from '../assets/brotherhood.svg';
import Woman from '../assets/woman.jpg';
import Background from '../assets/pexels-adrien-olichon-2387793.jpg';
import '../../src/index.css';

const headerHome = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        backgroundPosition: 'center',
        borderBottom: '3px solid black',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: '30%',
            background: `url(${Woman})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            borderRadius: '50%',
          }}
        ></Box>
        <SvgIcon
          component={RealEstateAvatarIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '50px',
            width: '50px',
            top: '11%',
            left: '33%',
            transform: 'rotate(350deg)',
            color: 'white',
          }}
        />
        <SvgIcon
          component={PodcastAvatarIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '60px',
            width: '60px',
            top: '14%',
            left: '63%',
            transform: 'rotate(10deg)',
            color: '#FBFBFB',
          }}
        />
        <SvgIcon
          component={BookAvatarIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '70px',
            width: '70px',
            top: '32%',
            left: '30%',
            transform: 'rotate(350deg)',
            color: '#FBFBFB',
          }}
        />
        <SvgIcon
          component={LoveAvatarIcon}
          inheritViewBox
          sx={{
            position: 'absolute',
            height: '80px',
            width: '80px',
            top: '32%',
            left: '60%',
            transform: 'rotate(20deg)',
            color: '#FBFBFB',
          }}
        />
        <Typography
          sx={{
            paddingTop: '25px',
            lineHeight: '.8em',
            color: '#FBFBFB',
            fontFamily: 'Hi',
            fontSize: '98px',
          }}
        >
          Patricia Scimone
        </Typography>
        <Typography
          variant='h2'
          sx={{
            width: '96%',
            textAlign: 'center',
            color: '#FBFBFB',
            fontFamily: 'Hi',
            padding: '10px ',
            fontSize: '58px',
            borderBottom: '1px solid white',
          }}
        >
          of Tampa Bay!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
            height: '16em',
            paddingTop: '25px',
            gap: '25px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '25px',
              width: '100%',
              height: '10em',
            }}
          >
            <Box
              component='button'
              sx={{
                width: '45%',
                height: '7rem',
                borderRadius: '15px',
                border: '3px solid white',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                cursor: 'pointer',
              }}
            >
              <SvgIcon
                component={LoveIcon}
                inheritViewBox
                sx={{
                  height: '100%',
                  width: '20%',
                  marginLeft: '5%',
                  color: 'gold',
                }}
              />
              <Box
                sx={{
                  width: '80%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'LouisGeorgeCafe',
                    fontSize: '28px',
                  }}
                >
                  Recently Divorced?
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '22px' }}>
                  Click here!
                </Typography>
              </Box>
            </Box>
            <Box
              component='button'
              sx={{
                width: '45%',
                height: '7rem',
                border: '3px solid white',
                backgroundColor: 'black',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                cursor: 'pointer',
              }}
            >
              <SvgIcon
                component={BookIcon}
                inheritViewBox
                sx={{
                  height: '100%',
                  width: '20%',
                  marginLeft: '5%',
                  color: 'gold',
                }}
              />
              <Box
                sx={{
                  width: '80%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'LouisGeorgeCafe',
                    fontSize: '28px',
                  }}
                >
                  Check Out My Book
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '22px' }}>
                  Click here!
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '25px',
              width: '100%',
              height: '10em',
            }}
          >
            <Box
              component='button'
              sx={{
                width: '45%',
                height: '7rem',
                border: '3px solid white',
                backgroundColor: 'black',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                cursor: 'pointer',
              }}
            >
              <SvgIcon
                component={PodcastIcon}
                inheritViewBox
                sx={{
                  height: '100%',
                  width: '20%',
                  marginLeft: '5%',
                  color: 'gold',
                }}
              />
              <Box
                sx={{
                  width: '80%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'LouisGeorgeCafe',
                    fontSize: '28px',
                  }}
                >
                  Need a Podcast?
                </Typography>
                <Typography
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '22px',
                  }}
                >
                  Click here!
                </Typography>
              </Box>
            </Box>
            <Box
              component='button'
              sx={{
                width: '45%',
                height: '7rem',
                border: '3px solid white',
                backgroundColor: 'black',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                cursor: 'pointer',
              }}
            >
              <SvgIcon
                component={RealEstateIcon}
                inheritViewBox
                sx={{
                  height: '100%',
                  width: '20%',

                  marginLeft: '5%',
                  color: 'gold',
                }}
              />
              <Box
                sx={{
                  width: '80%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontFamily: 'LouisGeorgeCafe',
                    fontSize: '28px',
                  }}
                >
                  Recently Divorced?
                </Typography>
                <Typography sx={{ color: 'white', fontSize: '22px' }}>
                  Click here!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default headerHome;
