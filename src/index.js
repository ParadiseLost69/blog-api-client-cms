import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//redux imports
import store from "./store/store";
import { Provider } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import Posts from "./pages/Posts/Posts";
import CreatePost from "./pages/CreatePost/CreatePost";
import Root from "./Root";
import Post from "./pages/Post/Post";
import { DeletePost } from "./pages/DeletePost/DeletePost";
import { green, orange, red, teal } from "@mui/material/colors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Posts /> },
      { path: "create-post", element: <CreatePost /> },
      { path: "post/:postId", element: <Post /> },
      { path: "/post/:postId/update" },
      { path: "/post/:postId/delete", element: <DeletePost /> },
    ],
  },
]);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    secondary: { main: orange[300], light: orange.A200 },
    success: { main: green[500] },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: red[200] },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
