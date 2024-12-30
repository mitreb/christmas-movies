import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="bg-gray-800">
      <h2 className="font-bold text-center text-gray-100">{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
