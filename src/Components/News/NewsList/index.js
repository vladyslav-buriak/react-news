import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";

const UseStyles = makeStyles({
  newsList: {
    marginTop: "3rem",
    maxWidth: "500px",
    overflow: "hidden",
  },
  newsImg: {
    width: "100%",
  },
});
const NewsList = ({ author, title, url, img }) => {
  const classes = UseStyles();
  return (
    <Box className={classes.newsList} ke={title}>
      <Typography color="primary" variant="h6">
        {author}
      </Typography>
      <Typography component="p" paragraph={true}>
        {title}
      </Typography>
      <a className={classes.newsLink} href={url}>
        {url}
      </a>
      <Paper variant="outlined">
        <img src={img} className={classes.newsImg} alt={title} />
      </Paper>
    </Box>
  );
};
export default NewsList;
