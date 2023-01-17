// import "./Posts.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CircularProgress,
  Typography,
  CardContent,
  ButtonGroup,
  CardActions,
} from "@mui/material";
import format from "date-fns/format";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios.get("http://localhost:3000/api/v1/posts").then((res) => {
        const posts = res.data.data;
        setPosts(posts);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="App">
      <main className="blog-input">
        <Typography variant="h2" component="h1">
          All posts
        </Typography>
        <div className="card-container">
          {loading ? (
            <CircularProgress />
          ) : posts.length === 0 ? (
            <h1>No posts</h1>
          ) : (
            posts.map((post) => {
              return (
                <Card
                  className="post__card"
                  key={post._id}
                  style={{ margin: "2rem", padding: "1rem" }}
                >
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      className="post__title"
                    >
                      {" "}
                      {post.title}
                    </Typography>

                    <Typography variant="h5" className="post__created-date">
                      Created:{" "}
                      {format(new Date(post.created_at), "MMM/dd/yyyy")}
                    </Typography>
                    <Typography variant="h5" className="post__edited-date">
                      Last Edited:
                      {format(new Date(post.edited_at), "MMM/dd/yyyy")}
                    </Typography>

                    <CardActions sx={{ marginTop: "1rem" }}>
                      <Button size="large" href={`/post/${post._id}`}>
                        {" "}
                        View Post
                      </Button>

                      <Button size="large" color="success">
                        Update
                      </Button>
                      <Button
                        size="large"
                        color="error"
                        onClick={() => {
                          let question = prompt(
                            "Are you sure you want to delete?"
                          );
                          if (question.toLowerCase().trim() === "yes") {
                            alert("Deleted");
                          } else {
                            alert("not delted");
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}

export default Posts;
