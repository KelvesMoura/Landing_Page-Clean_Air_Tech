# 🌬️ Clean Air Tech — Landing Page

A front-end landing page for **Clean Air Tech**, a company specialized in residential and commercial air conditioning in Matão/SP, Brazil. Built with **Vanilla JavaScript** and a fully modular component architecture, the project is data-driven — all page content is configured in a single central file and rendered dynamically through reusable components, with no frameworks or build tools.

---

## 🔗 Deploy

### 🔗 Access the page published here:

👉 https://kelvesmoura.github.io/Landing_Page-Clean_Air_Tech/

---

## Table of Contents

- [🔗 Deploy](#-deploy)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [JavaScript Architecture](#javascript-architecture)
  - [Orchestrator](#orchestrator)
  - [Components](#components)
  - [Helpers](#helpers)
  - [Central Data](#central-data)
- [Sections & Features](#sections--features)
- [📱 Mobile First & Responsiveness](#-mobile-first--responsiveness)
- [Getting Started](#getting-started)
- [External Dependencies](#external-dependencies)
- [License](#license)

---

## Project Overview

Single-page commercial landing page for an air conditioning company. Includes:

- Sticky scroll-aware header with blur effect and navigation menu
- Hero section with dual CTA buttons and entrance animation
- Scroll-driven section reveal via `requestAnimationFrame` + CSS custom properties
- Infinite partner logo carousel with automatic card cloning
- Interactive Before/After component with `clipPath` slider
- Real-time business status with timezone detection (`America/Sao_Paulo`)
- Google Maps embed iframe
- QR Codes, address, working hours and contact info rendered dynamically
- Footer with dynamic year and developer info

---

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Markup    | HTML5                                   |
| Styling   | Vanilla CSS (Modular)                   |
| Scripting | Vanilla JavaScript (ES6+ Modules)       |
| Icons     | Lucide (UMD local) + Font Awesome (CDN) |
| Fonts     | _(via global CSS)_                      |

---

## Project Structure

```
Landing_Page-Clean_Air_Tech/
├── index.html
├── README.md
├── .gitignore
├── package.json
├── node_modules/
│   └── lucide/
└── public/
    ├── assets/
    │   ├── favicon/
    │   │   └── favicon.ico
    │   └── img/
    │       ├── logo/
    │       │   └── logo-cleanairtech.webp
    │       ├── customers/          ← partner logos
    │       ├── products/           ← equipment photos
    │       ├── service/            ← before.webp / after.webp
    │       └── qr-code/            ← store and contact QR Codes
    ├── style/
    │   └── main.css
    └── scritps/
        ├── index.js               ← main orchestrator
        ├── animation.js           ← scroll reveal + header blur
        ├── helper.js              ← DOM utilities
        └── ../components/
            ├── button.js
            ├── cards.js
            ├── carousel.js
            ├── benefits.js
            ├── services.js
            ├── equipments.js
            ├── beforeAfter.js
            ├── titleIcon.js
            ├── workingStatus.js
            ├── liveStatus.js
            ├── inputAddress.js
            ├── map.js
            ├── qrCode.js
            └── socialMedia.js
```

---

## JavaScript Architecture

### Orchestrator

`public/scritps/index.js` is the logic entry point. It imports all components and iterates over the data from `constant.js`, calling each component with its respective `container` and `items`. No rendering logic lives here — only the orchestration of the page assembly order.

### Components

Each component follows the same signature: receives a `container` (class or ID string) and `items` (data object), creates elements via DOM API and injects them into the target container. No component uses `innerHTML` — all construction is done via `cElement`, `appendChild` and `textInput` from `helper.js`.

| Component          | Responsibility                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `button.js`        | CTA buttons — supports `inherit: "parent"` (direct append) or `"children"` (broadcast to all children of a parent container)                   |
| `cards.js`         | Generic cards with a container map — behavior (`gradient`, `adjacent`) defined per class                                                       |
| `carousel.js`      | Partner logo carousel: `carousel()` populates `.swiper`; `cloneCustomer()` duplicates cards and sets `--carousel-total-items` for the CSS loop |
| `benefits.js`      | Metric cards in the hero section (installations, warranty, years in market)                                                                    |
| `services.js`      | Service cards with Lucide icon, title, subtitle and sub-service list                                                                           |
| `equipments.js`    | Product cards with "Best Seller" and "In Stock" labels                                                                                         |
| `beforeAfter.js`   | Interactive before/after slider via `input[type=range]` + `clipPath: inset()`                                                                  |
| `titleIcon.js`     | Reusable icon + title block — `parent: true` uses `appendChild`, `false` uses `.after()`                                                       |
| `workingStatus.js` | Dynamically rendered working hours table                                                                                                       |
| `liveStatus.js`    | Real-time open/closed status using `Intl.DateTimeFormat` (timezone `America/Sao_Paulo`), updated every 60s                                     |
| `inputAddress.js`  | Address formatted into two lines                                                                                                               |
| `map.js`           | Google Maps embed iframe                                                                                                                       |
| `qrCode.js`        | QR Code image with caption                                                                                                                     |
| `socialMedia.js`   | Social media links with support for both Lucide and Font Awesome icons                                                                         |

### Helpers

`helper.js` centralizes all DOM utilities used by the components:

| Helper                | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `qs(selector)`        | Shorthand for `document.querySelector`                         |
| `qsChild(s, parent)`  | `querySelector` scoped to a parent element                     |
| `qsChildAll(s, p)`    | `querySelectorAll` scoped to a parent element                  |
| `cElement(tag)`       | Shorthand for `document.createElement`                         |
| `textInput(str)`      | Shorthand for `document.createTextNode`                        |
| `list(items)`         | Creates a `<ul>` with Lucide `circle-check-big` icons per item |
| `property(p, v)`      | Sets a CSS custom property on `:root`                          |
| `formatAddress(obj)`  | Formats an address object into an array of display lines       |
| `formatWorkingTime()` | Formats working hours into compact status display              |
| `footerYear(name)`    | Injects the current year and company name into the footer      |
| `infoDev(data)`       | Injects the developer name and link into the footer            |
| `renderIcon()`        | Calls `lucide.createIcons()` after DOM assembly is complete    |

### Central Data

`constant.js` is the **single source of truth** for the entire project. All company information (contact, address, working hours, products, partners, CTAs) is defined here as exported constants. To update the page content, only this file needs to be edited — no component or HTML file needs to be touched.

```js
// Example data structure
export const partnerData = [
  {
    container: ["customer-logo"],
    customers: [
      {
        name: "Agrivitta",
        src: "./public/assets/img/customers/agrivitta.webp",
      },
      // ...
    ],
  },
];
```

---

## Sections & Features

| Section        | Details                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------- |
| **Header**     | Logo, navigation links, "Call Now" CTA, scroll blur effect                                      |
| **Hero**       | Headline, dual CTAs (Quote + Schedule), metric cards (installations, warranty, years in market) |
| **Services**   | 3 service cards with sub-lists; individual CTA button per card; scroll reveal                   |
| **Products**   | 4 equipment cards with stock and best seller labels; scroll reveal                              |
| **CTA Banner** | Special offer with benefits (free delivery, installation deadline, warranty) and booking button |
| **About Us**   | Company history, timeline, differentials and metric cards; scroll reveal                        |
| **Result**     | Interactive Before/After slider with `clipPath` and dynamic labels                              |
| **Customers**  | Infinite carousel with 9 partner logos cloned automatically                                     |
| **Contact**    | Contact cards (phone, WhatsApp, email, Instagram) + working hours table + QR Codes              |
| **Location**   | Google Maps embed + address + live business status + action buttons                             |
| **Footer**     | Logo, description, service links, contacts, certifications, social media, dynamic year          |

---

## 📱 Mobile First & Responsiveness

> ⚠️ **Mobile support is currently under development.** The current version is optimized for desktop. Responsive implementation is planned for a future release.

The CSS base uses `clamp()` for typography and spacing to achieve fluid scaling between viewports, but layout breakpoints for smaller screens have not yet been fully implemented across all modules.

---

## Getting Started

No build step required. Install local dependencies and open `index.html` directly or serve it with any static file server:

```bash

# Serve with Node.js
npx http-server .

# Or with Python
python3 -m http.server
```

---

## External Dependencies

| Dependency   | Source    | Purpose                                                      |
| ------------ | --------- | ------------------------------------------------------------ |
| Lucide       | CDN (kit) | Icon set used across all components                          |
| Font Awesome | CDN (kit) | Social media icons (Instagram, Facebook, WhatsApp, Envelope) |

---

## License

This project is proprietary to **Clean Air Tech**. Developed and maintained by [M2K Soluções](https://kelvesmoura.com).

---

## 🔗 Repository

```bash
git clone https://github.com/KelvesMoura/Landing_Page-Clean_Air_Tech.git
```
