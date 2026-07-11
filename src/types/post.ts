export type PostImage = {
  src: string;
  alt: string;
  variant: "width" | "height";
};

export type PostLink = {
  href: string;
  icon: string;
};

export type Post = {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  thumbnailSize?: "contain" | "cover";
  categories: string[];
  animationOrder: number;
  date: string;
  skills: string[];
  images: PostImage[];
  paragraphs: string[];
  links: PostLink[];
};

export type TypeFilter = "All" | "Extracurricular" | "Job" | "Project";

export type LanguageFilter =
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "C++"
  | "Python"
  | "WordPress"
  | "Matlab"
  | "C#"
  | "OpenGL";
