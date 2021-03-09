import React, { useEffect, useState } from "react";
import socket from "./Socket";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ImageTagger from "./ImageTagger";

export default function ImageDialog({ name }) {
  const [open, setOpen] = useState(false);
  const [canvs, setCanvs] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    socket.emit("message", name, canvs.src);
    console.log(canvs);
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        fullWidth="true"
      >
        Upload Picture
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="100%"
        maxHeight="100%"
      >
        <DialogTitle id="form-dialog-title">Upload Picture</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can upload and tag your pictures here.
          </DialogContentText>
          <ImageTagger canvs={canvs} setCanvs={setCanvs} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
