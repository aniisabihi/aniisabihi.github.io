export const SITE = {
  name: "Aniisa Bihi",
  displayName: "ANIISA BIHI",
  email: "aniisaaden@gmail.com",
  resumePath: "/AniisaBihi_CV.pdf",
  url: import.meta.env.VITE_SITE_URL ?? "https://aniisabihi.github.io",
  defaultDescription:
    "Portfolio of Aniisa Bihi — software developer focused on frontend, UX, and information visualization.",
  defaultOgImage: "/img/aniisa.png",
} as const;

export const SOCIAL_LINKS = [
  { label: "MAIL", href: "mailto:aniisaaden@gmail.com", external: false },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/aniisabihi/",
    external: true,
  },
  { label: "GITHUB", href: "https://github.com/aniisabihi", external: true },
] as const;

export const NAV_LINKS = [
  { label: "WORK", to: "/" },
  { label: "ABOUT", to: "/about" },
] as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}
