import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SavedList } from './components/saved-list/saved-list.component';
import { MovieList } from './components/movie-list/movie-list.component';

import { Movie } from './model/Movie';
import { MoviePage } from './components/movie-page/movie-page.component';

const App = () => {
  const [savedList, setSavedList] = useState<Movie[]>([]);

  const addToSavedList = (movie: Movie | undefined) => {
    if (movie !== undefined && !savedList.find(item => movie.title === item.title))
      setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path='/' component={MovieList} />
        <Route
          path='/movies/:id'
          component={(props: any) => <MoviePage {...props} addToSavedList={addToSavedList} />}
        />
      </Switch>
    </Router>
  );
};

export { App };
