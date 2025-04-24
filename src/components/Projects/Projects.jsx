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

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const projects = [
  {
    title: "Accessibility Quiz",
    tech: ["HTML5", "CSS3", "React", "Node"],
    description: "A conversational quiz focused on accessibility best practices.",
    image: "https://via.placeholder.com/300x200",
    live: "https://netlify.com/accessibility-quiz",
    code: "https://github.com/yourusername/accessibility-quiz",
  },

  {
    title: "Weather App",
    tech: ["HTML5", "CSS3", "React", "Node"],
    description: "A weather app using real-time API data with a simple, accessible UI.",
    image: "https://via.placeholder.com/300x200",
    live: "https://your-weather-app.netlify.app",
    code: "https://github.com/MalLunBar/js-project-weather-app"
  },

  {
    title: "Recipe Page",
    tech: ["HTML5", "CSS3", "React"],
    description: "An accessible recipe app with filters, animations, and responsive design.",
    image: "https://via.placeholder.com/300x200",
    live: "https://your-recipe-page.netlify.app",
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

const Projects = () => {
  return (
    <ProjectsWrapper>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectGrid>
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
};

export default Projects;
