import ArticleCard from "./ArticleCard";
import { fetchArticles } from "../../utils";
import "../css/ArticleList.css";

export default function ArticleList({ articles }) {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}
