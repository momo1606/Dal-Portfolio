//Author: Sushank Saini
import React from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteConfirmationModal from "./DeleteConfirmation";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { POST } from "utils/axios";
import { useAppStore } from "store";
import LoginFailureDialog from "./loginFailureDialog";
import AuthorizationFailureDialog from "./authorizationFailureDialog";
import { useNavigate } from "react-router-dom";

const ReplyDisplay = ({ postId, id, email, date, description, onDelete }) => {
  console.log("postId:", postId);
  console.log("replyid:", id);
  console.log("username:", email);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showLoginFailureModal, setShowLoginFailureModal] = useState(false);
  const [showAuthFailureModal, setShowAuthFailureModal] = useState(false);
  const [state, dispatch] = useAppStore();
  const currentUser = state?.currentUser;
  const navigate = useNavigate();

  const handleDeleteReply = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (state?.isAuthenticated == true) {
      if (currentUser.username == email) {
        setIsModalOpen(false);
        try {
          const payload = {
            postId: postId,
            replyId: id,
          };
          const response = await POST(
            "api/discussionforum/delete-reply",
            payload
          );
          setShowSuccessModal(true);
          console.log(response);
          console.log("Reply deleted!");
        } catch (error) {
          setShowFailureModal(true);
          console.error("Error deleting reply:", error);
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
    onDelete(id);
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
        <Card
          variant="outlined"
          style={{
            padding: "16px",
            width: "100%",
            position: "relative",
          }}
        >
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
              {currentUser && currentUser.username === email && (
                <IconButton
                  aria-label="delete"
                  onClick={handleDeleteReply}
                  style={{ position: "absolute", top: 25, right: 30 }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
              </Grid>
            </Grid>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              Reply from {email} on {date}
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
          <Typography>Reply deleted successfully!</Typography>
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

export default ReplyDisplay;
