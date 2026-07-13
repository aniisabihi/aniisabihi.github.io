import type { Post } from "../types/post";
import { sortPostsByDate } from "../utils/sortPosts";
import { CAREER_POSTS } from "./careerPosts";

const LEGACY_POSTS: Post[] = [
  {
    id: "3cant",
    slug: "extracurricular-3cant",
    category: "extracurricular",
    title: "3Cant | Vice President",
    date: "July 2016 - July 2017",
    skills: ["Team Work", "Event Planning", "Project Management"],
    images: [
      {
        src: "/posts/extracurricular/3cant/1.jpg",
        alt: "3cant",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/3cant/2.png",
        alt: "3cant",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/3cant/3.jpg",
        alt: "3cant",
        variant: "width",
      },
    ],
    paragraphs: [
      "I was apart of the board for 3Cant 16/17 as Vice President and the Media Technology Advocate, the link between 3Cant and the board for the Media Technology program. 3Cant is the event committee for the civil engineer students at Campus Norrköping, LiU. The 3Cant board arranges parties, dinners, and other events during their active year, and also perform at events. During my time in 3Cant, I learned a lot about working in a team of 11 members and how to lead a group when I had to fill in as Vice President. There were a lot of stressful times that we went through, and one of the best experiences were unifying as a group during those times and supporting each other.",
    ],
    links: [
      {
        href: "http://3cant.com/",
        icon: "globe",
      },
      {
        href: "https://www.facebook.com/3Cant",
        icon: "facebook",
      },
      {
        href: "https://www.instagram.com/3cant/",
        icon: "instagram",
      },
    ],
    subtitle: "Vice President & Media Technology Advocate",
    thumbnail: "/illustrations/3cant.png",
    categories: ["Extracurricular"],
    animationOrder: 6,
  },
  {
    id: "mt",
    slug: "extracurricular-mt",
    category: "extracurricular",
    title: "The Media Technology Board | Board Member",
    date: "July 2016 - July 2017",
    skills: ["Team Work", "Event Planning", "Project Management"],
    images: [
      {
        src: "/posts/extracurricular/mt/1.jpg",
        alt: "mt",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mt/2.jpg",
        alt: "mt",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mt/3.jpg",
        alt: "mt",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mt/4.jpg",
        alt: "mt",
        variant: "width",
      },
    ],
    paragraphs: [
      "I was apart of the board for Media Technology 16/17, as the link between Media Technology and the board for 3Cant. Two of my responsibilities during the year was arranging a yearly Media Technology sitting and graduation sitting for the last year civil engineer students at Campus Norrköping, LiU. I planned the graduation sitting together with two other members of 3Cant who represented the other civil engineering programs. The cooperation allowed me the opportunity to work in a smaller team of 3 people and being the team leader.",
    ],
    links: [
      {
        href: "https://medieteknik.nu/",
        icon: "globe",
      },
      {
        href: "https://www.facebook.com/mtsektionen",
        icon: "facebook",
      },
      {
        href: "https://www.instagram.com/mtsektionen/",
        icon: "instagram",
      },
    ],
    subtitle: "Event & 3Cant Advocate",
    thumbnail: "/illustrations/mt.png",
    categories: ["Extracurricular"],
    animationOrder: 3,
  },
  {
    id: "mtd",
    slug: "extracurricular-mtd",
    category: "extracurricular",
    title: "Media Technology Days | Project Leader",
    date: "July 2018 - July 2019",
    skills: ["Team Work", "Event Planning", "Project Management"],
    images: [
      {
        src: "/posts/extracurricular/mtd/2.jpg",
        alt: "mtd",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mtd/3.jpg",
        alt: "mtd",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mtd/4.jpg",
        alt: "mtd",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mtd/5.jpg",
        alt: "mtd",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mtd/6.jpg",
        alt: "mtd",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/mtd/7.jpg",
        alt: "mtd",
        variant: "width",
      },
    ],
    paragraphs: [
      "Media Technology Days are the labour market days for civil engineers in Media Technology at Linköping University. Media Technology Days is a nonprofit event run by students and for students. The purpose is to establish contacts between students, media technicians in working life and companies in the industry. The fair stretches over two days with plenty of companies, activities, contests, inspiring lectures, and the event concludes with a large banquet.",
      "My role as Project Leader was to create a project group with talented students to help plan the fair. I was apart of assigning everyone a role and made sure that they did their job. As Project Leader, my most important part was to make sure the group worked well together, handled any issues that may have occurred, take final decisions and lead the group. It was one of the most challenging and rewarding experience during my time at LiU.",
    ],
    links: [
      {
        href: "https://www.medieteknikdagarna.se/",
        icon: "globe",
      },
      {
        href: "https://www.facebook.com/medieteknikdagarna",
        icon: "facebook",
      },
      {
        href: "https://www.instagram.com/medieteknikdagarna/",
        icon: "instagram",
      },
    ],
    subtitle: "Work Fair Project Group",
    thumbnail: "/illustrations/mtd.png",
    categories: ["Extracurricular"],
    animationOrder: 2,
  },
  {
    id: "nkpg",
    slug: "extracurricular-nkpg",
    category: "extracurricular",
    title: "NKPG Match Up | Project Leader",
    date: "November 2017 - February 2018",
    skills: [
      "Web Development",
      "Team Work",
      "Event Planning",
      "Project Management",
    ],
    images: [
      {
        src: "/posts/extracurricular/nkpg/1.jpg",
        alt: "nkpg",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/nkpg/2.jpg",
        alt: "nkpg",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/nkpg/3.jpg",
        alt: "nkpg",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/nkpg/4.png",
        alt: "nkpg",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/nkpg/5.png",
        alt: "nkpg",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/nkpg/6.png",
        alt: "nkpg",
        variant: "width",
      },
      {
        src: "/posts/extracurricular/nkpg/7.png",
        alt: "nkpg",
        variant: "width",
      },
    ],
    paragraphs: [
      "I was one of five Project Leaders for NKPG Match Up 2018, an evening for students to socialize and create contacts with different companies in the region. NKPG Match Up was sponsored by Norrköping Kommun, with the project group organizing it. I was responsible for contacting and communicating with Media Technology-related companies, and also contact with MT students. Excluding all the planning and execution made in groups, I was also responsible for maintaining our website as well as social media.",
      "This project consisted of a small group with members from different programs, which brought in a lot of different perspectives and talents. We made sure that everyone had responsibilities that matched their knowledge but also learned a lot from each other. Sadly, NKPG Match Up 2018 was the last year of the event, and therefore the website is not active.",
      "I did not create the original website instead the screenshots showed are from the year I managed it.",
    ],
    links: [
      {
        href: "https://github.com/aniisabihi/NKPG-Match-Up-2018",
        icon: "github",
      },
      {
        href: "https://www.facebook.com/nkpgmatchup/",
        icon: "facebook",
      },
      {
        href: "https://www.instagram.com/nkpg_matchup/",
        icon: "instagram",
      },
    ],
    subtitle: "Work Fair Project Group",
    thumbnail: "/illustrations/nkpg.png",
    categories: ["Extracurricular", "JavaScript", "HTML", "CSS"],
    animationOrder: 5,
  },
  {
    id: "ska",
    slug: "work-ska",
    category: "work",
    title: "SKA | Web Developer",
    date: "December 2017 - May 2018",
    skills: ["WordPress", "HTML", "CSS", "Client Relations"],
    images: [
      {
        src: "/posts/work/ska/1.png",
        alt: "ska",
        variant: "width",
      },
      {
        src: "/posts/work/ska/2.png",
        alt: "ska",
        variant: "width",
      },
      {
        src: "/posts/work/ska/3.png",
        alt: "ska",
        variant: "width",
      },
      {
        src: "/posts/work/ska/4.png",
        alt: "ska",
        variant: "width",
      },
      {
        src: "/posts/work/ska/5.png",
        alt: "ska",
        variant: "width",
      },
      {
        src: "/posts/work/ska/6.png",
        alt: "ska",
        variant: "width",
      },
    ],
    paragraphs: [
      "I developed a new website for the program of Social and Cultural Analysis (SKA) at Linköping University. The goal and requirement from SKA were that students lacking web knowledge could manage the new website. Therefore, I decided to work with WordPress hosted via One.com. SKA provided me with design ideas and the content, and I worked independently putting their requests together. The project was personally rewarding and gave me a chance to practice communication between developer and client.",
    ],
    links: [
      {
        href: "http://www.skasektionen.nu/",
        icon: "globe",
      },
    ],
    subtitle: "Web development",
    thumbnail: "/illustrations/ska.png",
    categories: ["Work", "WordPress", "CSS"],
    animationOrder: 4,
  },
  {
    id: "summercamp",
    slug: "work-summercamp",
    category: "work",
    title: "Code Summer Camp | Programming Coach",
    date: "June 2019",
    skills: ["Teaching", "HTML", "CSS", "JavaScript"],
    images: [
      {
        src: "/posts/work/summercamp/1.jpg",
        alt: "summercamp",
        variant: "width",
      },
      {
        src: "/posts/work/summercamp/2.jpg",
        alt: "summercamp",
        variant: "width",
      },
      {
        src: "/posts/work/summercamp/3.jpg",
        alt: "summercamp",
        variant: "width",
      },
      {
        src: "/posts/work/summercamp/4.jpg",
        alt: "summercamp",
        variant: "width",
      },
    ],
    paragraphs: [
      "Code Summer Camp is a camp where 120 children between the ages of 7-17 are allowed to learn and develop their programming and problem-solving skills. As a coach, I was there to teach and help the children learn, as well as leading programming workshops. The job allowed me to practice teaching my skills to others, a good practice for future work in teams.",
    ],
    links: [
      {
        href: "https://linkopingsciencepark.se/summercamp/",
        icon: "globe",
      },
      {
        href: "https://www.facebook.com/codesummercamp",
        icon: "facebook",
      },
    ],
    subtitle: "Programming Coaching",
    thumbnail: "/illustrations/summercamp.png",
    categories: ["Work"],
    animationOrder: 3,
  },
  {
    id: "summermatch",
    slug: "work-summermatch",
    category: "work",
    title: "Summer Match | App Developer",
    date: "June 2018 - August 2018",
    skills: ["JavaScript", "React Native", "Client Relations"],
    images: [
      {
        src: "/posts/work/summermatch/1.gif",
        alt: "summermatch",
        variant: "width",
      },
      {
        src: "/posts/work/summermatch/2.png",
        alt: "summermatch",
        variant: "width",
      },
      {
        src: "/posts/work/summermatch/3.gif",
        alt: "summermatch",
        variant: "width",
      },
      {
        src: "/posts/work/summermatch/4.png",
        alt: "summermatch",
        variant: "width",
      },
    ],
    paragraphs: [
      "The Summer Match via LiU Innovation is a collaboration between researchers and students in various projects. My project based on creatively collecting results with another student. The task was to create the first version of an application that supports risk analysis in an industrial context. The job also involved researching whether or not the task was possible to execute. The application was developed with React Native and resulted in a proof-of-concept for the researcher in my team.",
      "Since the project has professional secrecy, I can not share details or images. I instead added some pictures taken during that time at DoSpace's office environment at Mjärdevi, Linköping.",
    ],
    links: [
      {
        href: "https://lead.se/sommarmatchen/",
        icon: "globe",
      },
    ],
    subtitle: "App Development",
    thumbnail: "/illustrations/summermatch.png",
    categories: ["Work", "JavaScript"],
    animationOrder: 3,
  },
  {
    id: "weknowit",
    slug: "work-weknowit",
    category: "work",
    title: "We Know IT | Webb Consultant",
    date: "April 2020 - November 2020",
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
    images: [
      {
        src: "/posts/work/weknowit/1.png",
        alt: "weknowit",
        variant: "width",
      },
      {
        src: "/posts/work/weknowit/2.png",
        alt: "weknowit",
        variant: "width",
      },
    ],
    paragraphs: [
      '<a href="https://weknowit.se/" target="_blank">We Know IT</a> is a student-driven consulting company where students can try out working as a consultant before graduating. The work at WKIT is meritorious and educational. My assignments have been in WordPress, independently helping clients create websites for their companies. I have been able to work in teams that include a project leader, consultant and advisor. WKIT has taught me how to manage a client order and a requirement specification and to keep regular client contact.',
    ],
    links: [
      {
        href: "https://weknowit.se/",
        icon: "globe",
      },
      {
        href: "https://www.linkedin.com/company/we-know-it/",
        icon: "linkedin",
      },
      {
        href: "https://www.facebook.com/WeKnowITswe",
        icon: "facebook",
      },
      {
        href: "https://www.instagram.com/weknowitswe/",
        icon: "instagram",
      },
    ],
    subtitle: "Web Development",
    thumbnail: "/illustrations/wkit.png",
    categories: ["Work", "WordPress", "JavaScript", "HTML", "CSS"],
    animationOrder: 1,
  },
  {
    id: "connex",
    slug: "project-connex",
    category: "project",
    title: "Connex | Group Project",
    date: "November 2018 - December 2018",
    skills: ["Graphic Design", "Concept Design"],
    images: [
      {
        src: "/posts/project/connex/1.png",
        alt: "connex",
        variant: "width",
      },
      {
        src: "/posts/project/connex/2.png",
        alt: "connex",
        variant: "width",
      },
      {
        src: "/posts/project/connex/3.png",
        alt: "connex",
        variant: "width",
      },
      {
        src: "/posts/project/connex/4.png",
        alt: "connex",
        variant: "width",
      },
      {
        src: "/posts/project/connex/5.png",
        alt: "connex",
        variant: "width",
      },
    ],
    paragraphs: [
      "I worked on this project in a group of 4 in the master course Graphic Design and Communication. The goal of the course was to create a product similar to but “better than LinkedIn”, and create a graphic profile for that product. The project included creating a product concept, product name, product brand and graphical content. The purpose of the course was to learn the process behind creating a product identity and the graphic material that is required. The project taught us how to present a product in a way that attracts users which included creating mockups for a website, flyers, posters and a roll-up.",
    ],
    links: [
      {
        href: "connex_graphic_profile.pdf",
        icon: "file-photo-o",
      },
      {
        href: "connex_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Graphic Design and Communication",
    thumbnail: "/illustrations/connex.png",
    categories: ["Project"],
    animationOrder: 6,
  },
  {
    id: "doodle",
    slug: "project-doodle",
    category: "project",
    title: "Doodle | Group Project",
    date: "September 2019 - October 2019",
    skills: [
      "JavaScript",
      "TensorFlow",
      "Google Colaboratory",
      "Machine Learning",
      "AI",
    ],
    images: [
      {
        src: "/posts/project/doodle/1.png",
        alt: "doodle",
        variant: "width",
      },
      {
        src: "/posts/project/doodle/2.png",
        alt: "doodle",
        variant: "width",
      },
      {
        src: "/posts/project/doodle/3.png",
        alt: "doodle",
        variant: "width",
      },
    ],
    paragraphs: [
      "I worked on this project in a group of 2 in the master course Artificial Intelligence for Interactive Media. The goal was to create a game that presents the user with a word to draw that the implemented model would then guess the word. If the model guessed the doodle correct then a new word would appear for the user to draw. To reach this goal a training model was created using Google's data set and TensorFlows tutorial for recurrent Neural Networks. 100 categories out of 345 were selected from the data set and 6000 images per class were trained and tested for the model. The model was created out of three convolutional layers and two dense layers. Depending on the user’s doodle and that user’s perception of the object presented, the model will perform differently. In the end, it became an abstract question on how one object looks and how the majority of the population choose to represent them when faced with the task to draw that object.",
    ],
    links: [
      {
        href: "https://aniisabihi.github.io/TNM095-AI-doodle/",
        icon: "globe",
      },
      {
        href: "https://github.com/aniisabihi/TNM095-AI-doodle",
        icon: "github",
      },
      {
        href: "doodle_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "AI for Interactive Media",
    thumbnail: "/illustrations/doodle.png",
    categories: ["Project", "Python", "JavaScript", "HTML", "CSS"],
    animationOrder: 6,
  },
  {
    id: "humanfreedom",
    slug: "project-humanfreedom",
    category: "project",
    title: "Human Freedom Index | Group Project",
    date: "February 2019 - March 2019",
    skills: ["JavaScript", "HTML", "CSS", "d3.js"],
    images: [
      {
        src: "/posts/project/humanfreedom/1.png",
        alt: "humanfreedom",
        variant: "width",
      },
      {
        src: "/posts/project/humanfreedom/2.png",
        alt: "humanfreedom",
        variant: "width",
      },
      {
        src: "/posts/project/humanfreedom/3.png",
        alt: "humanfreedom",
        variant: "width",
      },
      {
        src: "/posts/project/humanfreedom/4.png",
        alt: "humanfreedom",
        variant: "width",
      },
    ],
    paragraphs: [
      "I worked on this project in a group of 3 students in the master course Information Visualization. The project consisted of the experimental process of creating a visualization of geospatial multivariate data using animations. A common problem with information visualization is to visualize multivariate data. My group wanted to test if animations or patterns could be used in an intuitive way to visualize multiple variables in a way that is also user friendly.",
      "Different types of animations and patterns were implemented and combined with simple colour scale visualizations. The data set used is The Human Freedom Index’s data set. It is a comprehensive global measurement of human freedom collected from 162 countries around the world. The data set contains 79 different categories as indicators of personal, civil and economic freedom. Each category has an index that ranges between the values 0 to 10, where the lower the value the lesser freedom and vice versa.",
      "The implementation was in the form of a web application, using JavaScript 6, HTML and CSS. The javascript library d3.js was used to manipulate the visualizations based on the data, this was done with the help of SVG. The world map was set to an SVG element and by using d3’s .attr() the countries could be filled with textures by the SVG path fill attribute. To fill the countries with animated textures, JavaScript and the SVG elements animate and animateTransfrom were used. The end product is an interactive web application displaying an animated geovisualization. It was concluded that animations can show multivariate data by either alternating between two visualizations or by being used as an attribute.",
    ],
    links: [
      {
        href: "https://aniisabihi.github.io/TNM048-Information-Visualization-Project/",
        icon: "globe",
      },
      {
        href: "https://github.com/aniisabihi/TNM048-Information-Visualization-Project",
        icon: "github",
      },
      {
        href: "humanfreedom_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Information Visualization",
    thumbnail: "/illustrations/humanfreedom.png",
    categories: ["Project", "JavaScript", "HTML", "CSS"],
    animationOrder: 4,
  },
  {
    id: "meowt",
    slug: "project-meowt",
    category: "project",
    title: "Meowt | Group Project",
    date: "February 2019 - March 2019",
    skills: ["UX", "User Interface Design", "Graphic Design", "App Design"],
    images: [
      {
        src: "/posts/project/meowt/1.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/2.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/3.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/4.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/5.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/6.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/7.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/8.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/9.png",
        alt: "meowt",
        variant: "height",
      },
      {
        src: "/posts/project/meowt/10.png",
        alt: "meowt",
        variant: "height",
      },
    ],
    paragraphs: [
      "I worked on this project in a group of four in the master course Structural Methods for User Experience (UX). The project consists of the process of creating a prototype application for an automated cat door. The purpose and goal of the project were producing a prototype that meets the needs and requirements of the set target group. The target group consisted of cat owners who want to be able to use an application as an aid to have extra control over their cat. To specify the target group's needs and requirements, the group performed a field study, in which wishes on the application's functions emerged. The prototype created met the needs of the target group by allowing the cat owner to regulate the cat's outdoor habits according to both the cat and the cat owner's preference. Finally, the project resulted in a user-friendly prototype with a stylish and easy-to-use design.",
    ],
    links: [
      {
        href: "meowt_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Structural Methods for User Experience (UX)",
    thumbnail: "/illustrations/meowt.png",
    categories: ["Project"],
    animationOrder: 1,
  },
  {
    id: "mosaic",
    slug: "project-mosaic",
    category: "project",
    title: "Mosaic | Group Project",
    date: "February 2019 - March 2019",
    skills: ["Matlab"],
    images: [
      {
        src: "/posts/project/mosaic/2.gif",
        alt: "mosaic",
        variant: "width",
      },
      {
        src: "/posts/project/mosaic/1.gif",
        alt: "mosaic",
        variant: "width",
      },
      {
        src: "/posts/project/mosaic/3.gif",
        alt: "mosaic",
        variant: "width",
      },
      {
        src: "/posts/project/mosaic/4.gif",
        alt: "mosaic",
        variant: "width",
      },
    ],
    paragraphs: [
      "I worked on this project with another student, in the master course Image Reproduction and Image Quality. The purpose of the project was to reproduce an image using a database of 250 images. The images were chosen so the database would have a wide range of images. The goal was for the database to contain as many colours as possible. When an image is reproduced, the most suitable images are selected from the database based on the colour difference in the unit-independent colour system CIELAB. The reproduced image should resemble the original image as much as possible from a long distance, but the small images should be visible from a short distance. The smaller images that reproduce the original image, the better the detailed representation of the original image will be.",
    ],
    links: [
      {
        href: "https://github.com/aniisabihi/TNM097-Image-reproduction-project",
        icon: "github",
      },
      {
        href: "mosaic_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Image Reproduction and Image Quality",
    thumbnail: "/illustrations/mosaic.png",
    thumbnailSize: "cover",
    categories: ["Project", "Matlab"],
    animationOrder: 5,
  },
  {
    id: "openspace",
    slug: "project-openspace",
    category: "project",
    title: "OpenSpace | Master Thesis",
    date: "June 2020 - November 2020",
    skills: ["C++", "Python", "Lua", "OpenGL", "Visual Studio"],
    images: [
      {
        src: "/posts/project/openspace/os.png",
        alt: "os",
        variant: "width",
      },
      {
        src: "/posts/project/openspace/1.png",
        alt: "os1",
        variant: "width",
      },
      {
        src: "/posts/project/openspace/2.png",
        alt: "os2",
        variant: "width",
      },
      {
        src: "/posts/project/openspace/3.png",
        alt: "os3",
        variant: "width",
      },
      {
        src: "/posts/project/openspace/4.png",
        alt: "os4",
        variant: "width",
      },
      {
        src: "/posts/project/openspace/5.png",
        alt: "os5",
        variant: "width",
      },
    ],
    paragraphs: [
      'My master thesis was for <a href="https://www.openspaceproject.com/" target="_blank">The OpenSpace Project</a> in collaboration with <a href="https://liu.se/" target="_blank">Linköping\'s University</a> and <a href="https://www.utah.edu/" target="_blank">The University of Utah</a>. Funded in part by NASA, OpenSpace brings the latest techniques from data visualization research to the general public. OpenSpace is an open-source interactive data visualization software, used partly by astronomers. My thesis aimed to create a messaging protocol for OpenSpace that can be used by other astronomy software tools to interoperate with OpenSpace. My associate and I developed the messaging protocol in C++, and to test the protocol a plugin for astronomy tool Glue was developed in Python.',
      "The images above are screenshots I've taken in OpenSpace.",
    ],
    links: [
      {
        href: "https://www.openspaceproject.com/",
        icon: "globe",
      },
      {
        href: "https://github.com/OpenSpace/OpenSpace/tree/thesis/2020/software-integration/modules/softwareintegration",
        icon: "github",
      },
      {
        href: "https://github.com/aniisabihi/glue-openspace-thesis",
        icon: "github-square",
      },
      {
        href: "https://www.facebook.com/OpenSpaceVisualization",
        icon: "facebook",
      },
      {
        href: "https://www.instagram.com/openspaceproj/",
        icon: "instagram",
      },
    ],
    subtitle: "Astronomy Software Integration",
    thumbnail: "/illustrations/openspace.png",
    categories: ["Work", "Project", "C++", "Python", "OpenGL"],
    animationOrder: 2,
  },
  {
    id: "portfolio",
    slug: "project-portfolio",
    category: "project",
    title: "Portfolio | Solo Project",
    date: "September 2020",
    skills: ["HTML", "CSS", "JavaScript", "Slick.js"],
    images: [
      {
        src: "/posts/project/portfolio/2.png",
        alt: "portfolio",
        variant: "width",
      },
      {
        src: "/posts/project/portfolio/3.png",
        alt: "portfolio",
        variant: "width",
      },
      {
        src: "/posts/project/portfolio/4.png",
        alt: "portfolio",
        variant: "width",
      },
      {
        src: "/posts/project/portfolio/5.png",
        alt: "portfolio",
        variant: "width",
      },
    ],
    paragraphs: [
      "This project intends to show potential employers the work I have done in the past. The idea was to create a simple and colourful portfolio that shows off my personality and creativity. The colours are some of my favourite pastel colours and represent the bubbly side of myself. I also made all the illustrations on the experience-page, with some of them being based of existing logos.",
      "This project also allowed me to try out Slick.js for the first time, a fully responsive & flexible jQuery carousel plugin. I also created a font of my handwriting that I used in my about page to make it more personal.",
      "The images shown are mockups of the website that I created before development, and the colour scheme I chose.",
    ],
    links: [
      {
        href: "https://aniisabihi.github.io",
        icon: "globe",
      },
      {
        href: "https://github.com/aniisabihi/aniisabihi.github.io",
        icon: "github",
      },
    ],
    subtitle: "Web Development",
    thumbnail: "/illustrations/portfolio.png",
    categories: ["Project", "JavaScript", "HTML", "CSS"],
    animationOrder: 5,
  },
  {
    id: "prisma",
    slug: "project-prisma",
    category: "project",
    title: "Prism | Group Project",
    date: "January 2018 - March 2018",
    skills: ["Matlab", "C++", "OpenGL", "Visual Studio"],
    images: [
      {
        src: "/posts/project/prisma/1.jpg",
        alt: "prisma",
        variant: "width",
      },
      {
        src: "/posts/project/prisma/2.jpg",
        alt: "prisma",
        variant: "width",
      },
      {
        src: "/posts/project/prisma/3.gif",
        alt: "prisma",
        variant: "width",
      },
    ],
    paragraphs: [
      "This project consisted of the modelling and simulation of a physical phenomenon, in this case, a ray of light passing through a prism. I worked on this project in a group of 5 in the bachelor course Modelling and Simulation. The result of the project shows what the dispersion from a prism made of glass looks like when the prism rotates around its z-axis. The rotation consists of sending the angular velocity into a differential equation which then calculates the next position of the prism. A beam is sent through the prism which is refracted depending on the angle of incidence and the radius of output consists of a colour spectrum.",
    ],
    links: [
      {
        href: "https://github.com/aniisabihi/TNM085-Modelling-Project",
        icon: "github",
      },
      {
        href: "prisma_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Modelling and Simulation",
    thumbnail: "/illustrations/prism.png",
    categories: ["Project", "C++", "Matlab"],
    animationOrder: 1,
  },
  {
    id: "solarsystem",
    slug: "project-solarsystem",
    category: "project",
    title: "Solar System | Solo Project",
    date: "February 2020 - May 2020",
    skills: ["WebGL", "JavaScript", "Three.js", "OrbitControls.js", "dat.GUI"],
    images: [
      {
        src: "/posts/project/solarsystem/1.png",
        alt: "solarsystem",
        variant: "width",
      },
      {
        src: "/posts/project/solarsystem/2.png",
        alt: "solarsystem",
        variant: "width",
      },
      {
        src: "/posts/project/solarsystem/4.png",
        alt: "solarsystem",
        variant: "width",
      },
      {
        src: "/posts/project/solarsystem/5.png",
        alt: "solarsystem",
        variant: "width",
      },
      {
        src: "/posts/project/solarsystem/6.png",
        alt: "solarsystem",
        variant: "width",
      },
    ],
    paragraphs: [
      "This project consisted of creating a solar system with an editable procedural sun as the main object. I worked independently on this project in the master course Procedural Methods for Images. The main frameworks and libraries used are WebGL, JavaScript, Three.js, OrbitControls.js and dat.GUI. The result of the project is a web-based application that contains a solar system with a procedural sun and planets with textures. The parameters set for the sun can be changed and experimented with using controls provided by a GUI. This project allowed me to try out the framework Three.js that includes a lot of functions for WebGL.",
    ],
    links: [
      {
        href: "https://aniisabihi.github.io/Procedural-Solar-System/",
        icon: "globe",
      },
      {
        href: "https://github.com/aniisabihi/Procedural-Solar-System",
        icon: "github",
      },
      {
        href: "solarsystem_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Procedural Methods for Images",
    thumbnail: "/illustrations/solarsystem.png",
    categories: ["Project", "JavaScript", "HTML", "CSS", "OpenGL"],
    animationOrder: 4,
  },
  {
    id: "touchhockey",
    slug: "project-touchhockey",
    category: "project",
    title: "TouchHockey | Bachelor Project",
    date: "January 2018 - June 2018",
    skills: ["C#", "Unity", "Visual Studio", "Game Design", "Scrum"],
    images: [
      {
        src: "/posts/project/touchhockey/1.jpg",
        alt: "touchhockey",
        variant: "width",
      },
      {
        src: "/posts/project/touchhockey/2.jpg",
        alt: "touchhockey",
        variant: "width",
      },
      {
        src: "/posts/project/touchhockey/3.jpg",
        alt: "touchhockey",
        variant: "width",
      },
      {
        src: "/posts/project/touchhockey/4.jpg",
        alt: "touchhockey",
        variant: "width",
      },
      {
        src: "/posts/project/touchhockey/5.jpg",
        alt: "touchhockey",
        variant: "width",
      },
      {
        src: "/posts/project/touchhockey/6.jpg",
        alt: "touchhockey",
        variant: "width",
      },
    ],
    paragraphs: [
      "I worked on this project in a group of 7 as a Bachelor Project for the Media Technology program. The purpose and goal of this project were to create an Air hockey game for a touch table that corresponds to the size of an actual Air hockey table. Following the customer's requirements, the game was developed to be exhibited in an exhibition environment. The main focus of the project was to create a unique gaming experience with clear feedback that increases players' understanding of the game's functionality.",
      "At the request of the course management, the project was carried out following the Scrum method. The method was based on the distribution of tasks in connection with time, priorities and continuous changes in customer requirements. The agile approach was based on the division of the project into sprints.",
      "The game was developed in the Unity game engine with Microsoft Visual Studio as IDE and GitHub as version control tools. Game physics was developed by the project group after examining various solutions, including Unity's collision management. The design and user interface were inspired by the classic Air hockey game with the exhibition environment and the target platform in mind. The target platform was important as the size of the touchpad affected, among other things, the placement of the objects. Various forms of feedback were then used to improve the players' understanding of the game.",
      "The result of the project was a working Air hockey game that could be played on a touch table. Like regular Air hockey, two players can play against each other. In addition to the usual functionality of an Air hockey game, some power-ups can be taken up by the players, which either simplify or complicate the game.",
    ],
    links: [
      {
        href: "https://drive.google.com/file/d/11_p2acdlCoJ2XEDH1O2S9UPh2aQVyUQ6/view?usp=sharing",
        icon: "file-video-o",
      },
      {
        href: "https://github.com/aniisabihi/TNM094-Bachelor-Project-TouchHockey",
        icon: "github",
      },
      {
        href: "touchhockey_report.pdf",
        icon: "file-pdf-o",
      },
    ],
    subtitle: "Game Development",
    thumbnail: "/illustrations/touchhockey.png",
    categories: ["Project", "C#"],
    animationOrder: 2,
  },
];

/** Portfolio posts — grid + detail content. Career roles in careerPosts.ts; legacy entries via yarn extract-posts */
export const POSTS: Post[] = sortPostsByDate(
  [...CAREER_POSTS, ...LEGACY_POSTS],
  CAREER_POSTS,
);

export const POSTS_BY_ID = Object.fromEntries(
  POSTS.map((post) => [post.id, post]),
) as Record<string, Post>;

export const TYPE_FILTERS = [
  "All",
  "Extracurricular",
  "Work",
  "Project",
] as const;

export const LANGUAGE_FILTERS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Java",
  "PHP",
  "HTML",
  "CSS",
  "C++",
  "Python",
  "WordPress",
  "Matlab",
  "C#",
  "OpenGL",
] as const;
