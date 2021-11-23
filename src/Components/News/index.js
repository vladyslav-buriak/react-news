import { useEffect, useState } from "react";
import NewsList from "./NewsList";
import { Container } from "@mui/material";
import Loader from "../../UI/Loader";
import newsApi from "../../API/newsApi";
import useFetching from "../../hooks/useFetching";

const News = () => {
  const [news, setNews] = useState([]);
  const [fetchingPost, isLoading] = useFetching(async () => {
    const resp = await newsApi.showNews();
    setNews(resp);
  });

  async function fetchNews() {
    fetchingPost();
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div style={{ marginTop: "5rem" }}>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          news.map((n) => {
            return (
              <NewsList
                key={n.url}
                author={n.author}
                title={n.title}
                url={n.url}
                img={n.urlToImage}
              />
            );
          })
        )}
      </Container>
    </div>
  );
};
export default News;
