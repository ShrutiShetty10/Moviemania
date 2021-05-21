import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";



const base_url = "https://image.tmdb.org/t/p/original/";

let mov = "";

function RecommendationRow({ row, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const opts = {
    height: "400px",
    width: "98.5%",
    playVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie)
    /*axios.post('http://127.0.0.1:8000/movie_id/', movie.id) 
    .then(res => console.log("Movie id posted"))
      //console.log(movie.id)
      fetch('http://127.0.0.1:8000/recommendation/')
      .then(response=>response.json())
      .then(data=>
        console.log("Its happening"))*/

      
  };

  return (
    <div className="row">
      <h2>Our Special Recommendations</h2>

      <div className="row_posters">
        {/* posters */}
        {movies.map((movie) => (
           
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      
    </div>
  );
}

export default RecommendationRow;
