export type ExperienceProps = {
  id: number;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  description: string;
  logo: string;
  websiteUrl: string;
  logoColor: string; // bg color for logo container
  previewImage?: string; // optional custom screenshot — place in /public/experience/
};

export const experiences: ExperienceProps[] = [
  {
    id: 0,
    company: "Quantan Innvovation",
    role: "Frontend Developer",
    startDate: "December 15, 2025",
    endDate: "May 05, 2026",
    isPresent: false,
    description:
      "At Quantan Innvovation, my primary roles involve collaborating with a cross-functional team to develop new fintech products and interactive dashboards using React.js, integrating APIs to display business data and transactions analytics, as well as optimizing existing applications to improve user experience and ensure product compliance.",
    logo: "/quantan.png",
    websiteUrl: "https://www.quantan.io/",
    logoColor: "#1a1a2e",
    previewImage: "/quantandashboard.png",
  },
  // {
  //   id: 1,
  //   company: "Optimus AI Lab",
  //   role: "Mid-level Frontend Engineer",
  //   startDate: "NOV 25, 2024",
  //   endDate: "JAN 8, 2025",
  //   isPresent: false,
  //   description:
  //     "At Optimus, my work involves developing and maintaining dynamic user-centric applications and interfaces for top organizations and government agencies.",
  //   logo: "/experience/optimus.png",
  //   websiteUrl: "https://optimusailab.com",
  //   logoColor: "#0f0f0f",
  // },
];
