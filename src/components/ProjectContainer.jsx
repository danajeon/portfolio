import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectContainer = () => {
  const [selected, setSelected] = useState(0);

  const projects = [
    {
      title: "brilly",
      dsc: "AI assisted flashcard learning tool providing additional elaboration on words/concepts.",
      projectUrl: "https://brilly.netlify.app",
      repo: "https://github.com/danajeon/brilly",
      screenshot: "/images/screenshots/brillyScreenshot.png",
      techUsed: ["React", "TypeScript", "Tailwind", "Supabase", "Figma", "Git", "GitHub", "API"],
    },
    {
      title: "Atlanta Arm Candy",
      dsc: "Local online shop for stylish, affordable handbags.",
      projectUrl: "https://jinoda.myshopify.com/",
      repo: "https://jinoda.myshopify.com/",
      screenshot: "/images/screenshots/arcScreenshot.png",
      techUsed: ["Shopify"],
    },
    {
      title: "SolarRise",
      dsc: "A platform for LA residents to request a solar evaluation and for admins to login to view and plan requested appointments.",
      projectUrl: "https://isolar.netlify.app/",
      repo: "https://github.com/chingu-voyages/v52-tier2-team-24",
      screenshot: "/images/screenshots/solarriseScreenshot.png",
      techUsed: ["React", "JavaScript", "Tailwind", "Figma", "Git", "GitHub", "API"],
    }
  ];

  return (
    <div className="w-full mb-10">
      <h3 className="w-full text-center text-rose-300 text-4xl font-semibold pb-6">
        Projects
      </h3>
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-[#EBE1F1] to-[#FDDBE3] rounded-xl p-10 floatDiv">
        <div className="w-full flex flex-row items-center gap-6">
          {projects.map((projectObject, i) => (
            <ProjectCard
              key={i}
              index={i}
              {...projectObject}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
