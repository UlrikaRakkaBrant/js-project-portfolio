import React from 'react';
import styled from 'styled-components';

const TechWrapper = styled.section`
  padding: 2rem 1rem;
  background-color: #000;
  color: #fff;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 800px;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

const Tech = () => {
  return (
    <TechWrapper>
      <h2>Tech</h2>
      <p>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
        Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.
      </p>
    </TechWrapper>
  );
};

export default Tech;
