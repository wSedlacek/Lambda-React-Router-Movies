import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SavedList } from './components/saved-list/saved-list.component';
import { MovieList } from './components/movie-list/movie-list.component';

import { Movie } from './model/Movie';
import { MoviePage } from './components/movie-page/movie-page.component';

export const App = () => {
  const [savedList, setSavedList] = useState<Movie[]>([]);

  const addToSavedList = (movie: Movie | undefined) => {
    if (movie !== undefined && !savedList.find(item => movie.title === item.title))
      setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path='/' render={() => <MovieList />} />
        <Route
          path='/movies/:id'
          render={props => <MoviePage id={props.match.params.id} addToSavedList={addToSavedList} />}
        />
      </Switch>
    </Router>
  );
};
