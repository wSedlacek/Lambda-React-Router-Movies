import React from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../../model/Movie';

const SavedList = (props: { list: Movie[] }) => (
  <div className='saved-list'>
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/movies/${movie.id}`} className='saved-movie' key={movie.id}>
        {movie.title}
      </Link>
    ))}
    <Link className='home-button' to='/'>
      Home
    </Link>
  </div>
);

export { SavedList };
