import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from './headerLayout';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const MainLayout = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box
        component={'header'}
        display={'flex'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        mb={2}
        py={4}
        sx={{ bgcolor: '#1c232a', color: 'white' }}
      >
        <Header />
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
        Copyright {<AlternateEmailIcon sx={{ mx: 0.5, color: '#ff8a00' }} />}{' '}
        MarianaBay. 2023
      </Box>
    </Container>
  );
};
