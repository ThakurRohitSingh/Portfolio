import React from 'react';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const titles = ["Developer", "Designer", "Creator"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typingComplete) {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [typingComplete, titles.length]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h3 className="text-xl md:text-2xl mb-2 text-muted-foreground animate-fade-in">Hello, I'm</h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Rohit Singh
          </h1>
          <div className="h-16 md:h-20">
            <div className="typing-container animate-typing">
              <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-primary">
                {typingComplete ? titles[currentTitleIndex] : "Developer"}
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
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
          <span className="mb-1">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};
