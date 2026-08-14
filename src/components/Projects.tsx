import React, { useState } from "react";
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal";
import { AnimatePresence } from "framer-motion";
import { projectsData, type Project } from "../data/projects";



const Projects: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div>
      {/* <h2 className="text-3xl font-semibold mb-6">Selected Projects</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
        {projectsData.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setActive(p)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
