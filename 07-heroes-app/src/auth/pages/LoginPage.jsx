import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  const onLoginUser = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    onLogin("Gianluca");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLoginUser}>
        Login
      </button>
    </div>
  );
};
