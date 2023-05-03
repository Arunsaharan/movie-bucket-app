import React, { useEffect, useState } from "react";
import "./Home.css";
import MovieCard from "../commonComponents/MovieCard";
import HeroSection from "../HeroSection";
import Heading from "../commonComponents/Heading";
import Footer from "../commonComponents/Footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import Navbar from "../commonComponents/Navbar";
import { api_key } from "../../config/config";

const Home = () => {
  const [allMovies, setAllMovies] = useState();
  const [trendingMovie, setTrendingMovie] = useState();
  const [tvShows, setTvShows] = useState();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
    const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`;
    const tvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US`;

    const fetchAllMovies = async () => {
      const getMovies = await fetch(url);
      const jsonResponse = await getMovies.json();
      setAllMovies(jsonResponse.results);

      const getTrending = await fetch(trendingUrl);
      const jsonTrending = await getTrending.json();
      setTrendingMovie(jsonTrending.results);

      const getTvShows = await fetch(tvUrl);
      const jsonTvShows = await getTvShows.json();
      setTvShows(jsonTvShows.results);
    };

    fetchAllMovies();
  }, []);

  const trendingFour = trendingMovie && trendingMovie.slice(0, 6);
  const tvFour = tvShows && tvShows.slice(0, 6);

  return (
    <>
      <Navbar />
      <HeroSection allMovies={allMovies} />

      <div className="home-wrap">
        <Heading headingText="POPULAR MOVIES" />

        <div className="go-to-wrap">
          <MovieCard allMovies={allMovies} count={4} media_type="movie" />

          <button className="go-to-page">
            <Link to="/popular">
              <ArrowForwardIosIcon style={{ color: "#fff" }} fontSize="large" />
            </Link>
          </button>
        </div>

        <Heading headingText="TRENDING MOVIES" />

        <div className="go-to-wrap">
          <MovieCard allMovies={trendingFour} count={4} media_type="movie" />
          <button className="go-to-page">
            <Link to="/trending">
              <ArrowForwardIosIcon style={{ color: "#fff" }} fontSize="large" />
            </Link>
          </button>
        </div>

        <Heading headingText="TV SHOWS" />

        <div className="go-to-wrap">
          <MovieCard allMovies={tvFour} count={4} media_type="tv" />
          <button className="go-to-page">
            <Link to="/tv shows">
              <ArrowForwardIosIcon style={{ color: "#fff" }} fontSize="large" />
            </Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
