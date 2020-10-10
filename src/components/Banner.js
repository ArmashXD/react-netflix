import React, { useState, useEffect } from "react";
import axios from "../requests/axios";
import requests from "../requests/requests";
import "../css/Banner.css";

//base url for image
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //getting call
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[Math.floor(Math.random() * req.data.results.length)]
      );
      //Random Number
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* Background Image */}
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* descriptions */}
        <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
