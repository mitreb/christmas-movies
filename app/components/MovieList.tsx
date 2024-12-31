'use client';

import { Movie } from '../types';
import MovieCard from './MovieCard';
import useMovies from '../hooks/useMovies';
import { useEffect } from 'react';

interface MovieListProps {
  initialData: Movie[];
}

const MovieList = ({ initialData }: MovieListProps) => {
  const { data: movies, isLoading, loadMore } = useMovies(initialData);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  return (
    <>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
};

export default MovieList;
