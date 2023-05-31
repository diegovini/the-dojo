import "./OnlineUsers.css";

import React from "react";
import { projectFirestore } from "../firebase/config";
import { useCollection } from "../hooks/useCollection";
import Avatar from "./Avatar";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");
  return (
    <div className="user-list">
      <h2>All users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            {user.online && <span className="online-users"></span>}
            {!user.online && <span className="offline-users"></span>}
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL}></Avatar>
          </div>
        ))}
    </div>
  );
}
