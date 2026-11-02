import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { login } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/books");
  };
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default Login;
