import "../css/CommentCard.css";

const CommentCard = ({ comment }) => {
  const { comment_id, votes, created_at, author, body, article_id } = comment;
  return (
    <li key={comment_id} className="comment-item">
      <div className="comment-details">
        <p className="comment-author">{author}</p>
        <p className="comment-date">{created_at}</p>
      </div>
      <p className="comment-votes">{votes}</p>
      <p className="comment-body">{body}</p>
    </li>
  );
};

export default CommentCard;
