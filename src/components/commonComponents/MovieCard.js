import "./MovieCard.css";
import { image_small } from "../../config/config";
import * as React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ allMovies, media_type, count }) => {
  const noOfMovie = allMovies && allMovies.slice(0, count);

  return (
    <div className="movie-card-outer-wrap">
      {noOfMovie &&
        noOfMovie.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/singlemovie/${movie.id}`}
              state={{ media_type: `${media_type}` }}
            >
              <div className="movie-card-inner-wrap">
                <div className="movie-img-wrap">
                  <img
                    className="movie-img"
                    src={
                      movie.poster_path
                        ? `${image_small}${movie.poster_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    }
                    alt={movie.title || movie.name}
                  />
                </div>
                <h1>{movie.title ? movie.title : movie.name}</h1>

                <div className="movie-card-bottom">
                  <h3>{media_type === "tv" ? "TV" : "Movie"}</h3>
                  <h3>
                    {movie.vote_average &&
                      (movie.vote_average.toFixed(1) || "0")}
                  </h3>
                  <h3>
                    {movie.release_date
                      ? movie.release_date
                      : movie.first_air_date}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

MovieCard.defaultProps = {
  count: 10020,
};

export default MovieCard;
