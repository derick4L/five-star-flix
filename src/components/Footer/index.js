import { NavLink } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <ul>
        {`${window.location.pathname}` === "/" ? null : (
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        )}
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
      <>
        <img src="https://via.placeholder.com/70x70" alt="logo placeholder" />
        <p>| © {year}</p>
      </>
    </>
  );
};
export default Footer;
