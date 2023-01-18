import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import "./Root.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Divider,
  Skeleton,
  Stack,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { PostAdd, Email, AccountBox, Home } from "@mui/icons-material";

export default function Root() {
  //get params for changing button values in selected menu items
  const params = window.location.pathname.split("/");
  const [width, setWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState(params[1]);

  //Changing window not working with Bottom Nav, need the params to change the highlighted menu item.

  function windowSize() {
    setWidth(window.innerWidth);
  }

  window.addEventListener("resize", windowSize);

  return (
    <Grid container>
      {width >= 600 && (
        <Grid item xs={0} sm={5} md={3} lg={3} xl={2}>
          <Stack
            position="sticky"
            top={0}
            direction="row"
            sx={{}}
            component="aside"
            className="navigation-sidebar"
          >
            <Paper sx={{ p: 2, backgroundColor: "background.default" }}>
              <Stack
                sx={{
                  display: "flex",
                  marginRight: 0,
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Skeleton
                    variant="circular"
                    height={60}
                    width={60}
                    className="profile__image"
                  />

                  <Typography variant="h4">Hello Mai!</Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <List
                  component="navigation"
                  sx={{ my: 2, p: 4, height: "100vh" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton selected={currentPage === ""} href="/">
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText sx={{ justifyContent: "center" }}>
                        Home
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>

                  <ListItem sx={{ width: "100%" }} disablePadding>
                    <ListItemButton
                      selected={currentPage === "create-post"}
                      href="/create-post"
                    >
                      <ListItemIcon>
                        <PostAdd />
                      </ListItemIcon>
                      <ListItemText>New Post</ListItemText>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton href="/">
                      <ListItemIcon>
                        <AccountBox />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>

              <Divider />
            </Paper>
          </Stack>
        </Grid>
      )}
      {width < 600 && (
        <BottomNavigation
          // change highlighted menu item to correct parameter
          value={params[1]}
          sx={{
            backgroundColor: "#0B1929",
            borderTop: "1px solid #444E5B",
            width: "100%",
            position: "fixed",
            bottom: 0,
            zIndex: 2,
          }}
          className="bottom-nav"
          showLabels
        >
          <BottomNavigationAction
            value=""
            label="Home"
            icon={<Email />}
            href="/"
          />
          <BottomNavigationAction
            label="Create"
            value="create-post"
            icon={<PostAdd />}
            href="/create-post"
          />
          <BottomNavigationAction
            label="Profile"
            value={"profile"}
            icon={<AccountBox />}
          />
        </BottomNavigation>
      )}
      <Grid item xs={12} sm={7} md={9} lg={9} xl={10}>
        <Box>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
}
