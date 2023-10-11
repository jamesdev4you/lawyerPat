import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `linear-gradient(to bottom left, #5B5C50, #1B1E1E)`,
      color: '#F5DE6D',
      '&:hover': {
        color: '#5B5C50',
        background: '#F5DE6D',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '2px solid #F5DE6D',
    }}
  >
    Book Today!
  </Button>
);

const MyServiceButton = (props) => (
  <Button
    variant='contained'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `black`,
      color: 'gold',
      fontWeight: 'bold',
      '&:hover': {
        color: 'black',
        background: 'gold',
        border: '2px solid #1B1E1E',
        fontWeight: 'bold',
      },
      border: '2px solid gold',
      marginTop: '1em',
    }}
  >
    Schedule Today!
  </Button>
);

export { MyStyledButton, MyServiceButton };
