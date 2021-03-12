import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { drawTextBG } from "./utils";

export default function TagDialog({
  tagging,
  setTagging,
  tags,
  setTags,
  tag,
  setTag,
}) {
  const handleTagClick = (e) => {
    e.preventDefault();
    setTags([...tags, tag]);
    let ctx = document.getElementById("canv").getContext("2d");

    if (tag.startY > 30) {
      drawTextBG(ctx, tag.text, tag.startX, tag.startY - 20);
    } else {
      drawTextBG(ctx, tag.text, tag.startX, tag.startY + tag.height + 5);
    }
    setTagging(false);
  };

  const handleClose = () => {
    setTag({});
    setTagging(false);
  };
  const handleTextChange = (e) => {
    tag.text = e.target.value;
    console.log(tags);
    console.log(tag);
  };

  return (
    <div>
      <Dialog
        open={tagging}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Tag Photo</DialogTitle>
        <DialogContent>
          <DialogContentText>Write the person's name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tag"
            type="text"
            fullWidth
            onChange={handleTextChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleTagClick} color="primary">
            Tag
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
