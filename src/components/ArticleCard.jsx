import { useEffect, useState } from "react";
import "../css/ArticleCard.css";

const ArticleCard = ({
  article_id,
  title,
  topic,
  created_at,
  article_img_url,
}) => {
  return (
    <li key={article_id}>
      <img className="article-img" src={article_img_url} alt="" />
      <h3>{title}</h3>
      <p>{topic}</p>
      <p>{created_at}</p>
    </li>
  );
};

export default ArticleCard;
