import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?title=${query}&country=us&show_type=movie&output_language=en`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result || []);
    } catch (err) {
      setError("Failed to fetch movies. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        🎬 Search Your Favourite Movie
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border p-2 rounded-l w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchMovies}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.tmdbId} movie={movie} />)
        ) : (
          !loading && (
            <p className="col-span-full text-center text-gray-600">
              No movies found
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
