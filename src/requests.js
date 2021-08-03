const api_key="77b7717a9faed8fe4446037781c7d473";

const requests={
    fetchTreanding:`trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`,
}
export default requests
