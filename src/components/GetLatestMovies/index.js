import { useState, useEffect } from "react";
import { Modal, Button } from "rsuite";
import axios from "axios";

import "./style.scss";

const GetLatestMovies = () => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(null);

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
        <div key={movie.id}>
          <div>{movie.title}</div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title}
            height="250px"
            width="auto"
            onClick={() => handleOpen()}
          />
        </div>
      ))}
      <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Selected movie details go here, along with form to post rating/comments */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default GetLatestMovies;
