import * as h from "../scritps/helper.js";

const liveStatus = (container) => {
  const local = container.includes("#")
    ? h.qs(container)
    : h.qs(`.${container}`);

  const elements = {
    div: h.cElement("div"),
    p: h.cElement("p"),
    i: h.cElement("i"),
  };

  const { div, p, i } = elements;

  i.setAttribute("data-lucide", "clock");
  let msg = h.textInput(status());

  Object.assign(div, {
    className: "atendimento",
    id: "status",
  });

  p.append(i, msg);
  p.setAttribute("title", `Seg-Sex: 9h-18h\nSáb (Online): 9h-12h`);

  div.appendChild(p);
  local.after(div);

  setInterval(() => {
    msg = `${status()}`;
  }, 60000);
};

function status() {
  const now = new Date();

  const localTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    hour12: false,
    weekday: "short",
    hour: "numeric",
  });

  const parts = localTime.formatToParts(now);

  const weekdayString = parts.find((p) => p.type === "weekday").value;
  const daysMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const day = daysMap[weekdayString];

  const hour = parseInt(parts.find((p) => p.type === "hour").value);

  let open = false;

  let msg = "";

  if (day === 0 || (day === 6 && hour >= 12)) {
    msg = "Fechado agora • Abre segunda às 9:00";
  } else if (day >= 1 && day <= 5) {
    if (hour >= 9 && hour < 18) {
      open = true;
      msg = "Aberto agora • Fecha às 18:00";
    } else if (hour < 9) {
      msg = "Fechado agora • Abre amanhã às 9:00";
    } else {
      msg =
        day == 5
          ? "Fechado agora • Abre sábado às 9:00"
          : "Fechado agora • Abre amanhã às 9:00";
    }
  } else if (day === 6 && hour < 12) {
    if (hour >= 9) {
      open = true;
      msg = "Aberto agora • Fecha amanhã às 12:00";
    } else {
      msg = "Fechado agora • Abre segunda às 9:00";
    }
  }

  return msg;
}

export default liveStatus;
