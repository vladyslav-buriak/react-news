import About from "../Components/About";
import News from "../Components/News";
import Profile from "../Components/Profile";
import Main from "../Components/Main";
import LoginPage from "../Components/Login";
import { Navigate } from "react-router";


export const privatRoutes = [
  { path: "/", component: <Main />, exact: true },
  { path: "/news", component: <News />, exact: true },
  { path: "/about", component: <About />, exact: true },
  { path: "/profile", component: <Profile />, exact: true },
  { path: "*", component: <Navigate to="/news" />, exact: null },

];

export const publicRoutes = [
  { path: "/", component: <Main />, exact: true },
  { path: "/news", component: <News />, exact: true },
  { path: "/about", component: <About />, exact: true },
  { path: "/profile", component: <Navigate to="/login" />, exact: true },
  { path: "/login", component: <LoginPage/>, exact: true },
  { path: "*", component: <Navigate to="/news" />, exact: null },
];

