import React from 'react';
import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.a`
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 6px;
  font-size: 0.85rem;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

const ProjectButtons = ({ live, code }) => (
  <ButtonGroup>
    <Button href={live} target="_blank" rel="noopener noreferrer">Live demo</Button>
    <Button href={code} target="_blank" rel="noopener noreferrer">View Code</Button>
  </ButtonGroup>
);

export default ProjectButtons;
