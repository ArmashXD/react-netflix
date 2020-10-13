import React from "react";
import "./css/App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./requests/requests";

//key = https://api.themoviedb.org/3/movie/550?api_key=a0f172841e95f12e34813167e6c854a8
function App() {


  return (
    <div className="App">

      {/* Nav */}
     <Nav /> 
      {/* Banner */}
     <Banner />
      {/* Rows/posters */}
      <Row
        title="Netflix originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
    </div>
  );

}

export default App;
