import type { Page, Site, Links, Info, Socials } from "@/types.ts";

export const SITE: Site = {
  TITLE: "Enzo Glow",
  DESCRIPTION: "Skin and Spa Services",
};

export const HOME: Page = {
  TITLE: "Home",
  DESCRIPTION: "Home page",
};

export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "Our story",
};

export const SERVICES: Page = {
  TITLE: "Services",
  DESCRIPTION: "Available services and prices",
};

export const PORTFOLIO: Page = {
  TITLE: "Portfolio",
  DESCRIPTION: "Pictures of our work",
};

export const FAQ: Page = {
  TITLE: "Frequently Asked Questions",
  DESCRIPTION: "Answers to common questions",
};

export const CONTACT: Page = {
  TITLE: "Contact",
  DESCRIPTION: "How to reach us and book services",
};

export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/enzo-glow-test/",
  },
  {
    TEXT: "About",
    HREF: "/enzo-glow-test/about",
  },
  {
    TEXT: "Services",
    HREF: "/enzo-glow-test/services",
  },
  // {
  //   TEXT: "Portfolio",
  //   HREF: "/enzo-glow-test/portfolio",
  // },
  {
    TEXT: "FAQs",
    HREF: "/enzo-glow-test/faqs",
  },
  {
    TEXT: "Contact",
    HREF: "/enzo-glow-test/contact",
  },
];

export const INFO: Info = {
  PHONE: "(508) 263-0158",
  PHONE_HREF: "tel:+15082630158",
  EMAIL: "glowwithenzo@gmail.com",
  EMAIL_HREF: "mailto:glowwithenzo@gmail.com",
  // ADDRESS: "",
};

export const SOCIALS: Socials = [
  {
    NAME: "Facebook",
    ICON: "ri:facebook-box-fill",
    TEXT: "Enzo Glow",
    HREF: "https://www.facebook.com/people/Enzo-Glow/61565697970120/",
  },
  {
    NAME: "Instagram",
    ICON: "ri:instagram-line",
    TEXT: "Enzo Glow",
    HREF: "https://www.instagram.com/enzo.glow",
  },
];
