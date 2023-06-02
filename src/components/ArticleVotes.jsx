import { useState } from "react";
import { patchArticleVotes } from "../../utils";
const ArticleVotes = ({ article }) => {
  const { article_id, votes } = article;
  const [votesChange, setVotesChange] = useState(0);
  const incVotes = () => {
    setVotes((prevVotes) => currVotes + 1);
    patchArticleVotes(article_id).then((article) => {});
  };

  return (
    <div>
      <button onClick={incVotes}>Vote Up</button>
      <button onClick={decVotes}>Vote Down</button>
      <span>{votes + votesChange}</span> {/* Display the vote count */}
    </div>
  );
};

export default ArticleVotes;
