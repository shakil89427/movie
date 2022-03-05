import React from "react";
import "./AllMovies.css";
import useStore from "../../Store/useStore";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const AllMovies = () => {
  const { movies, loading } = useStore();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="header">Book your desire Movie Ticket</h2>
          <div className="movies-maindiv">
            {movies.map((movie) => (
              <div key={movie.show.id} className="movie-div">
                <div className="allmovie-imgdiv">
                  <img
                    className="allmovie-img"
                    src={movie.show.image.medium}
                    alt="movie_logo"
                  />
                </div>
                <h3 className="movies-name">{movie.show.name}</h3>
                <div className="genres">
                  {movie.show.genres.map((genre) => (
                    <p key={genre}>{genre}</p>
                  ))}
                </div>
                <p>Language : {movie.show.language}</p>
                <p>Ratings : {movie.show.rating.average || "No Ratings"}</p>
                <Link to={`moviedetails/${movie.show.id}`}>
                  <button>Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AllMovies;
