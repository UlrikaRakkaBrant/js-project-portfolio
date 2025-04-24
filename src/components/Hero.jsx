import React from 'react';
import styled from 'styled-components';
import heroImage from '../assets/ulrika.jpg'; // Replace with your actual image path

const HeroWrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-height: 800px;
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
