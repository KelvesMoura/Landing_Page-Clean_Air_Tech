import * as h from "../scritps/helper.js";

// ==========================================
// 0. DEV INFO
// ==========================================

export const dev = {
  name: "M2K Soluções",
  link: "https://kelvesmoura.com",
};

// ==========================================
// 1. CONFIGURATIONS AND LINKS
// ==========================================

export const companyName = "Clean Air Tech";

const foundationYear = 2023;
const servicesDone = 250;
const warranty = 6; //months
const installationTime = 72; //hours
const workingYear = `${new Date().getFullYear() - foundationYear} anos`;
const number = "(16) 99651-4574";
const whatsapp = "(16) 99651-4574";
const email = "contato@cleanairtech.com.br";
const instagram = "@cleanair.tech";
const address = {
  street: "Alameda da Saudade",
  number: "1037",
  neighborhood: "Centro",
  city: "Matão",
  state: "SP",
  zipCode: "15990-048",
};

const link = {
  btnPhone: "tel:5516996514574",
  btnKelli: "https://cleanairtech.com.br/kelli",
  btnLoja: "https://cleanairtech.com.br/loja",
  mail: `mailto:${email}`,
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.651183084441!2d-48.37481700472699!3d-21.59953476861471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91f961677432d%3A0x21fcebf97f5c9a6a!2sClean%20Air%20Tech%20Ar%20Condicionado!5e0!3m2!1spt-BR!2sbr!4v1781903527093!5m2!1spt-BR!2sbr",
  instagram: "https://cleanairtech.com.br/instagram",
  facebook: "https://cleanairtech.com.br/facebook",
};

const qrCode = {
  loja: "./public/assets/img/qr-code/QR-Code-Loja.webp",
  kelli: "./public/assets/img/qr-code/QR-Code-Kelli.webp",
};

// ==========================================
// 2. DYNAMIC LIST RENDERING
// ==========================================

export const socialMedia = [
  {
    container: ["social-media"],
    media: [
      {
        instagram: {
          link: link.instagram,
          icon: "fa-brands fa-instagram fa-xl",
          className: "white-label",
          font: "fontawesome",
        },
        facebook: {
          link: link.facebook,
          icon: "fa-brands fa-facebook fa-xl",
          className: "white-label",
          font: "fontawesome",
        },
      },
    ],
  },
];

export const workingTimeData = [
  {
    container: "working-time-info",
    days: [
      { day: "Segunda a Sexta", hour: "09:00 - 18:00", online: false },
      { day: "Sábado", hour: "08:00 - 12:00", online: true },
      { day: "Domingo", hour: "Fechado", online: false },
      { day: "Emergências", hour: "24horas", online: false },
    ],
  },
];

const workingTimeFormatted = h.formatWorkingTime(workingTimeData[0]);

// Note: If the `inherit` is set to `children`, the parent and child of the container must be separated by []
export const buttonData = [
  {
    container: "header .cta",
    items: [
      {
        value: "Ligar Agora",
        className: "btn-gradient",
        icon: "phone",
        link: link.btnPhone,
        inherit: "parent",
      },
    ],
  },
  {
    container: "title-hero .cta2",
    items: [
      {
        value: "Solicitar Orçamento",
        className: "btn-white",
        icon: "phone",
        link: link.btnPhone,
        inherit: "parent",
      },
      {
        value: "Agendar Instalação",
        className: "btn-transparent",
        icon: "calendar",
        link: link.btnKelli,
        inherit: "parent",
      },
    ],
  },
  {
    container: [["cards-service", "card-service"]],
    items: [
      {
        value: "Solicitar Serviço",
        className: "btn-gradient-body",
        icon: "",
        link: link.btnKelli,
        inherit: "children",
      },
    ],
  },
  {
    container: [["cards-product", "card-equipment"]],
    items: [
      {
        value: "Compra Agora",
        className: "btn-gradient-body",
        icon: "",
        link: link.btnKelli,
        inherit: "children",
      },
    ],
  },
  {
    container: "cta3",
    items: [
      {
        value: "Agendar Sua Instalação Agora",
        className: "btn-white",
        icon: "calendar",
        link: link.btnKelli,
        inherit: "parent",
      },
    ],
  },
  {
    container: "location-qrcode",
    items: [
      {
        value: "Agendar Visita",
        className: "btn-gradient-body",
        icon: "calendar",
        link: link.btnPhone,
        inherit: "parent",
      },
      {
        value: "Whatsapp",
        className: "btn-white",
        icon: "message-circle",
        link: link.btnKelli,
        inherit: "parent",
      },
    ],
  },
  {
    container: "info-location",
    items: [
      {
        value: "Como Chegar",
        className: "btn-gradient-body",
        icon: "navigation",
        link: link.btnLoja,
        inherit: "parent",
      },
    ],
  },
  {
    container: "cta4",
    items: [
      {
        value: "(16) 99651-4574",
        className: "btn-white",
        icon: "phone",
        link: link.btnPhone,
        inherit: "parent",
      },
    ],
  },
];

