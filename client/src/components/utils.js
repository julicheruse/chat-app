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
