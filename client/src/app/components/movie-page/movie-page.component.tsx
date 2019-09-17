import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { MovieCard } from '../movie-card/movie-card.component';
import { Movie } from '../../model/Movie';
import { MovieService } from '../../services/movies.service';

const useStyles = makeStyles(theme => ({
  save: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
}));

export const MoviePage = (props: {
  id: number;
  addToSavedList: (movie: Movie | undefined) => void;
}) => {
  const classes = useStyles();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    MovieService.getMovie(props.id).then(setMovie);
  }, [props]);

  if (!movie) {
    return (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <MovieCard movie={movie}>
      <Button
        className={classes.save}
        variant='contained'
        color='primary'
        onClick={() => props.addToSavedList(movie)}
      >
        Save
      </Button>
    </MovieCard>
  );
};
