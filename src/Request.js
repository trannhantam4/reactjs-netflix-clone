const API_KEY = "e371fb2a1a98e5d18208fcff30ddd929";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with-gen=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with-gen=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with-gen=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-gen=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with-gen=99`,
};
export default requests;
//https://api.themoviedb.org/3/trending/all/week?api_key=e371fb2a1a98e5d18208fcff30ddd929&language=en-US
