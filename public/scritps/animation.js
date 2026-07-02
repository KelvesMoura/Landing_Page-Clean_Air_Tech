import * as h from "./helper.js";

function animation() {
  const selectors = {
    header: h.qs("header"),
    hero: h.qs("#hero"),
    services: h.qs("#services"),
    equipments: h.qs("#products"),
    cta3: h.qs("#cta3"),
    aboutUs: h.qs("#about-us"),
    result: h.qs("#result"),
    customers: h.qs("#customers"),
    contact: h.qs("#contact"),
    location: h.qs("#location"),
  };

  const {
    header,
    hero,
    services,
    equipments,
    cta3,
    aboutUs,
    result,
    customers,
    contact,
    location,
  } = selectors;

  const listOpacity = [
    hero,
    services,
    equipments,
    cta3,
    aboutUs,
    result,
    customers,
    contact,
    location,
  ];

  window.addEventListener("scroll", () => {
    window.scrollY > 50
      ? header.classList.add("scrolled")
      : header.classList.remove("scrolled");

    requestAnimationFrame(() => {
      listOpacity.forEach((section) => {
        let rect = section.getBoundingClientRect();
        const widthHeight = window.innerHeight;

        const start = widthHeight;
        const end = widthHeight / 2;

        let progress = (start - rect.top) / (start - end);

        progress = Math.max(0, Math.min(1, progress));
        section.style.setProperty("--progress", progress);
      });
    });
  });
}

export default animation;
