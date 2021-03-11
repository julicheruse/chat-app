import React, { useState } from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { scaling } from "./utils";
import TagDialog from "./TagDialog";

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

export default function ImageTagger({ canvs, setCanvs, tags, setTags }) {
  const classes = useStyles();
  const [foto, setFoto] = useState(false);
  const [drawing, setDrawing] = useState(false);
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
  const [tag, setTag] = useState({});
  const [tagging, setTagging] = useState(false);

  const handleChange = (event) => {
    setFoto(true);
    const canvas = document.getElementById("canv");
    var ctx = canvas.getContext("2d");

    var dialog = document.getElementById("dialog");
    dialog.appendChild(canvas);
    canvas.hidden = false;
    canvas.width = 600;
    canvas.height = 500;
    var img = new Image();

    img.src = URL.createObjectURL(event.target.files[0]);
    setCanvs(img);
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

  function draw(e) {
    let { offsetX, offsetY } = e.nativeEvent;
    if (!drawing) return;
    let ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    setEnd({ x: offsetX, y: offsetY });
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
  }

  function endPos(e) {
    let ctx = canvas.getContext("2d");
    draw(e);
    setDrawing(false);
    ctx.beginPath();
    ctx.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
    setTag({
      startX: start.x,
      startY: start.y,
      width: end.x - start.x,
      height: end.y - start.y,
      text: "",
    });
    setTagging(true);
    setEnd({});
    setStart({});
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
      />
      <br></br>
      <label htmlFor="contained-button-file">
        {foto ? null : (
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        )}
      </label>
      <TagDialog
        tagging={tagging}
        setTagging={setTagging}
        tags={tags}
        setTags={setTags}
        tag={tag}
        setTag={setTag}
      />
    </form>
  );
}
