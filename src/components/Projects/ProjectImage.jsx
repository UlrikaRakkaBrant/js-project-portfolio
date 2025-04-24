import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  height: 160px;
`;

const ProjectImage = ({ src, alt }) => (
  <Image src={src} alt={`Screenshot of ${alt}`} loading="lazy" />
);

export default ProjectImage;
