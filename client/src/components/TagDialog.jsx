import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function TagDialog({
  tagging,
  setTagging,
  tags,
  setTags,
  tag,
  setTag,
}) {
  const [open, setOpen] = React.useState(false);

  /* const handleClickOpen = () => {
    setOpen(true);
  }; */
  const handleTagClick = (e) => {
    e.preventDefault();
    setTags([...tags, tag]);

    setTagging(false);
  };

  const handleClose = () => {
    setTag({});
    console.log(tags);
    setTagging(false);
  };
  const handleTextChange = (e) => {
    tag.text = e.target.value;
    console.log(tag);
  };

  return (
    <div>
      <Dialog
        open={tagging}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
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