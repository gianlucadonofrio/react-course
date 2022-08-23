import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { HeroesRouters } from "../heroes";
import { PrivateRoute, PublicRoute } from "./index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      ></Route>

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRouters />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
