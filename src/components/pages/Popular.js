import React, { useEffect, useState } from "react";
import "./Popular.css";
import MovieCard from "../commonComponents/MovieCard";
import CommonButton from "../commonComponents/CommonButton";
import Banner from "../Banner";
import Navbar from "../commonComponents/Navbar";
import { api_key } from "../../config/config";

const Popular = () => {
  const [allMovies, setAllMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${currentPage}`;
    const fetchAllMovies = async () => {
      const getMovies = await fetch(url);
      const jsonResponse = await getMovies.json();
      setAllMovies(jsonResponse.results);
    };
    fetchAllMovies();
  }, [currentPage]);
  return (
    <div>
      <Navbar />
      <Banner pageName="Popular" />
      <div className="home-wrap">
        <MovieCard allMovies={allMovies} media_type="movie" />
        <div>
          <CommonButton setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
