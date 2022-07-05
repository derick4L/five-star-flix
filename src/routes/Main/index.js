import Header from "../../components/Header";
import Footer from "../../components/Footer";

import GetLatestMovies from "../../components/GetLatestMovies";
import GetPopularMovies from "../../components/GetPopularMovies";
import GetHighlyRatedMovies from "../../components/GetHighlyRated";

import "./style.scss";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome!</h1>
        <p>
          Give your honest feedback on your favorite movies or build a list to
          share with friends!
        </p>
        <>
          <h2>In Theaters And Streaming</h2>
          <p>Have you seen these titles yet? </p>
          <GetLatestMovies />
        </>
        <>
          <h2>Popular</h2>
          <p>Trending titles</p>
          <GetPopularMovies />
        </>
        <>
          <h2>Highly Rated</h2>
          <p>Titles well received by viewers like you.</p>
          <GetHighlyRatedMovies />
        </>
      </main>
      <Footer />
    </>
  );
};
export default Main;
