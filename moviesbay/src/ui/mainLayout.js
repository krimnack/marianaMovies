import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box
        component={'header'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={2}
        p={4}
        sx={{ bgcolor: '#1c232a', color: 'white' }}
      >
        Header
      </Box>

      <Outlet />

      <Box
        component={'footer'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        mt={2}
        p={4}
        sx={{ bgcolor: '#62778a', color: 'white' }}
      >
        Footer
      </Box>
    </Container>
  );
};
