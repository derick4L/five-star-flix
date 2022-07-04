import { NavLink } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <>
      {/* Add Logo and search feature here */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/flix">Flix</NavLink>
        </li>
        <li>
          <NavLink to="/playlists">Playlists</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Header;
