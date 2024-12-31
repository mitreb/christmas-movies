'use client';

import { Movie } from '../types';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';
import LoadMore from './LoadMore';

interface MovieListProps {
  initialData: Movie[];
}

const MovieList = ({ initialData }: MovieListProps) => {
  const { data: movies, isLoading, loadMore } = useMovies(initialData);

  return (
    <>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>

      <LoadMore isLoading={isLoading} loadMore={loadMore} />
    </>
  );
};

export default MovieList;
