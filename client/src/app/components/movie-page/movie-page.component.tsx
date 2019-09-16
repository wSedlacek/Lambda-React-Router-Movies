import React, { useState, useEffect } from 'react';

import { MovieCard } from '../movie-card/movie-card.component';
import { Movie } from '../../model/Movie';
import { Match } from '../../model/Route';
import { MovieService } from '../../services/movies.service';

interface MatchParams {
  id: string;
}

const MoviePage = (props: {
  addToSavedList: (movie: Movie) => void;
  match: Match<MatchParams>;
}) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    MovieService.getMovie(props.match.params.id).then(setMovie);
  }, [props]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />
      <div className='save-button'>Save</div>
    </div>
  );
};

export { MoviePage };
