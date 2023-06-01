import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { fetchCommentsByArticleId, fetchSingleArticle } from "../../utils";
import ArticleContent from "./ArticleContent";
import CommentList from "./CommentList";
import "../css/ArticlePage.css";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState({});
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((article) => {
        setCurrArticle(article);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
    });
  });

  if (isLoading) {
    return <p>Loading .... </p>;
  }

  if (Object.keys(currArticle).length === 0) return null;

  return (
    <>
      <ArticleContent article={currArticle} />
      <CommentList comments={comments} />
    </>
  );
};
export default ArticlePage;
