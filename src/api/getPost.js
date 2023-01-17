import axios from "axios";

export default function getPost(postId) {
  axios.get(`http://localhost:3000/api/v1/post/${postId}`).then((response) => {
    return response.data.data;
  });
}
