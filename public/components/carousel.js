import * as h from "../scritps/helper.js";

function carousel(container, customers) {
  const div = h.qs(`.${container}`);

  const { name, src } = customers;

  const elements = {
    swiper: h.qsChild(".swiper", div),
    card: h.cElement("div"),
    img: h.cElement("img"),
  };

  const { swiper, card, img } = elements;

  Object.assign(img, {
    src: src,
    alt: `Logo ${name}`,
  });

  card.className = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  swiper.className = "swiper";

  card.appendChild(img);
  swiper.appendChild(card);
}

export function cloneCustomer(container) {
  const div = h.qs(`.${container}`);
  const swiper = h.qsChild(".swiper", div);
  const cardsCustomer = h.qsChildAll("div", swiper);

  cardsCustomer.forEach((card) => {
    swiper.appendChild(card.cloneNode(true));
  });

  h.property("--carousel-total-items", cardsCustomer.length);
}

export default carousel;
