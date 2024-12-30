import { Movie } from '../types';

export function sortMovies(movies: Movie[], order: keyof Movie): Movie[] {
  return movies.sort((a, b) => {
    switch (order) {
      case 'runtime':
        return b.runtime - a.runtime;
      case 'imdbRating':
        return b.imdbRating - a.imdbRating;
      case 'year':
        return b.year - a.year;
      case 'director':
        return a.director.localeCompare(b.director);
      case 'stars':
        return a.stars.localeCompare(b.stars);
      default:
        return a.title.localeCompare(b.title);
    }
  });
}
