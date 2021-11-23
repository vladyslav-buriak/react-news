import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../../context";
import { privatRoutes, publicRoutes } from "../../router";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <>
      {isAuth ? (
        <Routes>
          {privatRoutes.map((r) => (
            <Route
              key={r.path}
              element={r.component}
              path={r.path}
              exact={r.exact}
            />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((r) => (
            <Route
              key={r.path}
              element={r.component}
              path={r.path}
              exact={r.exact}
            />
          ))}
        </Routes>
      )}
    </>
  );
};
export default AppRouter;
