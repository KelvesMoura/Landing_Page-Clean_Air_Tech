export const qs = (selector) => document.querySelector(selector);

export const qsChild = (selector, parent = document) =>
  parent.querySelector(selector);

export const qsChildAll = (selector, parent = document) =>
  parent.querySelectorAll(selector);

export const cElement = (selector) => document.createElement(selector);

export const textInput = (content) => document.createTextNode(content);

export const renderIcon = () => {
  if (typeof window.lucide !== "undefined") window.lucide.createIcons();
};

export const list = (content) => {
  const ul = cElement("ul");

  content.forEach((l) => {
    const i = cElement("i");
    const li = cElement("li");
    i.setAttribute("data-lucide", "circle-check-big");
    li.appendChild(i);
    li.appendChild(textInput(l));
    ul.appendChild(li);
  });

  return ul;
};

export const property = (property, value) =>
  document.documentElement.style.setProperty(property, value);

export const formatAddress = (address) => {
  const { street, number, neighborhood, city, state, zipCode } = address;
  const addressList = [];

  const line1 = `${street}, ${number}`;
  const line2 = `${neighborhood} - ${city}/${state}`;
  const line3 = `CEP: ${zipCode}`;

  addressList.push(line1, line2, line3);

  return addressList;
};

export const formatWorkingTime = (workingTime) => {
  const { days } = workingTime;

  const formattedLines = days.slice(0, 2).map((item) => {
    let textDay = item.day;

    if (textDay === "Segunda a Sexta") textDay = "Seg-Sex";
    if (textDay === "Sábado") textDay = item.online ? "Sáb (Online)" : "Sáb";

    const textHour = item.hour.replaceAll(":00", "h").replace(/\s*-\s*/g, "-");

    return `${textDay}: ${textHour}`;
  });

  return formattedLines;
};

export const footerYear = (name) => {
  const year = new Date().getFullYear();
  const spanYear = qs("#year");
  const spanName = qs("#company-name");

  spanYear.innerText = year;
  spanName.innerText = name;
};

export const infoDev = (data) => {
  const { name, link } = data;
  const dev = qs("#dev");

  dev.appendChild(textInput(name));
  dev.href = link;
};
