import { useState } from "react";
import { postComment } from "../../utils";
import "../css/PostComment.css";

const PostComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState({ username: "", body: "" });
  const [err, setErr] = useState(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    postComment(article_id, newComment)
      .then((newComment) => {
        setComments((currComments) => [newComment, ...currComments]);
        setNewComment({ username: "", body: "" });
        setErr(null);
      })
      .catch((err) => {
        console.log("NO INET");
        setErr(true);
      });
  };

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <legend>Post your comment</legend>
      <fieldset>
        <div className="input-wrapper">
          <label htmlFor="username">Your login:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={newComment.username}
            onChange={(evt) =>
              setNewComment({ ...newComment, username: evt.target.value })
            }
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="body">Add your comment:</label>
          <input
            type="text"
            name="body"
            id="body"
            value={newComment.body}
            onChange={(evt) =>
              setNewComment({ ...newComment, body: evt.target.value })
            }
          />
        </div>
        <button type="submit">Post</button>
      </fieldset>
      {err && <p>An error occurred. Please try again.</p>}
    </form>
  );
};

export default PostComment;
