import { useState, useCallback } from 'react';
import { fetchMovies } from '../actions';
import { Movie } from '../types';

let page = 2;

const useMovies = (initialData: Movie[] = []) => {
  const [data, setData] = useState<Movie[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    const newMovies = await fetchMovies(page);
    setData((prevData) => {
      // Filter out duplicates
      const uniqueData = newMovies.filter(
        (newItem) => !prevData.some((prevItem) => prevItem.id === newItem.id)
      );
      return [...prevData, ...uniqueData];
    });
    setIsLoading(false);
    page++;
  }, []);

  return { data, isLoading, loadMore };
};

export default useMovies;
