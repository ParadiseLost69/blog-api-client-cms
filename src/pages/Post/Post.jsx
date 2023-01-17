import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post() {
  const [currentPost, setCurrentPost] = useState({});
  const [loading, setLoading] = useState(false);

  //Find Params for fetch request [2]
  const parameters = window.location.pathname.split("/");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/post/${parameters[2]}`)
      .then((response) => {
        setCurrentPost(response.data);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Link to="/">
        <Button className="home-button button">Home</Button>
      </Link>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="full-post">
          <h1>{currentPost.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: currentPost.body }}></div>
        </div>
      )}
    </>
  );
}
