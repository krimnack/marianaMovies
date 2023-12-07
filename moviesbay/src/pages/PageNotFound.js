import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant='h1'>Oops</Typography>
      <Typography variant='h2'>404! Not Found</Typography>
      <Button variant='contained' color='primary' onClick={() => navigate('/')}>
        Go To Home
      </Button>
    </Box>
  );
};
