import { format } from "date-fns";

const ArticleContent = ({ article }) => {
  const { title, author, topic, created_at, votes, article_img_url, body } =
    article;
  const formattedDate = format(new Date(created_at), "MMMM dd, yyyy");

  return (
    <article>
      <p className="article-topic">{topic}</p>
      <h2>{title}</h2>
      <div className="article-details">
        <p>{formattedDate}</p>
        <p>By {author}</p>
      </div>
      <img className="article-img" src={article_img_url} alt="" />
      <p className="article-body">{body}</p>
    </article>
  );
};
export default ArticleContent;
