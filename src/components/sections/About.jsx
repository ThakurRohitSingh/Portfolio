import React from "react";
import { skillCategories } from "../../data/skills";
import { Download } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6">
            I'm a passionate web developer with a keen eye for design and a love for creating
            intuitive, responsive web applications. With experience in both frontend and backend
            technologies, I enjoy building complete solutions that solve real-world problems.
          </p>
          <p className="text-lg mb-6">
            As an aspiring web developer, I am in the early stages of my professional journey. I have a strong foundation in front-end technologies and a deep interest in building responsive, user-friendly web applications. I am committed to continuous learning and actively explore modern tools and frameworks to enhance my skill set and stay aligned with current industry standards.
          </p>
          <a
            href="/Rohit_Singh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-md"
              >
                <h4 className="text-xl font-semibold mb-4">{category.category}</h4>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
