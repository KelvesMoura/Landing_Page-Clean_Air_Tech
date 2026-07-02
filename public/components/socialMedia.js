import * as h from "../scritps/helper.js";

function createSocialMedia(container, media) {
  const channelList = Object.entries(media);

  const div = container.includes("#") ? h.qs(container) : h.qs(`.${container}`);

  channelList.forEach((channel) => {
    const title = channel[0];
    const { link, icon, className, font } = channel[1];

    const a = h.cElement("a");
    const i = h.cElement("i");

    createIcon(font, icon, i, className);

    a.href = link;

    a.appendChild(i);
    div.appendChild(a);
  });
}

function createIcon(font, icon, i, className) {
  font !== "data-lucide"
    ? (i.className = `${icon} ${className}`)
    : i.setAttribute(font, icon);
}

export default createSocialMedia;
