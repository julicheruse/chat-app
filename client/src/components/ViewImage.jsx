import React, { useCallback, useEffect, useState } from "react";

import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";

import { scaling, drawTextBG } from "./utils";

export default function ViewImage({ image, tags, open, setOpen }) {
  //const ref = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  const ref = useCallback((node) => {
    if (node !== null) {
      setCanvas(node);
    }
  }, []);

  useEffect(() => {
    console.log(ref);
    if (canvas) {
      console.log(canvas);
      var ctx = canvas.getContext("2d");

      var img = new Image();
      img.src = `data:image/jpg;base64,${image}`;
      console.log(img);

      img.onload = function () {
        var sc = scaling(img.width, img.height, canvas);
        ctx.scale(sc, sc);
        ctx.drawImage(img, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        tags.forEach((tag) => {
          ctx.beginPath();
          ctx.lineWidth = 5;
          ctx.strokeStyle = "#80d1c0";
          ctx.strokeRect(tag.startX, tag.startY, tag.width, tag.height);
          if (tag.startY > 30) {
            drawTextBG(ctx, tag.text, tag.startX, tag.startY - 20);
          } else {
            drawTextBG(ctx, tag.text, tag.startX, tag.startY + tag.height + 5);
          }
        });
      };
    }
  }, [canvas, image, ref, tags]);

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
        <canvas ref={ref} id="canv" width="600" height="500"></canvas>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
