import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import useStore from "../../Store/useStore.js";
import { useParams } from "react-router-dom";
import { File, Play, Star, Translate } from "react-bootstrap-icons";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import { Col, Container, Row } from "react-bootstrap";

const MovieDetails = () => {
  const { movies, loading } = useStore();
  const [movie, setMovie] = useState({});
  const [show, setShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (loading) return;
    const data = movies.find(
      (singleMovie) => singleMovie.show.id.toString() === id.toString()
    );
    setMovie(data?.show);
  }, [id, loading, movies]);
  return (
    <div className="main">
      {loading ? (
        <Loading />
      ) : (
        <Container className="py-4">
          <Row>
            <Col sm={12} md={4} lg={4}>
              <div className="p-3">
                <img
                  className="movie-image"
                  src={movie?.image?.original || movie?.image?.medium}
                  alt=""
                />
              </div>
            </Col>
            <Col sm={12} md={8} lg={8} className="d-flex align-items-center">
              <div className="mt-4">
                <h1>{movie?.name}</h1>
                <div className="small-info">
                  <div className="item">
                    <Translate />
                    <p>{movie?.language}</p>
                  </div>
                  <div className="item">
                    <Star />
                    <p>{movie?.rating?.average || "No Rating"}</p>
                  </div>
                  <div className="item">
                    <File />
                    <p>{movie?.type}</p>
                  </div>
                  <div className="item">
                    <Play />
                    <p>{movie?.status}</p>
                  </div>
                </div>
                <p className="summary">{movie?.summary}</p>
                <p>
                  More info at
                  <a
                    className="more-info"
                    href={movie?.officialSite || "https://google.com"}
                    target="blank"
                  >
                    {movie?.officialSite || "https://google.com"}
                  </a>
                </p>
                <h4>Last Premired</h4>
                <p>{movie?.premiered}</p>
                <h4>Next Show</h4>
                <p>
                  {movie?.schedule?.days[0]} at {movie?.schedule?.time}
                </p>
                <button onClick={() => setShow(true)} className="book">
                  Book Now
                </button>
                {show && <Modal setShow={setShow} movie={movie} />}
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MovieDetails;
