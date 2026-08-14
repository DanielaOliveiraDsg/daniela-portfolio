import React from "react";
import { Link } from "react-scroll";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="text-left py-24 md:py-36">
      <h1 className="text-5xl md:text-6xl font-normal text-accent">
        Hi — I'm a Designer & Developer
      </h1>
      <p className="text-2xl leading-snug font-extralight mt-2 text-text-secondary max-w-2xl">
        I build accessible and intuitive web experiences focused on clarity,
        motion, and polish.
      </p>
      <div className="mt-12 flex lg:justify-center">
        <Link
          to="projects"
          smooth={true}
          duration={800}
          offset={-120}
          className="group flex items-center gap-2 cursor-pointer font-light text-base md:text-lg text-accent hover:text-accent-hover transition-colors w-fit"
        >
          View Projects
          <ArrowDown
          className="transition-transform duration-300 group-hover:animate-bounce"
          size={18}
          strokeWidth={1.5}
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
