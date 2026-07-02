import * as h from "../scritps/helper.js";

const createQrCode = (container, items) => {
  const { alt, src, text } = items;

  const elements = {
    div: h.qs(`.${container}`),
    local: h.cElement("div"),
    img: h.cElement("img"),
    p: h.cElement("p"),
  };

  const { div, local, img, p } = elements;

  Object.assign(img, {
    src: src,
    alt: alt,
  });

  local.className = "qrCode";

  p.appendChild(h.textInput(text));
  local.append(img, p);
  div.appendChild(local);
};

export default createQrCode;
