import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Movie } from '../../model/Movie';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    position: 'relative',
    width: '75%',
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  director: {
    marginLeft: '0.5rem',
  },
  details: {
    marginLeft: '1.5rem',
  },
});

export const MovieCard = (props: { movie: Movie; children?: React.ReactNode }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { title, director, metascore, stars, id } = props.movie;
  const children = props.children;

  return (
    <NavLink to={`/movies/${id}`}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h4' component='h2'>
            {title}
          </Typography>
          <Typography className={classes.director} variant='h5' color='textSecondary' gutterBottom>
            {director}
          </Typography>
          <div className={classes.details}>
            <Typography>
              Score: <strong>{metascore}</strong>
            </Typography>

            <Typography color='textSecondary'>
              Actors
              {stars.map(star => (
                <Typography key={star} color='textPrimary'>
                  {bull} {star}
                </Typography>
              ))}
            </Typography>
          </div>
        </CardContent>
        <CardActions>{children}</CardActions>
      </Card>
    </NavLink>
  );
};
