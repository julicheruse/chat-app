import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

import DialogTitle from "@material-ui/core/DialogTitle";

import { scaling, drawTextBG } from "./utils";

export default function ViewImage({ image, tags, open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  var canvas = document.getElementById("canv");

  useEffect(() => {
    //var canvas = document.createElement("canvas");

    console.log(canvas);
    var ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 500;
    var img = new Image();
    img.src = image;
    console.log(img);

    img.onload = function () {
      var sc = scaling(img.width, img.height, canvas);
      ctx.scale(sc, sc);
      ctx.drawImage(img, 0, 0);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      tags.forEach((tag) => {
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "red";
        ctx.strokeRect(tag.startX, tag.startY, tag.width, tag.height);
        if (tag.startY > 30) {
          drawTextBG(ctx, tag.text, tag.startX, tag.startY - 20);
        } else {
          drawTextBG(ctx, tag.text, tag.startX, tag.startY + tag.height + 5);
        }
      });
    };
  }, [image, tags, open, canvas]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="100%"
        maxHeight="100%"
      >
        <DialogTitle id="form-dialog-title">View Picture</DialogTitle>
        <canvas id="canv"></canvas>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
