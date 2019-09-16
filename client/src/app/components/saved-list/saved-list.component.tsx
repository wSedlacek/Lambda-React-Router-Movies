import React from 'react';

import { Movie } from '../../model/Movie';

const SavedList = (props: { list: Movie[] }) => (
  <div className='saved-list'>
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className='saved-movie'>{movie.title}</span>
    ))}
    <div className='home-button'>Home</div>
  </div>
);

export { SavedList };
