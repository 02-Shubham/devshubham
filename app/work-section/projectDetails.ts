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
    name: "INVENTO AI",
    description:
      "An AI-powered inventory and invoice agent using Next.js, Firebase, Python, and RAG. Features a multi-step execution pipeline with parallel processing, achieving a 40x performance boost.",
    technologies: ["Next.js", "Firebase", "Python", "RAG"],
    github: "https://github.com/02-Shubham",
    demo: "https://github.com/02-Shubham",
    image: require(".//../../public/projects/invento.png"),
    available: true,
  },
  {
    id: 1,
    name: "EscroX",
    description:
      "A full-stack blockchain escrow platform for secure cross-border transactions. Implements smart contracts for milestone payments and Web3 wallet connectivity for transparency.",
    technologies: ["Next.js", "Solidity", "Razorpay", "Node.js"],
    github: "https://github.com/02-Shubham",
    demo: "https://github.com/02-Shubham",
    image: require(".//../../public/projects/escrox.png"),
    available: true,
  },
  {
    id: 2,
    name: "BloodCall",
    description:
      "A web application that connects blood donors with those in need, facilitating easy access to blood donation information.",
    technologies: ["React", "Tailwind CSS", "Node.js", "GoogleMaps API"],
    github: "https://github.com/02-Shubham/donor-pulse",
    demo: "https://bloodcall.vercel.app/",
    image: require(".//../../public/projects/bloodcall.png"),
    available: true,
  },
  {
    id: 3,
    name: "InsightCare ",
    description:
      "InsightCare HMS is a Patient Management System that provides AI-driven system for patient diagnosis and real-time health monitoring.",
    technologies: ["React", "Python", "Prisma", "Typescript"],
    github: "https://github.com/02-Shubham/",
    demo: "/",
    image: require(".//../../public/projects/hms.jpg"),
    available: true,
  },
  {
    id: 4,
    name: "NyayaSetu",
    description:
      "A decentralized whistleblowing platform with AES-256 encryption and IPFS storage. Features SLA-based escalation and automated validation for secure, immutable case handling.",
    technologies: ["Solidity", "IPFS", "React", "Ethereum"],
    github: "https://github.com/02-Shubham",
    demo: "https://github.com/02-Shubham",
    image: require(".//../../public/projects/nyayasetu.png"),
    available: true,
  },
];

