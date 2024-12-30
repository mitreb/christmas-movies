'use server';

import { PAGE_SIZE } from './constants';
import movies from './data';

export async function fetchMovies(page: number) {
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedMovies = movies.slice(startIndex, startIndex + PAGE_SIZE);

  // Simulate a network delay
  // TODO: Remove this when switching to a real API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return paginatedMovies;
}