export const benefitsData = [
  { value: `${servicesDone}+`, label: "Instalações" },
  { value: `${warranty} meses`, label: "Garantia" },
  { value: workingYear, label: "Mercado" },
];

export const titleData = [
  {
    container: "contact-info",
    items: [
      {
        icon: "",
        title: "Fale Conosco",
        className: "title-line",
        parent: true,
      },
    ],
  },
  {
    container: "working-time-info",
    items: [
      {
        icon: "clock",
        title: "Horário de Atendimento",
        className: "title-line",
        parent: true,
      },
    ],
  },
  {
    container: ["location-qrcode", "info-location"],
    items: [
      {
        icon: "map-pin",
        title: "Nossa Localização",
        className: "title-line",
        parent: true,
      },
    ],
  },
  {
    container: ["contact"],
    items: [
      {
        icon: "phone",
        title: number,
        className: "title-line",
        parent: true,
      },
      {
        icon: "mail",
        title: email,
        className: "title-line",
        parent: true,
      },
      {
        icon: "map-pin",
        title: h.formatAddress(address),
        className: "title-line",
        parent: true,
      },
      {
        icon: "clock",
        title: workingTimeFormatted,
        className: "title-line",
        parent: true,
      },
    ],
  },
  {
    container: ["certification"],
    items: [
      {
        icon: "shield",
        title: "Garantia Estendida",
        className: "title-line",
        parent: true,
      },
      {
        icon: "award",
        title: "Qualidade Certificada",
        className: "title-line",
        parent: true,
      },
      {
        icon: "users",
        title: "Equipe Especializada",
        className: "title-line",
        parent: true,
      },
    ],
  },
];

export const parkingTitle = [
  {
    container: "#location .cards-location .address",
    items: [
      {
        icon: "car",
        title: "Estacionamento disponível",
        className: "title-line-2",
        parent: false,
      },
    ],
  },
];

