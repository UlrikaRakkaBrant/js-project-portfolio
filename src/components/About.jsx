import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

const Bio = styled.p`
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Bio>
        I'm a web developer with a passion for blending creativity and technology. I create
        engaging, user-friendly websites that focus on both functionality and design. My
        background in theatre gives me a unique perspective, bringing storytelling and
        visual creativity into every project. I’m driven by the idea of making digital
        experiences that are as immersive and impactful as a great performance.
      </Bio>
    </AboutWrapper>
  );
};

export default About;
