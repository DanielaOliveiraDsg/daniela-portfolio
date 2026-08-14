import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <section id="home">
          <Hero />
        </section>

        <section id="projects" className="mt-20">
          <Projects />
        </section>

        <section id="contact" className="mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
