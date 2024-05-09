//Author: Sushank Saini
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const LoginFailureDialog = ({
  open,
  onClose,
  handleCloseLoginFailureModal,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login Failure</DialogTitle>
      <DialogContent>
        <Typography>
          You are not logged in. Please login and try again.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ color: "black" }}
          onClick={handleCloseLoginFailureModal}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginFailureDialog;
