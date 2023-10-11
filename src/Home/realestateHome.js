import React from 'react'
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as realhomebroken } from '../assets/realhomebroken.svg';
import { ReactComponent as realhomehome } from '../assets/realhomehome.svg';
import { ReactComponent as realhomeold } from '../assets/realhomeold.svg';

const realestateHome = () => {

  const realEstateHomeOptions = [
    {title: 'Recently Divorced?',
      picture: realhomebroken,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus. Aenean a malesuada lectus. Vivamus faucibus arcu dolor, eget pellentesque mi sollicitudin ac. '}, 
    {title: 'Real Estate',
    picture: realhomehome,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus. Aenean a malesuada lectus. Vivamus faucibus arcu dolor, eget pellentesque mi sollicitudin ac. '}, 
  {title: 'Elderly Estate',
  picture: realhomeold,
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo risus. Morbi cursus lobortis enim rutrum cursus. Aenean a malesuada lectus. Vivamus faucibus arcu dolor, eget pellentesque mi sollicitudin ac. '}, 
  ]

  return (
    <Box 
    sx={{ width: '100%',
            height: '90vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
            backgroundColor: 'black',}}>
        <Typography variant='h1' sx={{color:'white', margin: '1em'}}>See How I Can Help</Typography> 
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', height: '70vh'}}>
        {realEstateHomeOptions.map(({title, picture, description}) => (
          <Box sx={{gap: '15px', padding: '1em', borderRadius: '15px', width: '25%', height: '60vh', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent:'start', flexDirection: 'column'}}>
            <SvgIcon
              component={picture}
              inheritViewBox
              sx={{
                height: '100px',
                width: '100px',
                color: 'black',
              }}
            />
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='p'>{description}</Typography>
            <Typography variant='p'>{description}</Typography>
            <Typography variant='p'>{description}</Typography>
          </Box>
        ))}
        </Box>  
    </Box>
  )
}

export default realestateHome