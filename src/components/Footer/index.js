import { NavLink } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <>
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
        <li>
          <NavLink to="/info">Info</NavLink>
        </li>
      </ul>
      {/* Logo goes here */}
    </>
  );
};
export default Footer;
