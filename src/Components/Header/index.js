import { AppBar, Container } from "@mui/material";
import Nav from "./Nav";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
const UseStyles = makeStyles({
  title:{textAlign:"left",flexGrow:"1"}
})
const Header = () => {
  const classes = UseStyles();
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" component="div">
            News App
          </Typography>
          <Nav />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
