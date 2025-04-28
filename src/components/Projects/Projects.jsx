// file: src/components/Projects/Projects.jsx

import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard.jsx';

const ProjectsWrapper = styled.section`
  padding: 2rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

/** 
 * Changed from a grid to a simple vertical stack.
 * Cards will always appear one on top of the other.
 */
const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const projects = [
  {
    title: "Portfolio",
    tech: ["HTML5", "CSS3", "React", "Node"],
    description: "This Portfolio.",
    image: "https://via.placeholder.com/300x200",
    live: "deft-yeot-eca07c.netlify.app",
    code: "https://github.com/UlrikaRakkaBrant/js-project-accessibility",
  },
  {
    title: "Accessibility Quiz",
    tech: ["HTML5", "CSS3", "React", "Node"],
    description: "A conversational quiz focused on accessibility best practices.",
    image: "https://via.placeholder.com/300x200",
    live: "https://neon-moxie-2182dc.netlify.app/",
    code: "https://github.com/UlrikaRakkaBrant/js-project-accessibility",
  },
  {
    title: "Weather App",
    tech: ["HTML5", "CSS3", "React", "Node"],
    description: "A weather app using real-time API data with a simple, accessible UI.",
    image: "https://via.placeholder.com/300x200",
    live: "astonishing-pony-2897f0.netlify.app",
    code: "https://github.com/MalLunBar/js-project-weather-app"
  },
  {
    title: "Recipe Page",
    tech: ["HTML5", "CSS3", "React"],
    description: "An accessible recipe app with filters, animations, and responsive design.",
    image: "https://via.placeholder.com/300x200",
    live: "https://polite-gelato-07bc5e.netlify.app/",
    code: "https://github.com/UlrikaRakkaBrant/js-project-recipe-library"
  },
  {
    title: "E-Commerce Demo",
    tech: ["HTML5", "CSS3", "React", "Node"],
    description: "A mock e-commerce app with product cards and form for contact.",
    image: "https://via.placeholder.com/300x200",
    live: "https://your-ecommerce-demo.netlify.app",
    code: "https://github.com/UlrikaRakkaBrant/js-project-business-site"
  }
];

const Projects = () => (
  <ProjectsWrapper>
    <SectionTitle>Featured Projects</SectionTitle>

    <ProjectList>
      {projects.map((proj, index) => (
        <ProjectCard
          key={index}
          reverse={index % 2 === 1}    /* for desktop alternating later */
          {...proj}
        />
      ))}
    </ProjectList>
  </ProjectsWrapper>
);

export default Projects;
