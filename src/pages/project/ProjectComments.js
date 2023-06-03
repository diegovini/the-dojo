import { useState } from "react";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ProjectComments() {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoUrl: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };
    console.log(commentToAdd);
    setNewComment("");
  };

  return (
    <div className="project-comments">
      <h4>Project Comments</h4>
      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
          <button className="btn">Add comment</button>
        </label>
      </form>
    </div>
  );
}
