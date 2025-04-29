import React from 'react';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/sections/About';
import { ThemeProvider } from '../components/ThemeProvider';

const Index = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        < About/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
