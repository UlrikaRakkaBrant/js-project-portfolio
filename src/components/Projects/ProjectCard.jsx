import React from 'react';
import styled from 'styled-components';
import ProjectImage from './ProjectImage.jsx';
import TechTags from './TechTags.jsx';
import ProjectButtons from './ProjectButtons.jsx';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 1rem 0 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectCard = ({ title, tech, description, image, live, code }) => {
  return (
    <Card>
      <ProjectImage src={image} alt={title} />
      <TechTags tags={tech} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ProjectButtons live={live} code={code} />
    </Card>
  );
};

export default ProjectCard;
