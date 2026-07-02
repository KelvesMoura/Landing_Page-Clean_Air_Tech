import * as h from "../scritps/helper.js";

function createMap(container, link) {
  const div = container.includes("#") ? h.qs(container) : h.qs(`.${container}`);

  const iframe = h.cElement("iframe");

  Object.assign(iframe, {
    src: `${link}`,
    width: "100%",
    height: "90%",
    style: "border: 0",
    allowfullscreen: "",
    loading: "lazy",
  });

  div.appendChild(iframe);
}

export default createMap;
