import React, { useEffect } from "react";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { X } from "lucide-react";

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 modal-backdrop flex items-center cursor-pointer justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        layoutId={`card-${project.id}`}
        className="fixed z-50 top-10 inset-x-0 mx-auto w-[90%] max-w-5xl max-h-[85vh] overflow-hidden rounded-lg bg-bg shadow-2xl"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-primary hover:bg-surface-hover transition-colors shadow-lg cursor-pointer"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div className="overflow-y-auto max-h-[85vh] w-full h-full pb-6">
          <div className="relative">
            <motion.img
              layoutId={`image-${project.id}`}
              src={project.heroImage}
              alt={project.title}
              className="w-full h-auto object-cover rounded-t-xl"
            />
          </div>

          <div className="p-6">
            <h3 className="text-2xl text-text-primary font-normal mb-2">
              {project.title}
            </h3>
            <p className="text-text-primary font-light mb-10 text-sm">
              {project.fullDescription}
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8">
              {project.galleryImages.map((src: string, i: number) => {
                const isVideo =
                  src.includes(".mp4") ||
                  src.includes(".mov") ||
                  src.includes(".webm");

                return isVideo ? (
                  <video
                    key={i}
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ) : (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} gallery ${i}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                );
              })}
            </div>

            <div className="flex justify-center">
              {project.liveLink && (
                <a
                  className="px-6 py-3 font-light text-sm rounded bg-surface text-text-primary hover:bg-surface-hover transition-transform"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectModal;
