import React, { useEffect, useState } from "react";
import "./SingleMovieDetails.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { poster_large } from "../../config/config";
import Button from "../commonComponents/Button";
import Navbar from "../commonComponents/Navbar";
import Footer from "../commonComponents/Footer";
import { api_key } from "../../config/config";

const SingleMovieDetails = () => {
  const [singleMovie, setSingleMovie] = useState();
  const { id } = useParams();
  const location = useLocation();
  // console.log("location: " + location);
  const { media_type } = location.state;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${api_key}&language=en-US`;
    const fetchSingleMovie = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();

      setSingleMovie(jsonResponse);
    };
    fetchSingleMovie();
  }, [id, media_type]);

  console.log(singleMovie);

  return (
    <>
      <Navbar />
      {singleMovie && (
        <div className="single-movie-wrap home-wrap">
          <h1 className="movie-name">
            {singleMovie.title || singleMovie.name}
          </h1>
          <h1 className="movie-tagline">{singleMovie.tagline}</h1>
          <div className="movie-poster">
            <Link to={`${singleMovie.homepage}`}>
              <img
                src={
                  singleMovie.backdrop_path
                    ? `${poster_large}${singleMovie.backdrop_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                }
                alt="Banner"
              />
            </Link>
          </div>
          {singleMovie.genres &&
            singleMovie.genres.map((item) => {
              return (
                <span key={item.id} className="movie-genres">
                  {item?.name}
                </span>
              );
            })}
          <p className="movie-overview extra-data">
            Overview:{"  "} {singleMovie.overview}{" "}
          </p>
          <h3 className="movie-status extra-data ">
            Status:{"  "} {singleMovie.status}{" "}
          </h3>
          <h3 className="movie-released-on extra-data">
            Released On:{" "}
            {singleMovie.release_date || singleMovie.first_air_date}
          </h3>
          <h3 className="movie-rating extra-data">
            Rating:{"  "} {singleMovie.vote_average}
          </h3>
          <h3 className="movie-duration extra-data">
            {singleMovie.runtime
              ? ` Duration: ${singleMovie.runtime} Min`
              : `Episodes: ${singleMovie.number_of_episodes}`}
          </h3>
          <Link to={`${singleMovie.homepage}`}>
            <Button content="Know More" />
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingleMovieDetails;
