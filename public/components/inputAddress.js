import * as h from "../scritps/helper.js";

const inputAddress = (data) => {
  const { id, content, container } = data;
  const { street, number, neighborhood, city, state, zipCode } = content;

  const elements = {
    div: h.qs(`.${container}`),
    card: h.cElement("div"),
    p1: h.cElement("p"),
    p2: h.cElement("p"),
  };

  const { div, card, p1, p2 } = elements;

  if (id) {
    const h3 = h.cElement("h3");
    h3.appendChild(h.textInput("Endereço Principal"));
    card.append(h3);
  }

  card.className = "address";

  p1.appendChild(h.textInput(`${street}, ${number} - ${neighborhood}`));
  p2.appendChild(h.textInput(`${city}/${state} - CEP: ${zipCode}`));

  card.append(p1, p2);
  div.appendChild(card);
};

export default inputAddress;
