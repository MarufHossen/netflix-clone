import React from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./api/requests";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row
        title="Science Fiction"
        fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="Thriller" fetchUrl={requests.fetchTrillerMovies} />
      <Row title="Crime" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
