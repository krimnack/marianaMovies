import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { getMoviesData } from '../actions/dashboard-actions';
import { useDispatch } from 'react-redux';
import { IOSSwitch } from './components/ios-Switch';
import { MoviesTable } from './components/movies-Table';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const movieSearch = useRef();

  const [moviesData, setMoviesData] = useState(undefined);
  const [titles, setTitles] = useState(undefined);
  const [genreSearch, setGenreSearch] = useState(false);
  const [dataFiltered, setDataFiltered] = useState(undefined);

  const handleTitleSearch = () => {
    if (moviesData !== undefined) {
      let result = [];
      moviesData?.map((item) => {
        let moviesFiltered = item?.movies.filter((mov) => {
          return mov?.title
            ?.toUpperCase()
            .includes(movieSearch.current.value.toUpperCase())
            ? mov
            : null;
        });
        return moviesFiltered?.length
          ? result.push({ date: item?.date, movies: moviesFiltered })
          : null;
      });

      setDataFiltered(result || undefined);
    }
  };

  const handleGenreSearch = (_event, values) => {
    let result = [];
    moviesData?.map((item) => {
      let moviesFiltered = item?.movies?.filter((mov) => {
        return mov?.genre?.some((e) => values.includes(e));
      });
      return moviesFiltered?.length
        ? result.push({ date: item?.date, movies: moviesFiltered })
        : null;
    });

    setDataFiltered(result?.length ? result : undefined);
    return;
  };

  const handleGenreSwitch = (event) => {
    const { checked } = event.target;
    if (checked) movieSearch.current.value = '';
    setGenreSearch(checked);
    setDataFiltered(undefined);
  };

  const handleGenreTitles = (data) => {
    let result = [];
    data?.forEach((item) => {
      item?.movies?.forEach((mov) =>
        mov?.genre?.forEach((gen) => result.push(gen))
      );
    });
    setTitles([...new Set(result)]);
    return;
  };

  useEffect(() => {
    if (moviesData === undefined) {
      dispatch(getMoviesData()).then((response) => {
        setMoviesData(response);
        handleGenreTitles(response);
      });
    }
  });

  return (
    <Box>
      <Typography variant='h4'>MarianaBay</Typography>
      <Grid container item xs={12} spacing={2} mt={2} mb={4}>
        <Grid item xs={12} md={4}>
          {' '}
          <TextField
            id='movieSearch'
            name='movieSearch'
            inputRef={movieSearch}
            placeholder='Search a movie title'
            onChange={handleTitleSearch}
            disabled={genreSearch}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Autocomplete
            fullWidth
            multiple
            disabled={!genreSearch}
            id='genre-Search'
            options={titles ? titles : []}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <Typography component={'li'} {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                  checkedIcon={<CheckBoxIcon fontSize='small' />}
                  sx={{ mr: 8 }}
                  checked={selected}
                />

                {option}
              </Typography>
            )}
            onChange={handleGenreSearch}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Genre'
                placeholder='Select Genre(s)'
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControlLabel
            control={
              <IOSSwitch
                sx={{ m: 1 }}
                defaultChecked={genreSearch}
                onChange={handleGenreSwitch}
              />
            }
            label='Search by Genre'
          />
        </Grid>
      </Grid>

      <MoviesTable
        moviesData={dataFiltered ? dataFiltered : moviesData || []}
      />
    </Box>
  );
};
