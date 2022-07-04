import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Flix from "./routes/Flix";
import Main from "./routes/Main";
import Upcoming from "./routes/Upcoming";
import Playlists from "./routes/Playlists";
import Info from "./routes/Info";
import NotFound from "./routes/404";

import "./global.scss";

//add context for user authentication
//add context for data

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/flix" element={<Flix />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
