import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { makeStyles } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
const UseStyles = makeStyles({
  formLogin: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    marginTop: "6rem",
    maxWidth: "400px",
  },
  loginInput: {
    maxWidth: "300px",
    width: "100%",
  },
  loginBtn: {
    "&.MuiButton-root": {
      marginTop: "1rem",
    },
  },
});
const LoginPage = () => {
  const classes = UseStyles();
  const { setIsAuth } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState(false);
  const login = (e) => {
    e.preventDefault();

    if (name === "" || name !== "Admin") {
      setErrorName(true);
    } else if (password === "" || password !== "12345") {
      setErrorName(true);
    } else {
      setIsAuth(true);
      localStorage.setItem("loggedin", "true");
    }
  };
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h6" component="h3" display>
          Login
        </Typography>
        <form className={classes.formLogin} onSubmit={login}>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={classes.loginInput}
            id="login"
            label="Login"
            type="login"
            margin="dense"
            error={errorName}
            helperText="Incorrect entry."
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={classes.loginInput}
            id="pas"
            label="Password"
            type="password"
            margin="dense"
            error={errorName}
            helperText="Incorrect entry."
          />
          <Button
            type="submit"
            className={classes.loginBtn}
            variant="contained"
            endIcon={<LoginIcon />}
          >
            Enter
          </Button>
        </form>
      </Box>
    </Container>
  );
};
export default LoginPage;
