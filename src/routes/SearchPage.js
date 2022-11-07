import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/SearchPage.css';
import { useDebounce } from '../hooks/useDebounce';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  //console.log('useLacation()', useLocation());
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm,500)
  console.log('searchTerm',searchTerm)

  useEffect(() => {
    if(searchTerm){
      fetchSearchMovie(searchTerm);
    }
  },[searchTerm]);

  const fetchSearchMovie = async(searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`);
        //console.log("request",request)
        setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  }

    const renderSearchResults = () => {
      return searchResults.length > 0 ? (
        <section className='search_container'>
          {searchResults.map(movie => {
            if(movie.backdrop_path !== null && movie.media_type !== "person"){
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <>
                <div className='movie__title'>
                  <ul>
                    {}
                  </ul>
                </div>
                <div className='movie' key={movie.id}>
                    <div onClick={() => navigate(`/${movie.id}`)}
                    className='movie__column-poster'>
                        <img src={movieImageUrl} 
                            alt={movie.title || movie.name || movie.original_name}
                            className="movie__poster" />
                            {/* */}
                    </div>        
                  <h2>{movie.title || movie.name || movie.original_name}</h2>
                </div>
                </>
              )
            }
          })}
        </section>
      ) : (
        <section className='no_results'>
          <div className='no_results__text'>
            <p>
              찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      )
    }

    return renderSearchResults();
}

export default SearchPage