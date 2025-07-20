import codedex from "../assets/codedex.jpeg"
import GPA_Achiever from "../assets/GPA_ACHIEVER.jpeg";
import dual_deal from "../assets/dual_deal.jpeg";

export const PROJECTS = [
  {
    title: "CODEDEX - Developer Productivity Suite",
    image: codedex, // Replace with correct image import
    description:
      "Engineered a LIVE CODING DASHBOARD aggregating data from LeetCode, Codeforces, and CodeChef. Built a DYNAMIC RESUME BUILDER with auto-save and live sync. Implemented with ReactJS, Redux, and Tailwind CSS for responsive design and theming.",
    technologies: ["React", "Redux", "TailwindCSS", "LocalStorage"],
    github: "https://github.com/kumararnab11/CodeDeX",
    demo: "https://code-de-x-arnab-kumars-projects.vercel.app/",
  },
  {
    title: "DUAL DEAL - Price Comparison Engine",
    image: dual_deal, // Replace with correct image import
    description:
      "Developed a cross-platform tool to compare Amazon and Flipkart listings in real-time using API integration. Boosted discovery rate by 50% using lazy loading and minimalist UI. Built with React and TailwindCSS.",
    technologies: ["React", "TailwindCSS", "REST API"],
    github: "https://github.com/kumararnab11/DualDeal",
    demo: "https://dual-deal.vercel.app/",
  },
  {
    title: "GPA Achiever - Academic Performance Calculator",
    image: GPA_Achiever, // Replace with correct image import
    description:
      "Created an interactive platform to calculate cumulative GPA with real-time input handling. Built using React and lightweight responsive styling with CSS.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/kumararnab11/GPA_Achiever",
    demo: "https://gpa-achiever.vercel.app/",
  },
];

export const  CONTACT ={
  email:"kumararnab0342@gmail.com",
  address:"kolkata 700102"
}

