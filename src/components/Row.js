import React, { useState, useEffect } from "react";

import axios from "../api/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const img_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  useEffect(() => {
    const getMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };

    getMovies();
  }, [fetchUrl]);
  // console.log(movies);

  const opts = {
    width: "100%",
    height: "390px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleOnClickMovie = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((movieUrl) => {
          const urlParam = new URLSearchParams(new URL(movieUrl).search);
          const videoId = urlParam.get("v");
          settrailerUrl(videoId);
        })
        .catch((error) => console.log(error));
    }
  };
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
                onClick={() => handleOnClickMovie(movie)}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
