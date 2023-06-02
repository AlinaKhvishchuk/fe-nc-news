import { useState } from "react";
import { patchArticleVotes } from "../../utils";
const ArticleVotes = (article) => {
  const { article_id, title, topic, created_at, article_img_url } = article;
  const [votesChange, setVotesChange] = useState(0);
  const incVotes = () => {
    setVotes((prevVotes) => currVotes + 1);
    patchArticleVotes(article_id);
  };
};

export default ArticleVotes;
