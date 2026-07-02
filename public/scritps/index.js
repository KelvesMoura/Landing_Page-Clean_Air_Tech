import * as h from "./helper.js";
import * as c from "./constant.js";
import button from "../components/button.js";
import liveStatus from "../components/liveStatus.js";
import benefits from "../components/benefits.js";
import cards from "../components/cards.js";
import services from "../components/services.js";
import equipments from "../components/equipments.js";
import beforeAfter from "../components/beforeAfter.js";
import carousel, { cloneCustomer } from "../components/carousel.js";
import titleIcon from "../components/titleIcon.js";
import workingStatus from "../components/workingStatus.js";
import createQrCode from "../components/qrCode.js";
import inputAddress from "../components/inputAddress.js";
import createMap from "../components/map.js";
import createSocialMedia from "../components/socialMedia.js";
import animation from "../scritps/animation.js";

c.benefitsData.forEach((data, i) => benefits(data, i + 1));

c.titleData.forEach((data) => {
  const { container, items } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    items.forEach((subEl) => {
      titleIcon(el, subEl);
    });
  });
});

c.workingTimeData.forEach((data) => {
  const { container, days } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    workingStatus(el, days);
  });
});

c.mapData.forEach((data) => {
  const { container, frame } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    createMap(el, frame);
  });
});

c.cardsData.forEach((data) => {
  const { container, items } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    items.forEach((subEl) => {
      cards(el, subEl);
    });
  });
});

c.servicesData.forEach((data) => services(data));

c.equipData.forEach((data) => equipments(data));

beforeAfter(c.resultData);

c.partnerData.forEach((data) => {
  const { container, customers } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    customers.forEach((subEl) => {
      carousel(el, subEl);
    });
    cloneCustomer(el);
  });
});

c.qrCodeData.forEach((data) => {
  const { container, items } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    items.forEach((subEl) => {
      createQrCode(el, subEl);
    });
  });
});

c.addressData.forEach((data) => inputAddress(data));

c.buttonData.forEach((data) => {
  const { container, items } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    items.forEach((subEl) => {
      button(el, subEl);
    });
  });
});

c.infoLive.forEach((container) => liveStatus(container));

c.parkingTitle.forEach((data) => {
  const { container, items } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    items.forEach((subEl) => {
      titleIcon(el, subEl);
    });
  });
});

c.socialMedia.forEach((data) => {
  const { container, media } = data;

  const targets = [].concat(container);

  targets.forEach((el) => {
    media.forEach((subEl) => {
      createSocialMedia(el, subEl);
    });
  });
});

h.footerYear(c.companyName);

h.infoDev(c.dev);

animation();

h.renderIcon();
