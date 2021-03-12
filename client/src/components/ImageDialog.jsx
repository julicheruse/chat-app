import React, { useState } from "react";
import socket from "./Socket";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ImageTagger from "./ImageTagger";

export default function ImageDialog({ name }) {
  const [open, setOpen] = useState(false);
  const [canvs, setCanvs] = useState(null);
  const [tags, setTags] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCanvs(null);
    setOpen(false);
  };

  const handleSend = () => {
    socket.emit("image", name, canvs.src, tags);
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
        style={{
          color: "white",
        }}
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
          <ImageTagger
            canvs={canvs}
            setCanvs={setCanvs}
            tags={tags}
            setTags={setTags}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSend} type="submit" color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