export const cardsData = [
  {
    container: "advantage-hero",
    items: [
      {
        icon: "shield-check",
        font: "data-lucide",
        title: "Qualidade Cerfitificada",
        content:
          "Instalações com rastreabilidade completa e garantia estendida. Cada projeto é documentado e acompanhado.",
      },
      {
        icon: "award",
        font: "data-lucide",
        title: "Atendimento Diferenciado",
        content:
          "Equipe especializada com foco na excelência. Cuidado especial em cada detalhe da instalação.",
      },
      {
        icon: "users-round",
        font: "data-lucide",
        title: "Residencial & Empresarial",
        content:
          "Soluções completas para residências e empresas. Projetos personalizados para cada necessidade.",
      },
    ],
  },
  {
    container: "cards-benefit-service",
    items: [
      {
        icon: "clock",
        font: "data-lucide",
        title: "Atendimento Rápido",
        content:
          "Agendamento flexível e atendimento de emergência 24 horas para sua comididade.",
      },
      {
        icon: "star",
        font: "data-lucide",
        title: "Residencial & Empresarial",
        content:
          "Instalações diferenciadas com cuidado especial e atenção aos detalhes",
      },
      {
        icon: "phone",
        font: "data-lucide",
        title: "Suporte Completo",
        content:
          "Acompanhamento pós-instalação e suporte técnico especializado sempre disponível.",
      },
    ],
  },
  {
    container: "cards-benefit-equip",
    items: [
      {
        icon: "snowflake",
        font: "data-lucide",
        title: "Tecnologia Inverter",
        content: "Economia de até 60% na conta de energia.",
      },
      {
        icon: "award",
        font: "data-lucide",
        title: "Alta Eficiência",
        content: "Classificação energética A++ e A+++",
      },
      {
        icon: "leaf",
        font: "data-lucide",
        title: "Eco Friendly",
        content: "Gás refrigerante ecológico R32",
      },
      {
        icon: "bell-off",
        font: "data-lucide",
        title: "Baixo Ruído",
        content: "Operação silenciosa para seu conforto.",
      },
    ],
  },
  {
    container: "benefits-cta3",
    items: [
      {
        icon: "truck",
        font: "data-lucide",
        title: "Entrega Grátis",
        content: "",
      },
      {
        icon: "clock",
        font: "data-lucide",
        title: `Instalação em ${installationTime} horas`,
        content: "",
      },
      {
        icon: "check-circle",
        font: "data-lucide",
        title: `Garantia de Instalação de ${warranty} meses`,
        content: "",
      },
    ],
  },
  {
    container: "left-side .cards-about-us",
    items: [
      {
        icon: "check-circle",
        font: "data-lucide",
        title: "Qualidade Diferenciada",
        content:
          "Nosso foco é entregar instalações com qualidade superior, cuidando de cada detalhe para garantir a satisfação do cliente.",
      },
      {
        icon: "shield-check",
        font: "data-lucide",
        title: "Rastreabilidade Completa",
        content:
          "Cada projeto é documentado e acompanhado, proporcionando total transparência e controle de qualidade.",
      },
      {
        icon: "award",
        font: "data-lucide",
        title: "Atendimento Personalizado",
        content:
          "Entendemos que cada cliente tem necessidades únicas e oferecemos soluções personalizadas para cada situação.",
      },
    ],
  },
  {
    container: "right-side .cards-about-us",
    items: [
      {
        icon: "wrench",
        font: "data-lucide",
        title: `${servicesDone}+`,
        content: "Instalações Realizadas",
      },
      {
        icon: "shield-check",
        font: "data-lucide",
        title: warranty,
        content: "Meses de Garantia",
      },
      {
        icon: "star",
        font: "data-lucide",
        title: "98%",
        content: "Clientes Satisfeitos",
      },
      {
        icon: "user-round",
        font: "data-lucide",
        title: "24h",
        content: "Suporte Técnico",
      },
    ],
  },
  {
    container: "contact-info",
    items: [
      {
        icon: "phone",
        font: "data-lucide",
        title: ["Telefone", number],
        content: "Ligue agora para atendimento imediato",
        link: link.btnPhone,
      },
      {
        icon: "fa-brands fa-whatsapp fa-xl",
        font: "fontawesome",
        title: ["Whatsapp", whatsapp],
        content: "Chat direto pelo Whatsapp",
        link: link.btnKelli,
      },
      {
        icon: "fa-regular fa-envelope fa-xl",
        font: "fontawesome",
        title: ["Email", email],
        content: "Envie sua mensagem por e-mail",
        link: link.mail,
      },
      {
        icon: "fa-brands fa-instagram fa-xl",
        font: "fontawesome",
        title: ["Instagram", instagram],
        content: "Siga-nos no Instagram",
        link: link.instagram,
      },
    ],
  },
  {
    container: "working-time-info > hr:last-of-type",
    items: [
      {
        icon: "circle-check",
        font: "data-lucide",
        title: "Atendimento de Emergência",
        content: "Disponível 24 horas para situações urgentes",
      },
    ],
  },
  {
    container: "map-side",
    items: [
      {
        icon: "map-pin",
        font: "data-lucide",
        title: "Clean Air Tech",
        content: h.formatAddress(address),
      },
    ],
  },
];

