import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  if (!movies.length) {
    return <p className="text-center text-gray-600">No movies found.</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
