import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import "./CreatePost.css";
import { Converter } from "showdown";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [previewBody, setPreviewBody] = useState("");

  const converter = new Converter({ smoothLivePreview: true });

  function handleTitleChange(e) {
    const { value } = e.target;
    setTitle(value);
  }

  function handleBodyChange(e) {
    const { value } = e.target;
    setBody(value);
  }

  useEffect(() => {
    const preview = converter.makeHtml(body);
    setPreviewBody(preview);
    // eslint-disable-next-line
  }, [body]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/post", {
        title: title,
        body: body,
      })
      .then((res) => {
        console.log(res);
        setBody("");
        setTitle("");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="create-post__container">
      <main className="create">
        <h1 className="create-post__title">Create a Post</h1>
        <form className="inputs">
          <TextField
            onChange={handleTitleChange}
            required
            className="title-input"
            name="title"
            id="title"
            value={title}
            label="Title"
            variant="outlined"
          />
          <TextField
            multiline
            label="Body"
            required
            value={body}
            rows={10}
            onChange={handleBodyChange}
            className="body-input"
            name="body"
            id="body"
          ></TextField>
          <Button
            type="submit"
            disabled={!title || !body ? true : false}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </Button>
        </form>
      </main>
      <aside className="preview">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: previewBody }}></div>
      </aside>
    </div>
  );
}
