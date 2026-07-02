import * as h from "../scritps/helper.js";

function benefits(data, id) {
  const { value, label } = data;

  const elements = {
    div: h.qs(".cards"),
    card: h.cElement("div"),
    h3: h.cElement("h3"),
    p: h.cElement("p"),
  };

  const { div, card, h3, p } = elements;

  h3.className = "highlight";
  card.className = `card${id}`;

  h3.appendChild(h.textInput(value));
  p.appendChild(h.textInput(label));

  card.append(h3, p);
  div.appendChild(card);
}

export default benefits;
