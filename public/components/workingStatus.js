import * as h from "../scritps/helper.js";

const workingStatus = (container, days) => {
  const space = h.qs(`.${container}`);

  days.forEach((i) => {
    const elements = {
      div: h.cElement("div"),
      day: h.cElement("p"),
      hour: h.cElement("p"),
      hr: h.cElement("hr"),
    };

    const { div, day, hour, hr } = elements;

    hour.className = "hour";

    i.online
      ? day.appendChild(h.textInput(`${i.day} (Online)`))
      : day.appendChild(h.textInput(i.day));

    hour.appendChild(h.textInput(i.hour));
    div.append(day, hour);
    space.append(div, hr);
  });
};

export default workingStatus;
