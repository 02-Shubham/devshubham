"use client";
import Hero from "../app/hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
// import { ScrollerMotion } from "scroller-motion";
import PreLoader from "../app/animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "../app/utils/BlobityConfig";
import NavBar from "../app/navbar/NavBar";

import dynamic from "next/dynamic";
import Reviews from "../app/reviews-section/ReviewGrid";
const Work = dynamic(() => import("../app/work-section/Work"));
const About = dynamic(() => import("../app/about-section/About"));
const Blog = dynamic(() => import("../app/blog-section/BlogGrid"));
const Contact = dynamic(() => import("../app/contact-section/Contact"));
const Footer = dynamic(() => import("../app/footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
