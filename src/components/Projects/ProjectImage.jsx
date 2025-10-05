import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 343px;
  height: 479px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
  margin: 0 auto;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.19); /*depth*/

 @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 696px;
    height: 479px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 479px;
    height: 479px;
  }
`;

const ProjectImage = ({ src, alt }) => (
  <Image src={src} alt={`Screenshot of ${alt}`} loading="lazy" />
);

export default ProjectImage;
