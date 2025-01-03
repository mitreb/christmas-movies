'use client';

import { Movie } from '../types';
import MovieCard from './MovieCard';
import LoadMore from './LoadMore';
import useMovies from '../hooks/useMovies';

interface MovieListProps {
  initialData: Movie[];
}

const MovieList = ({ initialData }: MovieListProps) => {
  const { data: movies, isLoading, loadMore } = useMovies(initialData);

  return (
    <>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {movies.map((movie, index) => (
          <div key={index} className="flex justify-center items-center">
            <MovieCard movie={movie} index={index} />
          </div>
        ))}
      </section>

      <LoadMore isLoading={isLoading} loadMore={loadMore} />
    </>
  );
};

export default MovieList;
