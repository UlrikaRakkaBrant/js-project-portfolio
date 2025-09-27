// file: src/components/Projects/Projects.jsx

import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard.jsx';
import projectData from '../../data/projects.json'; // import the JSON

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

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Projects = () => (
  <ProjectsWrapper>
    <SectionTitle>Featured Projects</SectionTitle>

    <ProjectList>
      {projectData.projects.map((proj, index) => (
        <ProjectCard
          key={index}
          title={proj.name}       // `name` in JSON → `title` in component
          tech={proj.tags}        // `tags` in JSON → `tech` in component
          image={proj.image}
          live={proj.netlify}     // `netlify` in JSON → `live` in component
          code={proj.github}      // `github` in JSON → `code` in component
          reverse={index % 2 === 1}
        />
      ))}
    </ProjectList>
  </ProjectsWrapper>
);

export default Projects;
