import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles({
  mainSubtitle: {
    color: "#999999",
  },
});
const Main = () => {
  const classes = UseStyles();
  return (
    <div>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          gutterBottom
          className={classes.mainTitle}
          mt="10rem"
          mb="3rem"
          variant="h3"
          component="h1"
        >
          Search worldwide news with code
        </Typography>
        <Typography
          gutterBottom
          className={classes.mainSubtitle}
          variant="h6"
        >
          Locate articles and breaking news headlines from news
        </Typography>
        <Typography
          className={classes.mainSubtitle}
          variant="h6"
        >
          sources and blogs across the web with our JSON API
        </Typography>
      </Container>
    </div>
  );
};
export default Main;
