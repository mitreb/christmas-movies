import { fetchMovies } from './actions';
import MovieList from './components/MovieList';

export default async function Home() {
  const initialData = await fetchMovies(1);

  return (
    <main className="flex flex-col gap-10 px-8 py-16 sm:p-16">
      <h2 className="text-white text-3xl text-center sm:text-4xl">
        Explore Collection
      </h2>
      <MovieList initialData={initialData} />
    </main>
  );
}
