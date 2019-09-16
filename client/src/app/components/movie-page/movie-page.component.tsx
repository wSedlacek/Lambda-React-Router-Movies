import React, { useState, useEffect } from 'react';

import { MovieCard } from '../movie-card/movie-card.component';
import { Movie } from '../../model/Movie';
import { Match } from '../../model/Route';
import { MovieService } from '../../services/movies.service';

export interface MoviePageParams {
  id: string;
}

const MoviePage = (props: {
  addToSavedList: (movie: Movie | undefined) => void;
  match: Match<MoviePageParams>;
}) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    MovieService.getMovie(props.match.params.id).then(setMovie);
  }, [props]);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />
      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
    </div>
  );
};

export { MoviePage };
