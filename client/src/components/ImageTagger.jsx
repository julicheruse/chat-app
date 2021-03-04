import React, { useState } from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function ImageTagger() {
  const [foto, setFoto] = useState(false);

  const classes = useStyles();
  const handleChange = (event) => {
    setFoto(true);
    const canvas = document.getElementById("canv");
    //var canvas = document.createElement("canvas");
    var dialog = document.getElementById("dialog");
    dialog.appendChild(canvas);
    canvas.hidden = false;
    canvas.width = 600;
    canvas.height = 500;
    var ctx = canvas.getContext("2d");
    var img = new Image();

    img.src = URL.createObjectURL(event.target.files[0]);
    img.onload = function () {
      var scaling = (iW, iH) => {
        var cw = canvas.width;
        var ch = canvas.height;
        if (cw === iW && ch === iH) return 1;
        if (iW >= iH) {
          canvas.height = (img.height * cw) / iW;
          return cw / iW;
        } else if (iW < iH) {
          canvas.width = (img.width * ch) / iH;
          return ch / iH;
        }
      };
      var sc = scaling(img.width, img.height);
      ctx.scale(sc, sc);
      ctx.drawImage(img, 0, 0);
    };
  };

  return (
    <form id="dialog" className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleChange}
      />
      <canvas
        id="canv"
        hidden={true}
        onClickCapture={(c) => {
          console.log(c);
        }}
      ></canvas>
      <br></br>
      <label htmlFor="contained-button-file">
        {foto ? null : (
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        )}
      </label>
    </form>
  );
}
