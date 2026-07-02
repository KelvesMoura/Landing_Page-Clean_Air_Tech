import * as h from "../scritps/helper.js";

function titleIcon(container, items) {
  const { icon, title, className, parent } = items;

  const div = container.includes("#") ? h.qs(container) : h.qs(`.${container}`);

  const elements = {
    titleDiv: h.cElement("div"),
    h3: h.cElement("h3"),
  };

  const { titleDiv, h3 } = elements;

  if (icon) {
    const i = h.cElement("i");
    i.setAttribute("data-lucide", icon);
    titleDiv.appendChild(i);
  }

  if (title) {
    const divP = h.cElement("div");

    if (typeof title == "object") {
      title.forEach((line) => {
        if (!line.includes("CEP")) {
          const pLine = h.cElement("p");

          pLine.appendChild(h.textInput(line));
          divP.appendChild(pLine);
        }
      });
    } else {
      h3.appendChild(h.textInput(title));
      titleDiv.appendChild(h3);
    }
    titleDiv.appendChild(divP);
  }

  titleDiv.className = className;

  parent ? div.appendChild(titleDiv) : div.after(titleDiv);
}

export default titleIcon;
