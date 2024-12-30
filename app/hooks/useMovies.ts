import { useState } from 'react';
import { fetchMovies } from '../actions';
import { Movie } from '../types';

const useMovies = (initialPage: number = 1, initialData: Movie[] = []) => {
  const [data, setData] = useState<Movie[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(initialPage);

  const loadMore = async () => {
    setIsLoading(true);
    const newMovies = await fetchMovies(page);
    setData((prevData) => {
      // Filter out duplicates
      const uniqueData = newMovies.filter(
        (newItem) => !prevData.some((prevItem) => prevItem.id === newItem.id)
      );
      return [...prevData, ...uniqueData];
    });
    setPage((prevPage) => prevPage + 1);
    setIsLoading(false);
  };

  return { data, isLoading, loadMore };
};

export default useMovies;
