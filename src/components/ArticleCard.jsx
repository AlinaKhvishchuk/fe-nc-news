import { useEffect, useState } from "react";
import "../css/ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { article_id, title, topic, created_at, article_img_url } = article;

  return (
    <li key={article_id}>
      <Link to={`/articles/${article_id}`}>
        <img className="article-img" src={article_img_url} alt="" />
        <h3>{title}</h3>
        <p>{topic}</p>
        <p>{created_at}</p>
      </Link>
    </li>
  );
};

export default ArticleCard;
