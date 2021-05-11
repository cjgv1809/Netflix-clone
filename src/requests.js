const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc`,
};

export default requests;
