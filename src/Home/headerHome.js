import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as RealEstateIcon } from '../assets/real-estate.svg';
import { ReactComponent as PodcastIcon } from '../assets/podcast.svg';
import { ReactComponent as BookIcon } from '../assets/book.svg';
import { ReactComponent as LoveIcon } from '../assets/love.svg';
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
              component={RealEstateIcon}
              viewBox='0 0 512 512'
              sx={{
                position: 'absolute',
                height: '50px',
                width: '50px',
                top: '15%',
                left: '30%',
                transform: 'rotate(350deg)',
                color: '#FBFBFB',
              }}
            />
            <SvgIcon
              component={PodcastIcon}
              inheritViewBox
              sx={{
                position: 'absolute',
                height: '50px',
                width: '50px',
                top: '12%',
                left: '63%',
                transform: 'rotate(10deg)',
                color: '#FBFBFB',
              }}
            />
            <SvgIcon
              component={BookIcon}
              inheritViewBox
              sx={{
                position: 'absolute',
                height: '70px',
                width: '70px',
                top: '32%',
                left: '29%',
                transform: 'rotate(350deg)',
                color: '#FBFBFB',
              }}
            />
            <SvgIcon
              component={LoveIcon}
              inheritViewBox
              sx={{
                position: 'absolute',
                height: '70px',
                width: '70px',
                top: '32%',
                left: '62%',
                transform: 'rotate(30deg)',
                color: '#FBFBFB',
              }}
            />
            <Typography sx={{ lineHeight: '1.1em', color: '#FBFBFB', fontFamily: 'Yeo', padding: '0px', fontSize: '98px' }}>
              Patricia Scimone
            </Typography>
            <Typography variant='h2' sx={{width: '100%', textAlign: 'center',color: '#FBFBFB', fontFamily: 'Yeo', padding: '0px', fontSize: '58px', borderBottom: '1px solid white'}}>of Tampa Bay!</Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                width: '100%',
                height: '16em',
                paddingTop: '15px',
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
                  }}
                >
                  <SvgIcon
                    component={LoveIcon}
                    inheritViewBox
                    sx={{
                        height: '100%',
                        width: '20%',
                      marginLeft: '5%',
                      color: 'white',
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
                    <Typography sx={{color: 'white', fontFamily: 'LouisGeorgeCafe', fontSize: '28px'}}>Recently Divorced?</Typography>
                    <Typography sx={{color: 'white', fontSize: '22px'}}>Click here!</Typography>
                  </Box>
                </Box>
                <Box
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
                  }}
                >
                  <SvgIcon
                    component={BookIcon}
                    inheritViewBox
                    sx={{
                        height: '100%',
                        width: '20%',
                      marginLeft: '5%',
                      color: 'white',
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
                    <Typography sx={{color: 'white', fontFamily: 'LouisGeorgeCafe', fontSize: '28px'}}>Check Out My Book</Typography>
                    <Typography sx={{color: 'white', fontSize: '22px'}}>Click here!</Typography>
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
                  }}
                >
                  <SvgIcon
                    component={PodcastIcon}
                    inheritViewBox
                    sx={{
                      height: '100%',
                      width: '20%',
                      marginLeft: '5%',
                      color: 'white',
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
                    <Typography sx={{width: '100%', textAlign: 'center', color: 'white', fontFamily: 'LouisGeorgeCafe', fontSize: '28px'}}>Need a Podcast?</Typography>
                    <Typography sx={{width: '100%', textAlign: 'center', color: 'white', fontSize: '22px'}}>Click here!</Typography>
                  </Box>
                </Box>
                <Box
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
                  }}
                >
                  <SvgIcon
                    component={RealEstateIcon}
                    inheritViewBox
                    sx={{
                        height: '100%',
                        width: '20%',
                        
                      marginLeft: '5%',
                      color: 'white',
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
                    <Typography sx={{color: 'white', fontFamily: 'LouisGeorgeCafe', fontSize: '28px'}}>Recently Divorced?</Typography>
                    <Typography sx={{color: 'white', fontSize: '22px'}}>Click here!</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      );
}

export default headerHome