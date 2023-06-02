import { format } from "date-fns";

import "../css/CommentCard.css";

const CommentCard = ({ comment }) => {
  const { comment_id, votes, created_at, author, body, article_id } = comment;
  const formattedDate = format(new Date(created_at), "MM-dd-yyyy");
  return (
    <li key={comment_id} className="comment-item">
      <div className="comment-details">
        <p className="comment-author">{author}</p>
        <p className="comment-date">{formattedDate}</p>
      </div>
      <p className="comment-body">{body}</p>
      <div className="comment-votes">
        <p>Votes: {votes}</p>
      </div>
    </li>
  );
};

export default CommentCard;
