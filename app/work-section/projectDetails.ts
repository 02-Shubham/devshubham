export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Expense Tracker",
    description:
      "So it is a app made by using react (vite) which allow you to track your money and loans.It is a simple app which allow you to add and delete your transactions.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/02-Shubham/personalexpensetracker",
    demo: "https://expenses-tracker-finbuddy.vercel.app/",
    image: require(".//../../public/projects/expense.png"),
    available: true,
  },
  {
    id: 1,
    name: "InsightCare ",
    description:"InsightCare HMS is a Patient Management System that provides AI-driven system for patient diagnosis and real-time health monitoring.",
    technologies: ["React", "Python", "Prisma","Typescript"],
    github: "https://github.com/02-Shubham/",
    demo: "/",
    image: require(".//../../public/projects/hms.jpg"),
    available: true,
  },
  {
    id: 2,
    name: "Personal Portfolio",
    description:"A portfolio website built using Next.js, It features a clean and modern design, showcasing my skills and projects.",
    technologies: ["React","Framer Motion"],
    github: "https://github.com/02-Shubham/",
    demo: "/",
    image: require(".//../../public/projects/portfolio.png"),
    available: true,
  },

  {
    id: 3,
    name: "Ecell GHRCEM Website",
    description:
      "A website built for the Entrepreneurship Cell of GHRCEM, to showcase their events, team, and mark their online presence.",
    technologies: ["Acerternity UI", "Next.js", "Framer Motion"],
    github: "https://github.com/02-Shubham",
    demo: "https://ecellghrcemnew.vercel.app/",
    image: require(".//../../public/projects/ecell.png"),
    available: true,
  },
  {
    id: 4,
    name: "BloodCall",
    description:
      "A web application that connects blood donors with those in need, facilitating easy access to blood donation information.",
    technologies: ["React", "Tailwind CSS", "Node.js","GoogleMaps API"],
    github: "https://github.com/02-Shubham/donor-pulse",
    demo: "https://bloodcall.vercel.app/",
    image: require(".//../../public/projects/bloodcall.png"),
    available: true,
  },
];

// export const designProjects = [
//   {
//     id: 1,
//     name: "Hebron Statup Lab Website",
//     description:
//       "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 2,
//     name: "RAGS Scrubs Website",
//     description:
//       "An image generator website that allows users to generate, combine, and download images.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 3,
//     name: "Crown Branding Agency Website",
//     description:
//       "A website that reduces the length of your URL using Bit.ly's API",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image:
//       "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 4,
//     name: "Titi Mobile App",
//     description:
//       "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
//     available: false,
//   },
// ];
