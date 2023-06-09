import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { fetchCommentsByArticleId, fetchSingleArticle } from "../../utils";
import ArticleContent from "./ArticleContent";
import CommentList from "./CommentList";
import Error from "./Error";
import "../css/ArticlePage.css";
import ArticleVotes from "./ArticleVotes";
import PostComment from "./PostComment";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState({});
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((article) => {
        setCurrArticle(article);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  if (isLoading) {
    return <p>Loading .... </p>;
  }

  if (error) return <Error message={error.message}></Error>;

  if (Object.keys(currArticle).length === 0) return null;

  return (
    <section className="article-page">
      <ArticleContent article={currArticle} />
      <ArticleVotes article={currArticle} />
      <PostComment article_id={article_id} setComments={setComments} />
      <CommentList comments={comments} />
    </section>
  );
};
export default ArticlePage;
