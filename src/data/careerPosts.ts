import type { Post } from "../types/post";

/** Recent career roles (2021–present) */
export const CAREER_POSTS: Post[] = [
  {
    id: "haus",
    slug: "job-haus",
    category: "job",
    title: "Haus Tech | Full-Stack Developer",
    subtitle: "Headless commerce · WordPress · Dev tooling",
    date: "March 2025 – Present",
    skills: [
      "TypeScript",
      "React",
      "React Native",
      "PHP",
      "WordPress",
      "GraphQL",
      "Nx",
      "Node.js",
    ],
    images: [
      {
        src: "/posts/job/haus/1.png",
        alt: "Haus Tech",
        variant: "width",
      },
    ],
    paragraphs: [
      'I\'m a full-stack developer at <a href="https://haus.se/" target="_blank">Haus Tech</a>, working across headless commerce, WordPress plugin development, and internal developer-tooling infrastructure.',
      "My day-to-day spans TypeScript and React on the storefront side, PHP and WordPress where our commerce stack meets the CMS, and the tooling that keeps multiple repos and teams aligned — shared config, documentation, and automation to cut repeat work and config drift.",
      "After time away from the workforce for health reasons, I returned in March 2025 through a structured work-training placement at Haus Tech, arranged in cooperation with Arbetsförmedlingen and Försäkringskassan. I started at 25% and built back up to full-time, working throughout as a full member of the development team — same stand-ups, customer projects, and sprint planning as everyone else.",
      "What ties the role together is a focus on reliable delivery across headless commerce and platform work: modern TypeScript/React frontends, Vendure and GraphQL on the commerce side, and practical developer experience so teams can ship without fighting the setup.",
    ],
    links: [
      { href: "https://haus.se/", icon: "globe" },
      { href: "https://github.com/WeAreHausTech", icon: "github" },
      {
        href: "https://www.linkedin.com/company/haus-se/",
        icon: "linkedin",
      },
    ],
    thumbnail: "/illustrations/haus.png",
    thumbnailScale: 72,
    categories: [
      "Job",
      "JavaScript",
      "TypeScript",
      "React",
      "WordPress",
      "HTML",
      "CSS",
    ],
    animationOrder: 1,
  },
  {
    id: "vogue",
    slug: "job-vogue",
    category: "job",
    title: "Vogue Scandinavia | Frontend Developer",
    subtitle: "Digital platform · First in-house developer",
    date: "August 2022 – January 2023",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "JavaScript",
      "HTML",
      "CSS",
      "Sass",
      "Strapi",
    ],
    images: [
      {
        src: "/posts/job/vogue/1.png",
        alt: "Vogue Scandinavia",
        variant: "width",
      },
    ],
    paragraphs: [
      '<a href="https://voguescandinavia.com/" target="_blank">Vogue Scandinavia</a> is the Nordic edition of Vogue — an early-stage media startup covering Sweden, Denmark, Norway, Finland, and Iceland across print, digital, and social. I joined as the first in-house developer, brought in to move frontend development in-house from the outsourced team in Stockholm that had built the platform.',
      "My first weeks were spent alongside that team learning the platforms and the logic behind the services, before taking ownership of the frontend as an internally maintained product. I worked across the digital platform in React, Next.js, and Redux, with Sass and Tailwind for styling and Strapi as the headless CMS.",
      "The role reached beyond pure frontend: I integrated REST APIs, handled the technical side of marketing campaigns, and worked with site analytics through Google Analytics and Google Ads. As the sole in-house developer I sat close to the product, reporting to the Head of Technology and collaborating day to day with the creative and commercial teams.",
    ],
    links: [
      { href: "https://voguescandinavia.com/", icon: "globe" },
      {
        href: "https://www.linkedin.com/company/vogue-scandinavia/",
        icon: "linkedin",
      },
      {
        href: "https://www.instagram.com/voguescandinavia/",
        icon: "instagram",
      },
    ],
    thumbnail: "/illustrations/vogue.png",
    categories: ["Job", "JavaScript", "React", "HTML", "CSS"],
    animationOrder: 2,
  },
  {
    id: "capgemini",
    slug: "job-capgemini",
    category: "job",
    title: "Capgemini | Software Engineer",
    subtitle: "Ignite Graduate Program · Telia placement",
    date: "February 2021 – July 2022",
    skills: [
      "Java",
      "Spring MVC",
      "JSP",
      "SQL",
      "JavaScript",
      "SAFe",
      "DevOps",
      "Agile",
    ],
    images: [
      {
        src: "/posts/job/capgemini/1.jpg",
        alt: "Capgemini",
        variant: "width",
      },
    ],
    paragraphs: [
      'I started my career at <a href="https://www.capgemini.com/" target="_blank">Capgemini</a>, joining through the Ignite Graduate Program with a focus on Innovative Tech and Digital Customer Experience. Most of my time there was spent on client placement at <a href="https://www.telia.se/" target="_blank">Telia</a>, as a developer and test & quality specialist on a Capgemini DevOps delivery team.',
      "The team built and maintained Telia's internal order-management applications, working inside a large SAFe Agile Release Train. I contributed across the full development cycle but held primary responsibility for testing and quality, covering both manual and automated testing so that what shipped to the client stayed reliable.",
      "I joined the Telia project at its start, which meant helping shape the initial project structure and taking part in months of knowledge-transfer sessions with the application's previous development team before we took full ownership.",
      "Alongside the Telia placement I also handled an internal Capgemini assignment supporting the R2D2 staffing system in Sweden, coordinating consultant profiles and reporting across practice heads, account managers, and team leads. This period is also where I earned my Professional Scrum Master I (PSM I) certification and a SAFe Practitioner certification (since lapsed).",
    ],
    links: [
      { href: "https://www.capgemini.com/", icon: "globe" },
      { href: "https://www.linkedin.com/company/capgemini/", icon: "linkedin" },
    ],
    thumbnail: "/illustrations/capgemini.png",
    categories: ["Job", "JavaScript", "HTML", "CSS", "Java"],
    animationOrder: 3,
  },
];
