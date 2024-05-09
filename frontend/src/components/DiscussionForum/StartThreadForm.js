//Author: Sushank Saini
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { POST } from "utils/axios";
import { useAppStore } from "store";
import LoginFailureDialog from "./loginFailureDialog";

//to take user input once user decides to start a discussion
const StartDiscussion = ({ onClose, getPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showLoginFailureModal, setShowLoginFailureModal] = useState(false);
  const navigate = useNavigate();
  const [state, dispatch] = useAppStore();
  const currentUser = state?.currentUser;

  const maxTitleCharacters = 200;
  const maxDescriptionCharacters = 6000;

  const updateCharacterCount = (
    value,
    maxCharacters,
    setState,
    setErrorState
  ) => {
    const characterCount = value.length;
    setState(value);
    setErrorState(characterCount > maxCharacters);
  };

  const handleTitleChange = (event) => {
    updateCharacterCount(
      event.target.value,
      maxTitleCharacters,
      setTitle,
      setErrorTitle
    );
  };

  const handleDescriptionChange = (event) => {
    updateCharacterCount(
      event.target.value,
      maxDescriptionCharacters,
      setDescription,
      setErrorDescription
    );
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = async () => {
    if (state?.isAuthenticated == true) {
      if (!errorTitle && !errorDescription && description.trim() !== "") {
        try {
          const payload = {
            username: currentUser.username,
            title,
            description,
            date: new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            }),
          };
          const response = await POST("api/discussionforum/add-post", payload);
          getPosts();
          console.log("Title:", title);
          console.log("Description:", description);
          console.log("Response:", response);
          setShowSuccessModal(true);
        } catch (error) {
          setShowFailureModal(true);
          console.error("Error posting discussion:", error);
          setErrorMessage("An error occurred while posting the discussion.");
        }
      } else {
        console.error("Description is required.");
        setErrorMessage("*Description can not be empty.");
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
    onClose();
    navigate("/dalportfolios-discussions");
  };

  const handleCloseFailureModal = () => {
    setShowFailureModal(false);
    onClose();
    navigate("/dalportfolios-discussions");
  };

  const handleCloseLoginFailureModal = () => {
    setShowLoginFailureModal(false);
    navigate("/login");
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={14} sm={12} md={10} lg={8}>
        <TextField
          label={`Title (${title.length}/${maxTitleCharacters})`}
          fullWidth
          value={title}
          onChange={handleTitleChange}
          multiline
          maxRows={3}
          placeholder="Maximum 200 characters"
          error={errorTitle}
          helperText={
            errorTitle
              ? `Title cannot be more than ${maxTitleCharacters} characters`
              : ""
          }
          margin="normal"
        />
        <TextField
          label={`Description (${description.length}/${maxDescriptionCharacters})`}
          fullWidth
          required
          multiline
          rows={4}
          maxRows={7}
          placeholder="Maximum 6000 characters"
          value={description}
          onChange={handleDescriptionChange}
          error={errorDescription}
          helperText={
            errorDescription
              ? `Description cannot be more than ${maxDescriptionCharacters} characters`
              : ""
          }
          margin="normal"
        />
        {errorMessage && (
          <div style={{ color: "red", marginBottom: "16px" }}>
            {errorMessage}
          </div>
        )}
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            marginRight: "8px",
          }}
        >
          Post
        </Button>
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
        <Dialog
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        >
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <Typography>Posted Sucessfully!</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ color: "black" }}
              onClick={handleCloseSuccessModal}
            >
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
            <Button
              style={{ color: "black" }}
              onClick={handleCloseFailureModal}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <LoginFailureDialog
          open={showLoginFailureModal}
          onClose={() => setShowLoginFailureModal(false)}
          handleCloseLoginFailureModal={handleCloseLoginFailureModal}
        />
      </Grid>
    </Grid>
  );
};

export default StartDiscussion;
