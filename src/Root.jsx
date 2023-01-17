import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Root.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Skeleton,
} from "@mui/material";
import { PostAdd, Email, AccountBox } from "@mui/icons-material";

export default function Root() {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState("home");
  const [value, setValue] = useState(null);

  function windowSize() {
    setWidth(window.innerWidth);
  }

  window.addEventListener("resize", windowSize);

  return (
    <div className="layout">
      {width >= 750 && (
        <aside className="navigation-sidebar">
          <div className="profile-display">
            <Skeleton
              variant="circular"
              height={60}
              width={60}
              className="profile__image"
            />

            <h2 className="profile__name">Hello Mai!</h2>
            <h3 className="profile__welcome-message">Welcome to your blog</h3>
            <h3 className="profile__number">You have 2 Posts</h3>
          </div>
          <div className="navbar">
            <Link to="/create-post">
              <Button
                variant={currentPage === "create" ? "contained" : "text"}
                startIcon={<PostAdd />}
                onClick={() => {
                  setCurrentPage("create");
                }}
              >
                Create New Post
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant={currentPage === "home" ? "contained" : "text"}
                startIcon={<Email />}
                onClick={() => {
                  setCurrentPage("home");
                }}
              >
                View Posts
              </Button>
            </Link>
            <Link to="/">
              <Button variant="text" startIcon={<AccountBox />}>
                View Profile
              </Button>
            </Link>
          </div>
        </aside>
      )}
      {width < 750 && (
        <div>
          <BottomNavigation
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            value={1}
            sx={{ backgroundColor: "#0B1929", borderTop: "1px solid #444E5B" }}
            className="bottom-nav"
            showLabels
          >
            <BottomNavigationAction label="Home" icon={<Email />} href="/" />
            <BottomNavigationAction
              label="Create"
              icon={<PostAdd />}
              href="/create-post"
            />
            <BottomNavigationAction label="Profile" icon={<AccountBox />} />
          </BottomNavigation>
        </div>
      )}

      <div>
        <Outlet />
      </div>
    </div>
  );
}
