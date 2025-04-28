import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const titles = ["Developer", "Designer", "Creator"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Text Content */}
          <div className="max-w-3xl md:w-1/2 order-2 md:order-1">
            <h3 className="text-xl md:text-2xl mb-2 text-muted-foreground animate-fade-in">Hello, I'm</h3>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
              Rohit Singh
            </h1>
            <div className="h-16 md:h-20">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-primary">
                  {titles[currentTitleIndex]}
                </h2>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              I create beautiful, functional, and accessible web experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Circular Image */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-primary animate-fade-in order-1 md:order-2 md:-translate-x-20 hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              src="ProfileImage.jpeg"
              alt="Rohit Singh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/40 blur-sm opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
          <span className="mb-1">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};
