import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check how far down the user has scrolled
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-accent text-center text-[#eeedec] text-sm font-light">

      <div
        className={`fixed bottom-7 right-5 md:bottom-10 md:right-10 z-50 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <Link
          to="home"
          smooth={true}
          duration={800}
          offset={-120}
          className="group flex items-center justify-center w-12 h-12 rounded-full navbar-glass  cursor-pointer text-text-primary  transition-transform duration-300 hover:animate-bounce"
        >
          <ArrowUp
            // className="transition-transform duration-300 group-hover:animate-bounce"
            size={20}
            strokeWidth={1.5}
          />
        </Link>
      </div>

      <div className="py-6 container mx-auto">
        &copy; {new Date().getFullYear()} Daniela Oliveira
      </div>
    </footer>
  );
};

export default Footer;