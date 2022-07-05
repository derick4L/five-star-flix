import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Flix from "./routes/Flix";
import Main from "./routes/Main";
import Upcoming from "./routes/Upcoming";
import Playlists from "./routes/Playlists";
import Info from "./routes/Info";
import NotFound from "./routes/404";
import Auth from "./routes/Auth";

import "./global.scss";

export const UserContext = createContext();

const App = () => {
  const [authUser, setAuthUser] = useState(
    localStorage.getItem("emailForSignIn")
  );

  return (
    <>
      <div className="App">
        <UserContext.Provider value={{ user: [authUser, setAuthUser] }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/flix" element={<Flix />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/info" element={<Info />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </div>
    </>
  );
};

export default App;
