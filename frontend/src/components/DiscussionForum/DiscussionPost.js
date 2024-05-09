//Author: Sushank Saini
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { POST } from "utils/axios";
import { useAppStore } from "store";
import LoginFailureDialog from "./loginFailureDialog";

const DiscussionPost = ({
  id,
  email,
  date,
  title,
  description,
  replyCount,
  replies,
  getPosts,
}) => {
  const [reply, setReply] = useState("");
  const [replyError, setReplyError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showLoginFailureModal, setShowLoginFailureModal] = useState(false);
  const navigate = useNavigate();
  const [state, dispatch] = useAppStore();
  const currentUser = state?.currentUser;

  const handleTitleClick = () => {
    // If title is clicked then navigate to threads page of that discussion post
    navigate("/dalportfolios-discussion-thread", {
      state: { id, email, title, description, date, replies },
    });
    console.log("Title clicked:", title);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
    setReplyError("");
  };

  const handleReplySubmit = async () => {
    if (state?.isAuthenticated == true) {
      //user is logged in
      // Reply should not be empty
      if (reply.trim() !== "") {
        try {
          console.log(reply);
          const payload = {
            postId: id,
            userName: currentUser.username,
            description: reply,
            date: new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false, // To use 24-hour format
            }),
          };
          const response = await POST("api/discussionforum/add-reply", payload);
          getPosts();
          console.log("Response:", response);
          console.log("Reply submitted:", reply);
          setShowSuccessModal(true);
          setReply("");
        } catch (error) {
          setShowFailureModal(true);
          console.error("Error posting discussion:", error);
        }
      } else {
        // Display an error message or handle empty reply input edge case
        setReplyError("Reply cannot be empty.");
        console.error("Reply cannot be empty.");
      }
    } else {
      console.log(
        "You are not logged in. Please login and try again. User:",
        currentUser
      );
      setShowLoginFailureModal(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setTimeout(() => {
      navigate("/dalportfolios-discussions");
    }, 500);
  };

  const handleCloseFailureModal = () => {
    setShowFailureModal(false);
    navigate("/dalportfolios-discussions");
  };
  const handleCloseLoginFailureModal = () => {
    setShowLoginFailureModal(false);
    navigate("/login");
  };

  return (
    <>
      <Card
        variant="outlined"
        onClick={handleTitleClick}
        sx={{
          position: "relative",
          padding: "16px",
          cursor: "pointer",
          "&:hover": { background: "#ffc30080" },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            style={{
              fontWeight: 250,
              borderBottom: "2px solid #FFC300",
              paddingBottom: "0.5px",
            }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Posted by {email} on {date}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <TextField
            onClick={(e) => {
              e.stopPropagation();
              return;
            }}
            id="reply-input"
            value={reply}
            onChange={handleReplyChange}
            placeholder="Reply to the post"
            rows={1.5}
            multiline
            fullWidth
            variant="outlined"
            size="small"
            style={{ marginTop: "20px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleReplySubmit}
                    sx={{ "&:hover": { color: "#FFFFFF" } }}
                  >
                    <ReplyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant="subtitle2"
            color="textSecondary"
            gutterBottom
            style={{ marginTop: "10px" }}
          >
            {replyError}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginTop: "10px" }}
          >
            This post has {replyCount} {replyCount === 1 ? "reply" : "replies"}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Reply Posted Sucessfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "black" }} onClick={handleCloseSuccessModal}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showFailureModal}
        onClose={() => setShowFailureModal(false)}
      >
        <DialogTitle>Failure</DialogTitle>
        <DialogContent>
          <Typography>There was an error. Please try again.</Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "black" }} onClick={handleCloseFailureModal}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <LoginFailureDialog
        open={showLoginFailureModal}
        onClose={() => setShowLoginFailureModal(false)}
        handleCloseLoginFailureModal={handleCloseLoginFailureModal}
      ></LoginFailureDialog>
    </>
  );
};

export default DiscussionPost;
