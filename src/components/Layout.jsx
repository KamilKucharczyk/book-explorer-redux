import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <nav>
        <NavLink
          to={"/books"}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Books
        </NavLink>
        <NavLink
          to={"/favorites"}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Favorites
        </NavLink>
        <NavLink
          to={"/to-read"}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          To read
        </NavLink>
        <NavLink
          to={"/profile"}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Profile
        </NavLink>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <Outlet />
    </div>
  );
};
export default Layout;
