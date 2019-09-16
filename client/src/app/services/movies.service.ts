import axios from 'axios';

import { Movie } from '../model/Movie';

export class MovieService {
  static async getMovies() {
    return await axios
      .get<Movie[]>('http://localhost:5000/api/movies')
      .then(response => response.data)
      .catch(error => {
        console.error('Server Error', error);
        return [];
      });
  }

  static async getMovie(id: string) {
    return await axios
      .get<Movie>(`http://localhost:5000/api/movies/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        return undefined;
      });
  }
}
