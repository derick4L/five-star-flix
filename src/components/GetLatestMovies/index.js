import { useState, useEffect } from "react";
import axios from "axios";

import "./style.scss";

const GetLatestMovies = () => {
  const [movies, setMovies] = useState([]);

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
      {movies ? (
        movies.map((movie) => (
          <div key={movie.id}>
            {/* make each card clickable,
             opens modal with pre-filled info: currentUser(authUser), movie title.
             provide input for userComment and rating. */}
            <>
              <div>{movie.title}</div>
              {/* <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.original_title}
                height="250px"
                width="auto"
              /> */}
            </>
          </div>
        ))
      ) : (
        <h3>Sorry about that, try again later</h3>
      )}
    </>
  );
};
export default GetLatestMovies;
