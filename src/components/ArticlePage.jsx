import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { fetchSingleArticle } from "../../utils";
import "../css/ArticlePage.css";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSingleArticle(article_id)
      .then((article) => {
        setCurrArticle(article);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading .... </p>;
  }

  if (Object.keys(currArticle).length === 0) return null;

  const { title, author, topic, created_at, votes, article_img_url, body } =
    currArticle;
  const formattedDate = format(new Date(created_at), "MMMM dd, yyyy");
  return (
    <article>
      <p className="article-topic">{topic}</p>
      <h2>{title}</h2>
      <div className="article-details">
        <p>{formattedDate}</p>
        <p>By {author}</p>
        <p>Votes {votes}</p>
      </div>
      <img className="article-img" src={article_img_url} alt="" />
      <p className="article-body">{body}</p>
    </article>
  );
};
export default ArticlePage;
