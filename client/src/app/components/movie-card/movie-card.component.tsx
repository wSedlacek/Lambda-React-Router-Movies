import React from 'react';
import { NavLink } from 'react-router-dom';

import { Movie } from '../../model/Movie';

export const MovieCard = (props: { movie: Movie; children?: React.ReactNode }) => {
  const { title, director, metascore, stars, id } = props.movie;
  const children = props.children;

  return (
    <NavLink to={`/movies/${id}`}>
      <div className='movie-card'>
        <h2>{title}</h2>
        <div className='movie-director'>
          Director: <em>{director}</em>
        </div>
        <div className='movie-metascore'>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className='movie-star'>
            {star}
          </div>
        ))}

        {children}
      </div>
    </NavLink>
  );
};
