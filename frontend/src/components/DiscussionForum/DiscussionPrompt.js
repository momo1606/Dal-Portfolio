//Author: Sushank Saini
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import StartDiscussion from "./StartThreadForm";

//To ask user if they wish to start a disucssion
const DiscussionPrompt = ({ getPosts }) => {
  const [isStartDiscussionOpen, setStartDiscussionOpen] = useState(false);

  const handleStartDiscussionClick = () => {
    setStartDiscussionOpen(true);
  };

  return (
    <>
      {!isStartDiscussionOpen && (
        <Paper
          style={{
            padding: "16px",
            textAlign: "center",
            minHeight: "212px",
            top: 200,
          }}
        >
          <Typography
            variant="h5"
            style={{ marginTop: "20px", fontWeight: 500 }}
          >
            Do you have a question or an idea to share?
          </Typography>
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
            }}
            onClick={handleStartDiscussionClick}
          >
            Start a Discussion
          </Button>
        </Paper>
      )}
      {isStartDiscussionOpen && (
        <StartDiscussion
          getPosts={getPosts}
          onClose={() => setStartDiscussionOpen(false)}
        />
      )}
    </>
  );
};

export default DiscussionPrompt;
