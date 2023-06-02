import CommentCard from "./CommentCard";
import "../css/CommentList.css";

const CommentList = ({ comments }) => {
  return (
    <section className="comments">
      <ul className="comment-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentList;
