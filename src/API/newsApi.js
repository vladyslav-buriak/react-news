import React from "react";
import axios from "axios";

class newsApi extends React.Component {
  static async showNews() {
    const resp = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=ua&apiKey=db3fa98c0cc24a128c2114911621e28b"
    );
    const articles = await resp.data.articles;
    return articles;
  }
}

export default newsApi;
