import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../../utils";
import { useEffect, useState, useContext } from "react";
import "../css/ArticleList.css";

export default function ArticleList({ articles }) {
  return (
    <ul className="article-list">
      {articles.map(
        ({ title, topic, created_at, article_img_url, article_id }) => {
          return (
            <ArticleCard
              key={article_id}
              article_id={article_id}
              title={title}
              topic={topic}
              created_at={created_at}
              article_img_url={article_img_url}
            />
          );
        }
      )}
    </ul>
  );
}
