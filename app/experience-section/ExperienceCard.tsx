"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExperienceProps } from "./experienceDetails";

const ExperienceCard = ({ experience }: { experience: ExperienceProps }) => {
  const previewSrc = experience.previewImage || "";

  return (
    <div className="relative w-full">
      <div className="relative w-full rounded-2xl border border-white/[0.06] bg-[#14161e] p-6 md:p-8 overflow-hidden">
        {/* ── Card body ── */}
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5 md:gap-8">
          {/* Logo */}
          <div
            className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden"
            style={{ backgroundColor: experience.logoColor }}
          >
            <Image
              src={experience.logo}
              alt={experience.company}
              width={56}
              height={56}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            {/* Company & dates row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-[#e4ded7] font-bold text-[18px] md:text-[20px] leading-tight">
                  {experience.company}
                </h3>
                <p className="text-[#a8a29e] font-semibold text-[14px] md:text-[15px] mt-0.5">
                  {experience.role}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 mt-1 sm:mt-0">
                <span className="text-[11px] font-semibold tracking-wider text-[#78716c] uppercase">
                  {experience.startDate}
                </span>
                <span className="text-[#4b5563]">–</span>
                <span
                  className={`text-[11px] font-bold tracking-wider uppercase ${
                    experience.isPresent ? "text-[#4ade80]" : "text-[#78716c]"
                  }`}
                >
                  {experience.endDate}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#a8a29e] text-[14px] md:text-[15px] leading-relaxed mt-3 font-medium">
              {experience.description}
            </p>
          </div>
        </div>

        {/* ── Website Preview Panel (Always Visible) ── */}
        <div className="mt-8 overflow-hidden rounded-xl border border-white/[0.08]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1c1e2d] border-b border-white/[0.06]">
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>

            {/* URL bar */}
            <div className="flex-1 mx-3 bg-[#12141c] rounded-md px-3 py-1.5 flex items-center gap-2 min-w-0">
              <svg
                className="w-3 h-3 text-[#4ade80] flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[11px] text-[#9ca3af] font-medium truncate">
                {experience.websiteUrl}
              </span>
            </div>

            {/* Visit button */}
            <Link
              href={experience.websiteUrl}
              target="_blank"
              rel=""
              data-no-blobity
              className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6366f1]/20 hover:bg-[#6366f1]/40 border border-[#6366f1]/30 text-[#a5b4fc] text-[11px] font-semibold transition-all duration-200"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit
            </Link>
          </div>

          {/* Screenshot image — clickable */}
          <Link
            href={experience.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-no-blobity
            className="block relative group "
            style={{ height: "470px" }}
          >
            {previewSrc && (
              <Image
                src={previewSrc}
                alt={`${experience.company} website preview`}
                fill
                className="object-top"
              />
            )}
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[13px] font-semibold transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open website
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
