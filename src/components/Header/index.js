import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../../App";

import "./style.scss";

const Header = () => {
  let navigate = useNavigate();

  const { user } = useContext(UserContext);
  const [authUser, setAuthUser] = user;

  const signOut = () => {
    localStorage.removeItem("emailForSignIn");
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    let currentUser = localStorage.getItem("emailForSignIn");
    setAuthUser(currentUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return (
    <>
      <>
        <img
          src="https://via.placeholder.com/150x70"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </>
      {/* Add Logo and search feature here */}
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
        {authUser === null ? (
          <li>
            <NavLink to="/auth">Sign In</NavLink>
          </li>
        ) : (
          <li
            onClick={() =>
              window.confirm("Are you sure you want to sign out?") && signOut()
            }
          >
            Sign Out
          </li>
        )}
      </ul>
    </>
  );
};
export default Header;
