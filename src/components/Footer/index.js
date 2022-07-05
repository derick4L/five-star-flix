import { NavLink, useNavigate } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  let navigate = useNavigate();
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
        <img
          src="https://via.placeholder.com/70x70"
          alt="logo placeholder"
          onClick={() => navigate("/")}
        />
        <p>| © {year}</p>
      </>
    </>
  );
};
export default Footer;
