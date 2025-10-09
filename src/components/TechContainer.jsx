import { useState } from "react";
import TechCard from "./TechCard";
import react from "/images/tech/react.webp";
import javascript from "/images/tech/javascript.webp";
import typescript from "/images/tech/typescript.webp";
import tailwind from "/images/tech/tailwind.webp";
import supabase from "/images/tech/supabase.webp";
import figma from "/images/tech/figma.webp";
import git from "/images/tech/git.webp";
import github from "/images/tech/github.webp";
import api from "/images/tech/api.webp";
import json from "/images/tech/json.webp";
import html from "/images/tech/html.webp";
import css from "/images/tech/css.webp";
// import sass from "/images/tech/sass.webp";
// import reactNative from "/images/tech/reactNative.webp";
// Shopify, Netlify?, Postman, AWS, Jira

export const TechContainer = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const techs = [
    { logo: react, label: "React" },
    { logo: tailwind, label: "Tailwind" },
    { logo: javascript, label: "JavaScript" },
    { logo: typescript, label: "TypeScript" },
    { logo: supabase, label: "Supabase" },
    { logo: figma, label: "Figma" },
    { logo: git, label: "Git" },
    { logo: github, label: "GitHub" },
    { logo: api, label: "API" },
    { logo: json, label: "json" },
    { logo: html, label: "HTML" },
    { logo: css, label: "CSS" },
  ];

  return (
    <div
      className="w-full flex flex-col items-center p-10"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <h3 className="text-center text-4xl font-semibold text-rose-300 pb-6
        lg:text-4xl 
        md:text-xl">
        Tools & Tech
      </h3>
      <div className="w-[100%] flex flex-row flex-wrap justify-center gap-4">
        {techs.map(({ logo, label }) => (
          <TechCard
            key={label}
            logo={logo}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};
