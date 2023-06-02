import { useState } from "react";
import { patchArticleVotes } from "../../utils";
import "../css/ArticleVotes.css";
const ArticleVotes = ({ article }) => {
  const { article_id, votes } = article;
  const [votesChange, setVotesChange] = useState(0);
  const incVotes = () => {
    setVotesChange((currVotes) => currVotes + 1);
    patchArticleVotes(article_id, 1).catch((err) => {
      setVotesChange((currVotes) => currVotes - 1);
    });
  };
  const decVotes = () => {
    setVotesChange((currVotes) => currVotes - 1);
    patchArticleVotes(article_id, -1).catch((err) => {
      setVotesChange((currVotes) => currVotes + 1);
    });
  };

  return (
    <div className="votes">
      <div className="button-vote">
        <button onClick={incVotes}>Like</button>
        <button onClick={decVotes}>Dislike</button>
      </div>
      <span>Total votes: {votes + votesChange}</span>
    </div>
  );
};

export default ArticleVotes;
