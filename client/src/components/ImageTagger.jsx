import React, { useState } from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { scaling } from "./utils";

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
  const [drawing, setDrawing] = useState(false);
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
  const [tags, setTags] = useState([]);
  const classes = useStyles();
  const handleChange = (event) => {
    setFoto(true);
    const canvas = document.getElementById("canv");
    var ctx = canvas.getContext("2d");
    //var canvas = document.createElement("canvas");
    var dialog = document.getElementById("dialog");
    dialog.appendChild(canvas);
    canvas.hidden = false;
    canvas.width = 600;
    canvas.height = 500;
    var img = new Image();

    img.src = URL.createObjectURL(event.target.files[0]);

    img.onload = function () {
      var sc = scaling(img.width, img.height, canvas);
      ctx.scale(sc, sc);
      ctx.drawImage(img, 0, 0);
      ctx.save();
    };
  };

  const canvas = document.getElementById("canv");

  function startPos(e) {
    let { offsetX, offsetY } = e.nativeEvent;
    setDrawing(true);
    setStart({ x: offsetX, y: offsetY });
  }

  function endPos(e) {
    let ctx = canvas.getContext("2d");
    draw(e);

    setDrawing(false);
    ctx.beginPath();
    ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
    setEnd({});
    setStart({});
  }

  function draw(e) {
    let { offsetX, offsetY } = e.nativeEvent;
    if (!drawing) return;
    let ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    setEnd({ x: offsetX, y: offsetY });
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
  }

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
        onMouseDown={startPos}
        onMouseUp={endPos}
        onMouseMove={draw}
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
