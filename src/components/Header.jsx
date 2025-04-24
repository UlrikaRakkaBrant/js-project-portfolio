import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
`;

const Greeting = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const Intro = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 1.1rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Greeting>Hi there, I’m</Greeting>
      <Name>Ulrika Einebrant</Name>
      <Title>Creative Developer with a background in project managing and theatre.</Title>
    </HeaderWrapper>
  );
};

export default Header;
