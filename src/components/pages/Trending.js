import React, { useEffect, useState } from "react";
import "./Trending.css";
import Banner from "../Banner";
import MovieCard from "../commonComponents/MovieCard";
import CommonButton from "../commonComponents/CommonButton";
import Footer from "../commonComponents/Footer";
import Navbar from "../commonComponents/Navbar";
import { api_key } from "../../config/config";

const Trending = () => {
  const [allMovies, setAllMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&page=${currentPage}`;
      const response = await fetch(url);
      const jsonResponse = await response.json();

      setAllMovies(jsonResponse.results);
    };
    fetchTrending();
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <Banner pageName="Trending" />
      <div className="home-wrap">
        <MovieCard allMovies={allMovies} media_type="movie" />
        <div>
          <CommonButton setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trending;
