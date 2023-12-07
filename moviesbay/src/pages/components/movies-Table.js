import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export const MoviesTable = ({ moviesData = undefined }) => {
  const tableHeaders = [
    'Title',
    'Poster',
    'Genre(s)',
    'Rating',
    'Year Release',
    'Metacritic Rating',
    'Runtime',
  ];

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 720 }}
          aria-label='movies-table'
          style={{ backgroundColor: '#2d3c49' }}
        >
          <TableHead>
            <TableRow>
              {tableHeaders.map((item, index) => {
                return (
                  <TableCell
                    key={`${item}_${index}`}
                    align={'center'}
                    sx={{ color: 'white' }}
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {moviesData?.map((item) => {
              let tableData = item?.movies?.map((mov) => {
                return (
                  <TableRow
                    key={mov?.title}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell
                      component='th'
                      scope='row'
                      align={'center'}
                      sx={{ color: 'white' }}
                    >
                      {mov?.title}
                    </TableCell>
                    <TableCell align='center' sx={{ color: 'white' }}>
                      <img
                        src={mov?.poster}
                        alt={'movie_poster'}
                        width={'48px'}
                      ></img>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography
                        display={'flex'}
                        component={'span'}
                        justifyContent={'center'}
                        sx={{ color: 'white' }}
                      >
                        {mov?.genre?.map((gen) => {
                          return (
                            <Typography component={'p'}>
                              {gen},&nbsp;
                            </Typography>
                          );
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell align='center' sx={{ color: '#00e637' }}>
                      {mov?.imdb_rating} / 10
                    </TableCell>
                    <TableCell align='center' sx={{ color: 'white' }}>
                      {mov?.year}
                    </TableCell>
                    <TableCell align='center' sx={{ color: '#ff8a00' }}>
                      {mov?.meta_score !== 'N/A'
                        ? `${mov?.meta_score} / 100`
                        : 'No Rating'}
                    </TableCell>
                    <TableCell align='center' sx={{ color: 'white' }}>
                      {mov?.runtime}
                    </TableCell>
                  </TableRow>
                );
              });
              return [...tableData];
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
