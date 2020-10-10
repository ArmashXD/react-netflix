import React, { useState, useEffect } from "react";
import axios from "../requests/axios";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// base Url for image
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/youtube_player_demo,
      autoplay: 1,
    },
  };

  // A snippet of code which run based on a specific condition/variable
  useEffect(() => {
    //if [], run once whenthe row loads, and dont run it again
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  // console.table(movies);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      {/* container-> posters */}
      <div className="row_posters">
        {/* several row_poster(s) */}
        {/* Mapping through setMovies */}
        {movies.map((movie) => (
          <img
            className={`row_poster  ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
