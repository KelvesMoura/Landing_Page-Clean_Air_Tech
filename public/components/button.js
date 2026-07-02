import * as h from "../scritps/helper.js";

// Incluir o onclick do button via link por eg. link após o icon

const button = (container, items) => {
  const { value, className, icon, link, inherit } = items;

  if (inherit === "parent") {
    let div = "";

    container.includes("header")
      ? (div = h.qs(`${container}`))
      : (div = h.qs(`.${container}`));

    if (div) createButton(items, div);
  } else {
    const div = h.qs(`.${container[0]}`);

    if (!div) return;

    const children = h.qsChildAll(`.${container[1]}`, div);

    children.forEach((child) => createButton(items, child));
  }
};

function createButton(data, div) {
  const { value, className, icon, link } = data;

  const btn = h.cElement("button");

  if (icon) {
    const i = h.cElement("i");
    i.setAttribute("data-lucide", icon);
    btn.appendChild(i);
  }

  if (link) {
    btn.onclick = () => (window.location.href = link);
  }

  btn.className = className;
  btn.style.margin = "0 10px";

  btn.appendChild(h.textInput(value));
  div.appendChild(btn);
}

export default button;
