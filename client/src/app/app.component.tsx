import React, { useState } from 'react';

import { SavedList } from './components/saved-list/saved-list.component';

import { Movie } from './model/Movie';

const App = () => {
  const [savedList, setSavedList] = useState<Movie[]>([]);

  const addToSavedList = (movie: Movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export { App };
