import React, { useRef, useState } from "react";
import { Slide, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert ref={ref} elevation={6} variant="filled" {...props} />;
});

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

/** FOR OPEN AND CLOSE THE ALERT MESSAGE */

const MyAlert = ({ children }) => {
  const [open, setOpen] = useState(true);
  const alertref = useRef(null);

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        TransitionComponent={TransitionRight}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}>
        <Alert ref={alertref} onClose={handleClose} severity="error">
          {children}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MyAlert;
