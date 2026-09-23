export const SITE = {
  name: "Aniisa Bihi",
  email: "aniisaaden@gmail.com",
  resumePath: "/AniisaBihi_CV.pdf",
  url: import.meta.env.VITE_SITE_URL ?? "https://aniisabihi.github.io",
  defaultDescription:
    "Portfolio of Aniisa Bihi — curious full-stack developer who loves solving complex problems and turning AI and technology into practical, useful solutions.",
  defaultOgImage: "/img/aniisa.png",
} as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  work: "work",
  contact: "contact",
} as const;

export const NAV_SECTIONS = [
  { label: "About", sectionId: SECTION_IDS.about },
  { label: "Experiences", sectionId: SECTION_IDS.work },
  { label: "Contact", sectionId: SECTION_IDS.contact },
] as const;

export const SOCIAL_LINKS = [
  { label: "Email", href: "mailto:aniisaaden@gmail.com", external: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aniisabihi/",
    external: true,
  },
  { label: "GitHub", href: "https://github.com/aniisabihi", external: true },
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}
