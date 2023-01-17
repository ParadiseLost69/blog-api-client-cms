import React from "react";

import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

export const DeletePost = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography component="h1" variant="h2">
            Are you sure you want to delete this item?
          </Typography>
          <CardActionArea>
            <CardActions>
              <Button>Delete</Button>
            </CardActions>
          </CardActionArea>
        </CardContent>
      </Card>
    </Box>
  );
};
