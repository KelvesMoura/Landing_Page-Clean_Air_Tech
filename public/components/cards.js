import * as h from "../scritps/helper.js";

function cards(container, items) {
  const { icon, font, title, content, link } = items;

  const selector = `.${container}`;

  const elements = {
    div: h.qs(selector),
    card: h.cElement("div"),
    divContent: h.cElement("div"),
    i: h.cElement("i"),
    h3: h.cElement("h3"),
    h2: h.cElement("h2"),
    p: h.cElement("p"),
  };

  const { div, card, divContent, i, h3, h2, p } = elements;

  if (!div) return null;

  const containers = {
    "about-us": {
      className: "about-us",
      gradient: false,
      adjacent: false,
    },
    "advantage-hero": {
      className: "card-hero",
      gradient: false,
      adjacent: false,
    },
    "cards-benefit-service": {
      className: "cardBS",
      gradient: false,
      adjacent: false,
    },
    "cards-benefit-equip": {
      className: "cardBE",
      gradient: false,
      adjacent: false,
    },
    "benefits-cta3": {
      className: "card-cta3",
      gradient: false,
      adjacent: false,
    },
    "left-side .cards-about-us": {
      className: "card-about-us",
      gradient: true,
      adjacent: false,
    },
    "right-side .cards-about-us": {
      className: "card-about-us",
      gradient: false,
      adjacent: false,
    },
    "contact-info": {
      className: "card-contact",
      gradient: true,
      adjacent: false,
    },
    "working-time-info > hr:last-of-type": {
      className: "card-time",
      gradient: false,
      adjacent: true,
    },
    "map-side": {
      className: "card-location",
      gradient: true,
      adjacent: false,
    },
  };

  let section = containers[container];

  if (!section)
    section = { className: "card", gradient: false, adjacent: false };

  card.className = section.className;
  createIcon(font, icon, i, section.gradient);

  if (typeof title == "object") {
    h3.appendChild(h.textInput(title[0] || ""));
    h2.appendChild(h.textInput(title[1] || ""));
  } else {
    h3.appendChild(h.textInput(title));
  }

  divContent.append(h3, h2);
  card.append(i, divContent);

  if (content) {
    if (typeof content == "object") {
      content.forEach((line) => {
        const pLine = h.cElement("p");
        pLine.appendChild(h.textInput(line));
        divContent.append(pLine);
      });
    } else {
      p.appendChild(h.textInput(content));
      divContent.appendChild(p);
    }
  }

  if (link) {
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.open(link, "_blank");
    };
  }

  if (!section.adjacent) {
    div.appendChild(card);
  } else {
    div.after(card);
  }
}

function createIcon(font, icon, i, gradient) {
  if (font !== "data-lucide") {
    i.className = gradient ? `${icon} icon-gradient` : `${icon}`;
  } else {
    i.setAttribute(font, icon);
    if (gradient) i.className = "icon-gradient";
  }
}

export default cards;
