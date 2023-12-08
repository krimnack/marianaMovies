import { Box, List, ListItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const menuTitles = [
    { title: 'Home', path: '/' },
    { title: 'About Us' },
    { title: 'Contact' },
  ];
  return (
    <Box display={'flex'}>
      <List>
        <ListItem co></ListItem>
      </List>
      {menuTitles?.map((menu, index) => {
        return (
          <Typography
            key={`${menu?.title}_${index}`}
            component={'button'}
            mr={4}
            onClick={menu?.path ? () => navigate(menu?.path) : null}
            sx={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: '#00e637',
              ':hover': {
                textDecoration: 'underline 1px solid #00e637',
                textUnderlineOffset: 3,
              },
            }}
          >
            {menu?.title}
          </Typography>
        );
      })}
    </Box>
  );
};
