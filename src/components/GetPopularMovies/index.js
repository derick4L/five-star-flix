import { useState, useEffect } from "react";
import axios from "axios";

import "./style.scss";

const GetPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=149789180f4074d5b617a43dde18b858&language=en-US&page=1"
      )
      .then((res) => {
        setPopularMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [popularMovies]);

  return (
    <>
      {popularMovies ? (
        popularMovies.map((popularMovie) => (
          <div key={popularMovie.id}>
            <>
              <div>{popularMovie.title}</div>
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
export default GetPopularMovies;
