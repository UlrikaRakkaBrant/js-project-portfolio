import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/ulrika.jpg';

const HeroWrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  // max-width: 400px; /* keep it from being too big */
  height: auto;
  max-height: 600px;
  object-fit: cover;
  display: block;
  margin-inline: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 379px;
    border-radius: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 379px;
    border-radius: 20px;

  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroImage
        src={heroImage}
        alt="Hero image of Ulrika Einebrant"
        loading="eager"
      />
    </HeroWrapper>
  );
};

export default Hero;
