import { NextResponse } from 'next/server';
import movies from '../../data';
import { sortMovies } from '../../utils/sort-movies';
import { Movie } from '../../types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const order = (searchParams.get('order') as keyof Movie) || 'title';

  try {
    // Sort the movies based on the order
    const sortedMovies = sortMovies(movies, order);

    // Paginate the sorted movies
    const startIndex = (page - 1) * limit;
    const paginatedMovies = sortedMovies.slice(startIndex, startIndex + limit);

    return NextResponse.json(paginatedMovies);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}
