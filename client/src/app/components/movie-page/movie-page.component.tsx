import React, { useState, useEffect } from 'react';

import { MovieCard } from '../movie-card/movie-card.component';
import { Movie } from '../../model/Movie';
import { MovieService } from '../../services/movies.service';

export const MoviePage = (props: {
  id: number;
  addToSavedList?: (movie: Movie | undefined) => void;
}) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    MovieService.getMovie(props.id).then(setMovie);
  }, [props]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    if (addToSavedList) addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie}>
      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
    </MovieCard>
  );
};
