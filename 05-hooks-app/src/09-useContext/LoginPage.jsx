import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-primary" aria-label="btnSetUser" onClick={()=>{
        setUser({
          id: 1,  
          name: "Juan",
          email: "gian.dooo@gmail.com"
        });

      }}>Set user</button>
    </>
  );
};
