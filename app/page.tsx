import { fetchMovies } from './actions';
import MovieList from './components/MovieList';

export default async function Home() {
  const initialData = await fetchMovies(1);

  return (
    <main>
      <h2>Explore Collection</h2>
      <MovieList initialData={initialData} />
    </main>
  );
}
