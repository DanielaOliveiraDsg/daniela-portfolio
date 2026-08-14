import { Mail } from "lucide-react";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="border-t border-border pt-3 pb-16 max-w-6xl mx-auto">
      <div className="text-left">
        <h2 className="text-5xl font-normal mb-8">Get in Touch</h2>
        <div className="flex items-center justify-between w-full">
          <p className="text-text-secondary text-base md:text-lg">
            Let's work together!
          </p>
          <a
            className="group flex items-center gap-2 cursor-pointer font-light text-base md:text-lg text-accent hover:text-accent-hover transition-colors"
            href="mailto:danielaoliveiradsg@gmail.com"
          >
            <Mail
              size={20}
              strokeWidth={1.5}
              className="transition-transform group-hover:scale-110"
            />
            danielaoliveiradsg@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
