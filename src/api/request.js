const requests ={
    fetchNowPlaying: "movie/now_playing",
    fetchNetflixOriginals:"/discover/tv?with_networks-213",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "/movie/top_rated",
    fetchActionMovies: "/discover/movie?with_genres-28",
    fetchComedyMovies:"/discover/movie?with_genres=35",
    fetchHorrorMovies: "/discover/movie?with_genres-27",
    fetchRomanceMovies:"/discover/movie?with_genres=10749", 
    fetchDocumentaries:"/discover/movie?with_genres=99",
    fetchMysteryMovies:"/discover/movie?with_genres=9648-",
    fetchDramaMovies:"/discover/movie?with_genres=18-",
    fetchScienceFictionMovies:"/discover/movie?with_genres=878",
    }

export default requests;