import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Movie } from '../../model/Movie';

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieDetails = (props: { movie: Movie }) => {
  const { title, director, metascore, stars } = props.movie;
  return (
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
    </div>
  );
};

export { MovieList };
