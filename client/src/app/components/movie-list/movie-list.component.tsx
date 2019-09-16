import React, { useState, useEffect } from 'react';

import { MovieCard } from '../movie-card/movie-card.component';
import { Movie } from '../../model/Movie';
import { MovieService } from '../../services/movies.service';

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    MovieService.getMovies().then(setMovies);
  }, []);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export { MovieList };
