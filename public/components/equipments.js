import * as h from "../scritps/helper.js";

function equipments(data) {
  const { bestSeller, src, stock, title, subtitle, features } = data;

  const elements = {
    div: h.qs(".cards-product"),
    card: h.cElement("div"),
    labelBestSeller: label(bestSeller, "Mais Vendido"),
    img: h.cElement("img"),
    labelStock: label(stock, "Em Estoque"),
    h3: h.cElement("h3"),
    p: h.cElement("p"),
  };

  const { div, card, labelBestSeller, img, labelStock, h3, p } = elements;

  card.className = "card-equipment";
  img.src = src;
  img.alt = title;

  if (bestSeller) card.appendChild(labelBestSeller);

  h3.appendChild(h.textInput(title));
  p.appendChild(h.textInput(subtitle));

  card.append(img, labelStock, h3, p, h.list(features));
  div.appendChild(card);
}

function label(status, content) {
  const elements = {
    label: h.cElement("div"),
    i: h.cElement("i"),
    p: h.cElement("p"),
  };

  const { label, i, p } = elements;

  if (content == "Mais Vendido") {
    label.className = "label-gradient";
    i.setAttribute("data-lucide", "star");
    p.appendChild(h.textInput(content));
  } else {
    label.className = "label-green";
    i.setAttribute("data-lucide", "circle-check-big");
    p.appendChild(h.textInput(content));
  }

  label.append(i, p);

  return label;
}

export default equipments;
