import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Random User",
    role: "Product Designer",
    company: "Umoja Linn",
    profileImg: alex,
    testimonial:
      "Shubham is a great developer. He is very professional and always delivers on time. I would recommend him to anyone looking for a developer.",
  },
  
  
];
