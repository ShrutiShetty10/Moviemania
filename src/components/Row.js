import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import requests from "./requests"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import CommentBox from "./CommentBox";
import SimpleRating from "./SimpleRating";
import RecommendationRow from "./recommendationsrow";

const base_url = "https://image.tmdb.org/t/p/original/";

let mov = "";
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
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


  let recommendationdata=[]
  const handleClick = (movie) => {
   
    //setState(movieid=movie.id)
    console.log(movie.id);
   var csrftoken=getCookie('XSRF-TOKEN')
   //console.log(csrftoken)
    //axios.post('http://127.0.0.1:8000/movie_id/apiview', movie.id) 
  //.then(res => console.log("Movie id posted"))

    const res=fetch('http://127.0.0.1:8000/movie_id/apiview',
    {
     
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'X-CSRFToken': csrftoken,
      },
     
      body:JSON.stringify({"movieid":movie.id})
    }).then((response)=>{
      console.log(response)
    }).catch(function(error){
      console.log("ERROR:",error)
    })
    
    //const res = fetch('http://127.0.0.1:8000/movie_id/');
    
      
      //console.log(res);
   axios.get('http://127.0.0.1:8000/recommendation/')
      .then((response)=>{
         const re={
            d:response.data,
            
        };
        recommendationdata.push(response);
        
         
        
        
      })
      
        console.log(recommendationdata);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      mov = movie;
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* posters */}
        {movies.map((movie) => (
          
          
          <img
            key={movie.id}
            onClick={() =>handleClick(movie)  }
            
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            
          />
          
        
        ))}
      </div>
      <div className="trailer">
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      
      {trailerUrl && <SimpleRating movie={mov} />}
      {trailerUrl && <CommentBox />} 
      {console.log(mov.id)}
      { trailerUrl && <RecommendationRow fetchUrl={'https://api.themoviedb.org/3/discover/movie?api_key=5cc337521ad87c248ab7713c157b84ae&language=en-US/movie/'+mov.id+'/recommendations'}/>}
      </div>
     
    </div>
  );
}

export default Row;
