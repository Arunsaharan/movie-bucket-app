import React, { useEffect, useState } from "react";
import "./Search.css";
import Banner from "../Banner";
import MovieCard from "../commonComponents/MovieCard";
import CommonButton from "../commonComponents/CommonButton";
import Navbar from "../commonComponents/Navbar";
import Footer from "../commonComponents/Footer";
import { api_key } from "../../config/config";

const Search = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchText, setSearchText] = useState("");
  const [submitBtn, setSubmitBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  function handleSubmit(e) {
    setSubmitBtn(!submitBtn);
    e.preventDefault();
  }
  function handleChange(e) {
    setSearchText(e.target.value);
  }
  function handleClick() {
    setSearchText("");
    clearTimeout();
  }

  useEffect(() => {
    const fetchSearchTxt = async () => {
      // eslint-disable-next-line
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}&page=${currentPage}`;
      const response = await fetch(url);
      const jsonResponse = await response.json();

      setSearchedMovie(jsonResponse.results);
    };

    fetchSearchTxt();
    // eslint-disable-next-line
  }, [submitBtn]);

  return (
    <>
      <Navbar />
      <Banner pageName="Search" />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="input-tab"
          type="text"
          value={searchText}
          onChange={handleChange}
          placeholder="Enter Name Here"
        />
        <button
          className="search-btn"
          type="submit"
          onClick={() => setTimeout(handleClick, 10)}
        >
          Search
        </button>
      </form>
      <MovieCard allMovies={searchedMovie} media_type="movie" />
      {currentPage > 1 && <CommonButton setCurrentPage={setCurrentPage} />}
      <Footer />
    </>
  );
};

export default Search;
