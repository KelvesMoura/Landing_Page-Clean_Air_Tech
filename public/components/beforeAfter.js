import * as h from "../scritps/helper.js";

function beforeAfter(el) {
  const { beforePhoto, afterPhoto, container } = el;

  const elements = {
    div: h.qs(`.${container}`),
    p: h.qs(".orientation"),
    slider: h.cElement("input"),
    imageDiv: h.cElement("div"),
    imgBefore: h.cElement("img"),
    imgAfter: h.cElement("img"),
    spanBefore: h.cElement("span"),
    spanAfter: h.cElement("span"),
    label: ["Antes", "Depois"],
  };

  const {
    div,
    p,
    slider,
    imageDiv,
    imgBefore,
    imgAfter,
    spanBefore,
    spanAfter,
    label,
  } = elements;

  Object.assign(slider, {
    type: "range",
    min: "0",
    max: "100",
    value: "50",
    className: "slider",
  });

  Object.assign(imgBefore, {
    src: beforePhoto,
    alt: label[0],
    className: "imgBefore",
  });

  Object.assign(imgAfter, {
    src: afterPhoto,
    alt: label[1],
    className: "imgAfter",
  });

  imageDiv.className = "imgContainer";
  spanBefore.className = "labelBefore";
  spanAfter.className = "labelAfter";
  p.classList.remove("hidden");

  imgAfter.style.clipPath = `inset( 0 0 0 50%)`;

  updateLabels(spanBefore, spanAfter, "50");

  slider.addEventListener("input", (e) => {
    const value = e.target.value;

    imgAfter.style.clipPath = `inset( 0 0 0 ${value}%)`;
    updateLabels(spanBefore, spanAfter, value);
  });

  imageDiv.append(imgBefore, imgAfter);

  spanBefore.appendChild(h.textInput(label[0].toUpperCase()));
  spanAfter.appendChild(h.textInput(label[1].toUpperCase()));
  div.append(imageDiv, slider, spanBefore, spanAfter);
}

function updateLabels(before, after, value) {
  const numValue = Number(value);
  before.style.opacity = numValue <= 20 ? "0" : "1";
  after.style.opacity = numValue >= 80 ? "0" : "1";
}

export default beforeAfter;
