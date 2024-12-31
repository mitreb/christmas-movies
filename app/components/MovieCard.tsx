import Image from 'next/image';
import { useState } from 'react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [imgSrc, setImgSrc] = useState(movie.image);
  const fallbackImgSrc = '/fallback-image.svg';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative w-full bg-gray-800 pt-6">
      <div className="relative w-[140px] h-[209px] mx-auto">
        <Image
          src={imgSrc}
          alt={movie.title}
          width={140}
          height={209}
          className="object-cover"
          onError={() => setImgSrc(fallbackImgSrc)}
        />
      </div>

      <div className="flex flex-col gap-3 py-4 px-6 h-[300px]">
        <h2 className="font-bold text-xl w-full text-center text-gray-100">
          {movie.title}
        </h2>
        <div className="bg-gray-700 px-2 py-1 rounded-sm w-max mx-auto">
          <p className="text-sm font-bold text-gray-100">{movie.year}</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              src="/duration.svg"
              alt="duration"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base font-bold text-red-500">
              {movie.runtime} min
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-yellow-500">
              {movie.imdbRating}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-200">
          <span className="font-bold">Stars: </span>
          {movie.stars}
        </p>

        <p className="text-gray-200 text-base line-clamp-3">
          {movie.description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
