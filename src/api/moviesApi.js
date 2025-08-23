export const fetchMovies = async (query) => {
  const url = `https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=${query}&sort_by=date_added&order_by=desc&with_rt_ratings=false`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY, // stored in .env
      'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Failed to fetch movies");
    const data = await response.json();
    return data.data?.movies || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
