export const SITE = {
  name: "Aniisa Bihi",
  displayName: "ANIISA BIHI",
  email: "aniisaaden@gmail.com",
  resumePath: "/AniisaBihi_CV.pdf",
  url: import.meta.env.VITE_SITE_URL ?? "https://aniisabihi.github.io",
  defaultDescription:
    "Portfolio of Aniisa Bihi — software engineer building headless commerce platforms, developer tooling, and interactive web experiences.",
  defaultOgImage: "/img/aniisa.png",
} as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  work: "work",
  contact: "contact",
} as const;

export const NAV_SECTIONS = [
  { label: "ABOUT", sectionId: SECTION_IDS.about },
  { label: "EXPERIENCES", sectionId: SECTION_IDS.work },
  { label: "CONTACT", sectionId: SECTION_IDS.contact },
] as const;

export const SOCIAL_LINKS = [
  { label: "MAIL", href: "mailto:aniisaaden@gmail.com", external: false },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/aniisabihi/",
    external: true,
  },
  { label: "GITHUB", href: "https://github.com/aniisabihi", external: true },
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}
