import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "rsuite";
import axios from "axios";

import "./style.scss";
import PostReviewForm from "../PostReviewForm";

const GetLatestMovies = ({ user }) => {
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const [selectedMovieData, setSelectedMovieData] = useState({
    open: false,
    movieTitle: null,
    moviePoster: null,
    movieRating: null,
    movieComment: null,
  });

  const handleClose = () => {
    selectedMovieData.open = false;
    selectedMovieData.movieTitle = null;
    selectedMovieData.moviePoster = null;
    selectedMovieData.movieRating = null;
    selectedMovieData.movieComment = null;
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=149789180f4074d5b617a43dde18b858&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movies]);

  return (
    <>
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() =>
            setSelectedMovieData({
              open: true,
              movieTitle: movie.original_title,
              moviePoster: movie.poster_path,
              movieRating: movie.vote_average,
              movieComment: "",
            })
          }
        >
          <div>{movie.title}</div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title}
            height="250px"
            width="auto"
          />
        </div>
      ))}
      {selectedMovieData.open ? (
        <Modal open={selectedMovieData.open} onClose={handleClose}>
          <Modal.Header>{selectedMovieData.movieTitle}</Modal.Header>
          <Modal.Body>
            <div>{selectedMovieData.movieRating}</div>
            {user === undefined || user === null ? (
              <a
                onClick={() => {
                  navigate("/auth");
                }}
              >
                click me to rate and comment on this film
              </a>
            ) : (
              <PostReviewForm />
            )}
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
};
export default GetLatestMovies;
