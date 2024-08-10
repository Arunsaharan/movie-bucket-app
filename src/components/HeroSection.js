import "./HeroSection.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { poster_large } from "../config/config";
import React, { useState } from "react";
import Button from "./commonComponents/Button";

const HeroSection = ({ allMovies }) => {
  const [index, setIndex] = useState(0);

  const filteredMovie = allMovies
    ? allMovies.filter((item) => {
        return item.title.length < 15;
      })
    : "movie array empty";

  function handleNext() {
    index === filteredMovie.length - 1 ? setIndex(0) : setIndex(index + 1);
  }
  function handlePrev() {
    index === 0 ? setIndex(filteredMovie.length - 1) : setIndex(index - 1);
  }

  let movieName = filteredMovie[index];

  const description = movieName.overview;

  let youtubeSearchUrl = `https://www.youtube.com/results?search_query=${movieName.title}`;

  return (
    <div
      style={{
        background:
          movieName.backdrop_path &&
          `url(${poster_large}${movieName.backdrop_path})`,
        maxWidth: "100%",
      }}
      className="hero-wrap-outer"
    >
      <div
        className="hero-wrap-inner"
        style={{
          background: `linear-gradient(90deg, rgb(39 40 41) 0%, rgb(39 40 41) 30%, rgba(83, 100, 141, 0) 100%)`,
        }}
      >
        <button className="prev-btn" aria-label="previous" onClick={handlePrev}>
          <ArrowBackIosIcon className="prev-btn-inner" />
        </button>
        <div className="movie-info-wrap ">
          <div className="movie-name">{movieName.title}</div>
          <div className="movie-date">
            {movieName.release_date && movieName.release_date.substring(0, 4)}
          </div>
          <div className="movie-lang">
            Language: {movieName.original_language}
          </div>
          <div className="movie-description">
            {description && description.substring(0, 153)}...{" "}
          </div>
          <a href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer">
            <Button content="Watch Trailer" />
          </a>
        </div>
        <button className="next-btn" aria-label="next" onClick={handleNext}>
          <ArrowForwardIosIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
