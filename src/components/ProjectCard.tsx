import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

const ProjectCard: React.FC<{ project: Project; onOpen: () => void }> = ({
  project,
  onOpen,
}) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className="group relative rounded-lg overflow-hidden"
      style={{ cursor: "pointer" }}
      onClick={onOpen}
    >
      <div className="h-[80%] overflow-hidden">
        <motion.img
          layoutId={`image-${project.id}`}
          src={project.thumbnailImage}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 rounded-lg"
        />
      </div>

      <div className="pt-1 pb-3 px-2">
        <h3 className="text-[1rem] lg:text-[1.25rem]  text-text-secondary font-semibold">{project.title}</h3>
        <p className="text-[0.9rem] lg:text-[1rem] font-light text-text-secondary">
          {project.shortDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