export const servicesData = [
  {
    icon: "wrench",
    title: "Instalação Profissional",
    subtitle:
      "Instalação completa com rastreabilidade e documentação técnica. Garantia estendida e suporte especializado.",
    subservices: [
      "Projeto Técnico",
      "Instalação Certificada",
      "Documentação Completa",
      "Garantia de 3 meses",
    ],
  },
  {
    icon: "cog",
    title: "Manutenção Preventiva",
    subtitle:
      "Manutenção programada para máxima eficiência e durabilidade do seu equipamento.",
    subservices: [
      "Limpeza Completa",
      "Verificação Técnica",
      "Relatório Detalhado",
      "Agendamento Flexível",
    ],
  },
  {
    icon: "shield",
    title: "Manutenção Corretiva",
    subtitle:
      "Instalação completa com rastreabilidade e documentação técnica. Garantia estendida e suporte especializado.",
    subservices: [
      "Diagnóstico Preciso",
      "Peças Originais",
      "Reparo Garantido",
      "Atendimento Emergencial",
    ],
  },
];

export const equipData = [
  {
    bestSeller: true,
    src: "./public/assets/img/products/modern-split-air-conditioner-wall-mounted-resident.webp",
    stock: true,
    title: "Split Inverter",
    subtitle: "9.000 a 36.000 BTUs",
    features: ["Inverter", "A+++", "Wi-Fi", "Baixo Ruído"],
  },
  {
    bestSeller: false,
    src: "./public/assets/img/products/ceiling-cassette-air-conditioner-modern-residentia.webp",
    stock: true,
    title: "Split Cassete",
    subtitle: "18.000 a 60.000 BTUs",
    features: ["Inverter", "A+++", "Controle App", "Saída de Ar Ampla"],
  },
  {
    bestSeller: false,
    src: "./public/assets/img/products/modern-split-air-conditioner-wall-mounted-resident.webp",
    stock: true,
    title: "Split Hi-Wall",
    subtitle: "9.000 a 30.000 BTUs",
    features: ["Inverter", "A+++", "Multi-Zona", "Filtro HEPA"],
  },
  {
    bestSeller: false,
    src: "./public/assets/img/products/acessorios.webp",
    stock: true,
    title: "Acessórios de Tubulação",
    subtitle: "Qualidade Premium",
    features: ["Cobre e Conexões", "Isolante/PVC", "Suportes", "Infraembutida"],
  },
];

export const resultData = {
  beforePhoto: "./public/assets/img/service/before.webp",
  afterPhoto: "./public/assets/img/service/after.webp",
  container: "before-after",
};

export const partnerData = [
  {
    container: ["customer-logo"],
    customers: [
      {
        name: "Agrivitta",
        src: "./public/assets/img/customers/agrivitta.webp",
      },
      {
        name: "Alameda",
        src: "./public/assets/img/customers/alameda.webp",
      },
      {
        name: "Bambozzi",
        src: "./public/assets/img/customers/bambozzi.webp",
      },
      {
        name: "Biofertec",
        src: "./public/assets/img/customers/biofertec.webp",
      },
      {
        name: "Cartório 2° Tabelião Matão",
        src: "./public/assets/img/customers/cartorio-2-tabeliao-matao.webp",
      },
      {
        name: "Força da Terra",
        src: "./public/assets/img/customers/forca-da-terra.webp",
      },
      {
        name: "Igreja Universal",
        src: "./public/assets/img/customers/igreja-universal.webp",
      },
      {
        name: "Joga",
        src: "./public/assets/img/customers/joga.webp",
      },
      {
        name: "Tatu Marchesan",
        src: "./public/assets/img/customers/tatu-marchesan.webp",
      },
    ],
  },
];

export const qrCodeData = [
  {
    container: "location-qrcode",
    items: [
      {
        alt: "QR Code Localização da Loja",
        src: qrCode.loja,
        text: "Escaneie o QR Code para acessar nossa localização",
      },
    ],
  },
  {
    container: "certification",
    items: [
      {
        alt: "QR Code Contato da Kelli",
        src: qrCode.kelli,
        text: "Escaneie para acessar nossos contatos",
      },
    ],
  },
];

export const addressData = [
  {
    id: false,
    content: address,
    container: "location-qrcode",
  },
  {
    id: true,
    content: address,
    container: "info-location",
  },
];

export const infoLive = [
  "#menu",
  "info-location .address",
  "card-location div",
];

export const mapData = [
  {
    container: ["map"],
    frame: link.map,
  },
];
