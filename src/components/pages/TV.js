import React, { useEffect, useState } from "react";
import "./TV.css";
import Banner from "../Banner";
import MovieCard from "../commonComponents/MovieCard";
import CommonButton from "../commonComponents/CommonButton";
import Footer from "../commonComponents/Footer";
import Navbar from "../commonComponents/Navbar";
import { api_key } from "../../config/config";

const TV = () => {
  const [allMovies, setAllMovies] = useState();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&page=${currentPage}`;
    const fetchTvSeries = async () => {
      const getMovies = await fetch(url);
      const jsonResponse = await getMovies.json();
      setAllMovies(jsonResponse.results);
    };
    fetchTvSeries();
  }, [currentPage]);

  console.log(allMovies);
  return (
    <>
      <Navbar />
      <Banner pageName="TV Shows" />

      <div className="home-wrap">
        <MovieCard allMovies={allMovies} media_type="tv" />
        <div>
          <CommonButton setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TV;
