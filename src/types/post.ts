export type PostImage = {
  src: string;
  alt: string;
  variant: "width" | "height";
};

export type PostVideo = {
  src: string;
  title?: string;
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
  /** Grid thumbnail scale as % width when logo needs tighter fit (default: contain) */
  thumbnailScale?: number;
  categories: string[];
  animationOrder: number;
  date: string;
  skills: string[];
  images: PostImage[];
  videos?: PostVideo[];
  paragraphs: string[];
  links: PostLink[];
};

export type TypeFilter = "All" | "Extracurricular" | "Work" | "Project";

export type LanguageFilter =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Java"
  | "PHP"
  | "HTML"
  | "CSS"
  | "C++"
  | "Python"
  | "WordPress"
  | "Matlab"
  | "C#"
  | "OpenGL";
