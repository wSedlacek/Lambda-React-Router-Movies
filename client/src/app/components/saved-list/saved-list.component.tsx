import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { Movie } from '../../model/Movie';

const useStyles = makeStyles(theme => ({
  card: {
    width: '80%',
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  movies: {
    margin: 2,
  },
}));

export const SavedList = (props: { list: Movie[] }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography variant='h6' component='h3'>
        Saved Movies:
      </Typography>
      <div>
        {props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} key={movie.id}>
            <Button className={classes.movies}>{movie.title}</Button>
          </NavLink>
        ))}
      </div>
      <NavLink to='/'>
        <Button>Home</Button>
      </NavLink>
    </Card>
  );
};
