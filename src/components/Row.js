import React, { useState, useEffect } from "react";

import axios from "../api/axios";

import "./Row.css";

const img_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };

    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${img_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;