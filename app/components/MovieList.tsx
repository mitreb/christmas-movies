'use client';

import { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieListProps {
  initialData: Movie[];
}

const MovieList = ({ initialData }: MovieListProps) => {
  return (
    <>
      <section>
        {initialData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  );
};

export default MovieList;
