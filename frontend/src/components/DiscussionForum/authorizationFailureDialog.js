//Author: Sushank Saini
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const AuthorizationFailureDialog = ({
  open,
  onClose,
  handleCloseAuthorizationFailureModal,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Authorization Failure</DialogTitle>
      <DialogContent>
        <Typography>You are not authorized to delete this.</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ color: "black" }}
          onClick={handleCloseAuthorizationFailureModal}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthorizationFailureDialog;
