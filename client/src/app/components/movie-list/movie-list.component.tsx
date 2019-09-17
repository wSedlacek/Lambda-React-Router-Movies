import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { MovieCard } from '../movie-card/movie-card.component';
import { Movie } from '../../model/Movie';
import { MovieService } from '../../services/movies.service';

const useStyles = makeStyles(theme => ({
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
}));

export const MovieList = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState<Movie[]>();
  useEffect(() => {
    MovieService.getMovies().then(setMovies);
  }, []);

  if (!movies) {
    return (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};
