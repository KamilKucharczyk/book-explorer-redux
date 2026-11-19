import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../features/auth/selectors";

const NotFound = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleClick = () => {
    isLoggedIn ? navigate("/books") : navigate("/login");
  };

  return (
    <div>
      <h1>404 - Page not found</h1>
      <button type="button" onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};
export default NotFound;
