import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Added framer-motion

const Navbar: React.FC = () => {
  const [isLight, setIsLight] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isLight) document.documentElement.classList.add("light");
    else document.documentElement.classList.remove("light");
  }, [isLight]);

  return (
    <nav className="fixed top-6 left-0 right-0 z-40 flex flex-col items-center">
      {/*
        1. MASTER CONTAINER:
        Moved the navbar-glass and overflow-hidden here so the whole thing acts as one continuous frosted glass block.
      */}
      <div className="w-[92%] max-w-6xl navbar-glass rounded-lg shadow-md overflow-hidden">
        {/* TOP BAR: Always visible */}
        <div className="px-4 py-4 flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-120}
            className="text-md md:text-xl font-light uppercase cursor-pointer text-text-primary hover:text-text-secondary transition-colors"
          >
            Daniela Oliveira
          </Link>

          <div className="flex items-center gap-12">
            {/* Desktop Menu */}
            <div className="hidden sm:flex gap-8 font-light text-sm lg:text-lg text-text-secondary">
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-120}
                className="cursor-pointer text-text-primary hover:text-text-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={800}
                offset={-120}
                className="cursor-pointer text-text-primary hover:text-text-secondary transition-colors"
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-120}
                className="cursor-pointer text-text-primary hover:text-text-secondary transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-8">
              <button
                aria-label="Toggle theme"
                onClick={() => setIsLight((v) => !v)}
                className="flex items-center justify-center text-text-primary hover:text-text-secondary transition-colors"
              >
                {isLight ? (
                  <Moon size={18} strokeWidth={1.5} />
                ) : (
                  <Sun size={18} strokeWidth={1.5} />
                )}
              </button>

              {/*
                2. ANIMATED HAMBURGER ICON:
                Both icons are rendered at the same time on top of each other, and CSS rotates and fades them based on state.
              */}
              <button
                className="sm:hidden relative w-5 h-5 flex items-center justify-center text-text-primary hover:text-text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu
                  size={18}
                  strokeWidth={1.5}
                  className={`absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "opacity-0 rotate-90 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={18}
                  strokeWidth={1.5}
                  className={`absolute transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/*
          3. SMOOTH DROPDOWN:
          Framer Motion animates the height from 0 to "auto", stretching the glass container seamlessly.
        */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sm:hidden"
            >
              <div className="px-4 pb-4 flex flex-col gap-4">
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  offset={-120}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-text-primary hover:text-text-secondary font-medium pb-2 border-b border-border"
                >
                  Home
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={800}
                  offset={-120}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-text-primary hover:text-text-secondary font-medium pb-2 border-b border-border"
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-120}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer text-text-primary hover:text-text-secondary font-medium"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
