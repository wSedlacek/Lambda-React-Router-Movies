import React from 'react';
import { NavLink } from 'react-router-dom';

import { Movie } from '../../model/Movie';

const SavedList = (props: { list: Movie[] }) => (
  <div className='saved-list'>
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} className='saved-movie' key={movie.id}>
        {movie.title}
      </NavLink>
    ))}
    <NavLink className='home-button' to='/'>
      Home
    </NavLink>
  </div>
);

export { SavedList };
