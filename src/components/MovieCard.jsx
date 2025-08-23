import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow p-2 hover:scale-105 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
        alt={movie.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
      <p className="text-gray-600">{movie.year}</p>
    </div>
  );
}

export default MovieCard;
