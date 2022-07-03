import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Flix from "./routes/Flix";
import Main from "./routes/Main";
import Upcoming from "./routes/Upcoming";
import Playlists from "./routes/Playlists";

import "./global.scss";

function App() {
  return (
    <>
      <main className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/flix" element={<Flix />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/playlists" element={<Playlists />} />
          </Routes>
        </Router>
      </main>
      <footer>{/* footer component goes here */}</footer>
    </>
  );
}

export default App;
