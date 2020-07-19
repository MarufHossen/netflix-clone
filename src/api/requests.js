const API_KEY = "3c15cf70b98077c4d8ab55b55be9ed6e";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchTrillerMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
};

export default requests;
