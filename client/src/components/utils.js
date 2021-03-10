export const scaling = (iW, iH, c) => {
  var cw = c.width;
  var ch = c.height;
  if (cw === iW && ch === iH) return 1;
  if (iW >= iH) {
    c.height = (iH * cw) / iW;
    return cw / iW;
  } else if (iW < iH) {
    c.width = (iW * ch) / iH;
    return ch / iH;
  }
};

export function drawTextBG(ctx, txt, x, y) {
  ctx.save();

  ctx.font = "16px Arial";
  ctx.textBaseline = "top";
  ctx.fillStyle = "white";
  var width = ctx.measureText(txt).width + 1;
  ctx.fillRect(x, y - 2, width, parseInt("18px Arial", 10));
  ctx.fillStyle = "#000";
  ctx.fillText(txt, x, y);
  ctx.restore();
}
