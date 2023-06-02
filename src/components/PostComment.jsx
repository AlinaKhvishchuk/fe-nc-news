import { useState } from "react";
import { postComment } from "../../utils";

const PostComment = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState({ username: "", body: "" });
  const handleSubmit = (evt) => {
    evt.preventDefault();
    postComment(article_id, newComment).then((newComment) => {
      setComments((currComments) => [newComment, ...currComments]);
    });
  };

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Post your comment</legend>
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          value={newComment.username}
          onChange={(evt) =>
            setNewComment({ ...newComment, username: evt.target.value })
          }
        />
        <label htmlFor="body"></label>
        <input
          type="text"
          name="body"
          id="body"
          value={newComment.body}
          onChange={(evt) =>
            setNewComment({ ...newComment, body: evt.target.value })
          }
        />
      </fieldset>
      <button type="submit">Post</button>
    </form>
  );
};

export default PostComment;
