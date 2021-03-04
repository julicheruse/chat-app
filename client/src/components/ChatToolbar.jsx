import React from "react";

import { Typography, Button } from "@material-ui/core";
import ImageDialog from "./ImageDialog";

export default function ChatToolbar() {
  return (
    <div>
      <ImageDialog />
    </div>
  );
}

/* export default function ChatToolbar() {
  const [foto, setFoto] = useState("");

  const classes = useStyles();
  const handleChange = (event) => {
    console.log(event.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setFoto(reader.result);
    };
  };
  return (
    <form className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload Photo
        </Button>
      </label>
      <img
        src={foto ? foto : null}
        alt="as"
        style={{ maxWidth: "250px", height: "250px" }}
      />
    </form>
  );
} */
