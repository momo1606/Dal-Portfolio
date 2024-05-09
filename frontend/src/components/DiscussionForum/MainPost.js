//Author: Sushank Saini
import React from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteConfirmationModal from "./DeleteConfirmation";
import { useState } from "react";
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
import AuthorizationFailureDialog from "./authorizationFailureDialog";

const MainPost = ({ id, email, date, title, description }) => {
  console.log("postid:", id);
  console.log("username:", email);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showLoginFailureModal, setShowLoginFailureModal] = useState(false);
  const [showAuthFailureModal, setShowAuthFailureModal] = useState(false);
  const [state, dispatch] = useAppStore();
  const currentUser = state?.currentUser;

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDeletePost = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (state?.isAuthenticated == true) {
      //user is logged in
      if (currentUser.username == email) {
        //user matches with the user who posted this
        console.log(
          "User authorized to delete. Username:",
          currentUser.username
        );
        setIsModalOpen(false);
        try {
          const payload = {
            postId: id,
          };
          const response = await POST(
            "api/discussionforum/delete-post",
            payload
          );
          console.log(response);
          console.log("Post deleted!");
          setShowSuccessModal(true);
        } catch (error) {
          setShowFailureModal(true);
          console.error("Error deleting post:", error);
        }
      } else {
        console.log(
          "You are not authorized to delete this. User:",
          currentUser
        );
        setShowAuthFailureModal(true);
        setIsModalOpen(false);
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
    }, 1000);
  };

  const handleCloseFailureModal = () => {
    setShowFailureModal(false);
  };

  const handleCloseLoginFailureModal = () => {
    setShowLoginFailureModal(false);
    navigate("/login");
  };

  const handleCloseAuthFailureModal = () => {
    setShowAuthFailureModal(false);
  };

  return (
    <Grid container justifyContent="center" style={{ padding: "5px" }}>
      <Grid item xs={12} md={8} lg={6}>
        <Card variant="outlined" style={{ padding: "16px", width: "100%" }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <IconButton aria-label="go-back" onClick={handleBackClick}>
                  <ArrowBackIcon />
                </IconButton>
              </Grid>
              <Grid item>
                {currentUser && currentUser.username === email && (
                  <IconButton aria-label="delete" onClick={handleDeletePost}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
            <Typography
              variant="h5"
              style={{
                fontWeight: 250,
                borderBottom: "2px solid #FFC300",
                paddingBottom: "0.5px",
                marginTop: "10px",
              }}
            >
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Posted by {email} on {date}
            </Typography>
            <Typography variant="body1">{description}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <DeleteConfirmationModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
      <Dialog
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      >
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Post deleted successfully!</Typography>
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
      />
      <AuthorizationFailureDialog
        open={showAuthFailureModal}
        onClose={() => setShowAuthFailureModal(false)}
        handleCloseAuthorizationFailureModal={handleCloseAuthFailureModal}
      />
    </Grid>
  );
};

export default MainPost;
