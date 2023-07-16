import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  iittechcom,
  kyberosc,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nature,
  travel,
  spa
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const introduction = {
  title: "Overview.",
  description: "I am an experienced software developer working with javascript. I started from Frontend and am moving to Backend. I am eager to learn and have good teamwork skills. It is a pleasure to exchange and work with everyone to help each other develop more in their careers."
};

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IIT TECHCOM",
    company_name: "Frontend Develop",
    icon: iittechcom,
    iconBg: "#383E56",
    date: "5/2020 - 9/2020",
    responsibilities: [
      {
        title: "Building Static website (4 month)",
        points: [
          "Use Html, Css, Javascript, Bootstrap, Plugin Jquery to create effects for the website.",
          "Use PHP that interacts with API."
        ],
        project: [
          "https://elitetour.com.vn/",
          "https://www.miahotels.vn/"
        ]
      }
    ]
  },
  {
    title: "KYBEROSC JOINT STOCK COMPANY",
    company_name: "Fullstack Develop",
    icon: kyberosc,
    iconBg: "#383E56",
    date: "9/2020 - Present",
    responsibilities: [
      {
        title: "Building Static website (18 months):",
        points: [
          "Development of component as Jquery plugin.",
          "Use NodeJS with framework Ejs, Pug, Gulp/handlebar build template.",
          "Use Bootstrap, Jquery, Scss, Bem to create an effect for the website.",
          "Proficient handling with API ."
        ],
        project: [
          "https://www.mci.gov.sg/",
          "https://www.jtc.gov.sg/"
        ]
      },
      {
        title: "Sitecore .Net",
        points: [
          "Create template in CMS",
          "Build APIs",
          "Frontend with Vue.js"
        ],
        project: [
          
        ]
      }
    ]
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Natural landscape",
    description:
      "Đây là trang web mà tôi muốn giới thiệu tới mọi người về cảnh quan thiên nhiên đẹp.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: nature,
    source_code_link: "https://mittomao.github.io/Landing_01/",
  },
  {
    name: "Travel",
    description:
      "Đây là trang web giới thiệu về các tour du lịch",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://mittomao.github.io/travel1/",
  },
  {
    name: "Spa",
    description:
      "Đây là một trang web mà chắc hẳn chị em sẽ rất thích. Đó chính là spa làm đẹp.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spa,
    source_code_link: "https://mittomao.github.io/Cat_Layout_LepSpa/",
  },
];

export { services, technologies, experiences, testimonials, projects };
