import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Create a New Post</h2>
      <form
        style={{
          border: "2px solid black",
          borderRadius: "8px",
          display: "grid",
          padding: "18px",
        }}
      >
        <label htmlFor="postTitle">
          <b>Title:</b>
        </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          style={{padding: "7px", borderRadius:"4px"}}
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">
          <b>Author:</b>
        </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}  style={{padding: "5px",  borderRadius:"4px"}}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">
          <b>Content:</b>
        </label>
        <textarea
          id="postContent"
          style={{padding: "5px",  borderRadius:"4px"}}
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />

        <Button
          style={{
            width: "max-content",
            color: "white",
            background: "blue",
            marginTop: "20px",
          }}
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Create Post
        </Button>
      </form>
    </section>
  );
};
