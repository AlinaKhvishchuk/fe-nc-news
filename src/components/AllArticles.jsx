import { useEffect, useState, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchArticles } from "../../utils";
import ArticleCard from "./ArticleCard";
import ArticleList from "./ArticleList";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  if (!articles) return null;

  if (isLoading) {
    return <p>Loading .... </p>;
  }

  return (
    <section id="all-articles">
      <h2>All articles</h2>
      <ArticleList articles={articles} />
    </section>
  );
}

export default AllArticles;
