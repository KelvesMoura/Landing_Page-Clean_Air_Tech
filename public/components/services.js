import * as h from "../scritps/helper.js";

function services(data) {
  const { icon, title, subtitle, subservices } = data;

  const elements = {
    div: h.qs("#services .cards-service"),
    card: h.cElement("div"),
    i: h.cElement("i"),
    h3: h.cElement("h3"),
    p: h.cElement("p"),
  };

  const { div, card, i, h3, p } = elements;

  card.className = "card-service";
  i.setAttribute("data-lucide", icon);
  i.className = "icon-gradient";

  h3.appendChild(h.textInput(title));
  p.appendChild(h.textInput(subtitle));

  card.append(i, h3, p, h.list(subservices));
  div.appendChild(card);
}

export default services;
