import { Button, Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../context";
import { makeStyles } from "@mui/styles";
const UseStyles = makeStyles({
  wrappTabs: {
    display: "flex",
    alignItems: "center",
  },
  tab: {
    fontSize: 10,
    "&.MuiTab-root": {
      fontSize: "0.75rem",
      color: "#fff",
    },
    "&.Mui-selected": {
      color: "#fff",
    },
  },
});
const Nav = () => {
  const classes = UseStyles();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const routes = ["/", "/news", "/about", "/profile"];
  const url = useLocation();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("loggedin");
    url.pathname = "/login";
  };

  return (
    <Box className={classes.wrappTabs}>
      <Tabs
        className={classes.tabs}
        textColor="inherit"
        indicatorColor="secondary"
        value={url.pathname !== "/login" ? url.pathname : false}
      >
        <Tab
          className={classes.tab}
          label="Main"
          value={routes[0]}
          component={Link}
          to={routes[0]}
        />
        <Tab
          className={classes.tab}
          label="News"
          value={routes[1]}
          component={Link}
          to={routes[1]}
        />
        <Tab
          className={classes.tab}
          label="About"
          value={routes[2]}
          component={Link}
          to={routes[2]}
        />
        <Tab
          className={classes.tab}
          label="Profile"
          value={routes[3]}
          component={Link}
          to={routes[3]}
        />
      </Tabs>
      {isAuth ? (
        <Button
          sx={{ fontSize: "0.75rem", height: "30px" }}
          variant={"contained"}
          onClick={logout}
          value={routes[4]}
        >
          Выйти
        </Button>
      ) : (
        <Button
          sx={{ fontSize: "0.75rem", height: "30px" }}
          component={Link}
          to={"/login"}
          variant={"contained"}
          color="primary"
        >
          Login
        </Button>
      )}
    </Box>
  );
};

export default Nav;
