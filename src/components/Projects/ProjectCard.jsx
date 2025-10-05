// file: src/components/Projects/ProjectCard.jsx

import React from 'react';
import styled from 'styled-components';
import TechTags from './TechTags'
import ProjectButtons from './ProjectButtons';
import ProjectImage from './ProjectImage';

const CardContainer = styled.div`
  /* always stack image over content on mobile & tablet */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  margin: 0 auto; /* centers within its parent */

  img {
    width: 100%;
    border-radius: 8px;
  }

  /* on desktop, switch to row or row-reverse inside each card */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    align-items: center;

    img {
      width: 50%;       /* half the card width */
      max-width: 560px; /* adjust if needed */
    }
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TechList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  span { /* ... */ }
`;

const Title = styled.h3` /* ... */ `;
const Description = styled.p` /* ... */ `;

const ProjectCard = ({ title, description, tech, image, live, code, reverse }) => (
  <CardContainer reverse={reverse}>
    <ProjectImage src={image} alt={`Screenshot of ${title}`} />
    <Content>
      <TechTags tags={tech} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ProjectButtons live={live} code={code} />
    </Content>
  </CardContainer>
);

export default ProjectCard;
