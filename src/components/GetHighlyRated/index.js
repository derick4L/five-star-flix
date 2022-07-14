import { useState, useEffect } from "react";
import axios from "axios";

import { Modal, Button } from "rsuite";

import "./style.scss";

const GetHighlyRatedMovies = () => {
  const [highlyRatedMovies, setHighlyRatedMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=149789180f4074d5b617a43dde18b858&language=en-US&page=1"
      )
      .then((res) => {
        setHighlyRatedMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [highlyRatedMovies]);

  return (
    <>
      {highlyRatedMovies ? (
        highlyRatedMovies.map((highlyRatedMovie) => (
          <div key={highlyRatedMovie.id}>
            <div>
              <p>{highlyRatedMovie.title}</p>
              {/* <img
                src={`https://image.tmdb.org/t/p/original/${highlyRatedMovie.poster_path}`}
                alt={highlyRatedMovie.original_title}
                height="250px"
                width="auto"
              /> */}
            </div>
            <Modal show={open} onHide={handleClose} id={highlyRatedMovie.id}>
              <Modal.Header>
                <Modal.Title>{highlyRatedMovie.title}</Modal.Title>
              </Modal.Header>
            </Modal>
            <Button onClick={() => handleOpen()}>Open</Button>
          </div>
        ))
      ) : (
        <h3>Sorry about that, try again later</h3>
      )}
    </>
  );
};
export default GetHighlyRatedMovies;
