// file: src/components/Contact.jsx
import React from "react";
import styled from "styled-components";
import ulrika from "../assets/ulrika.jpg";
import iconLinkedIn from "../assets/Btn - linkedin.svg";
import iconGithub from "../assets/github-icon.svg";
import kompanierror from "../assets/kompani-error.png";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.primary};   /* black */
  color: ${({ theme }) => theme.colors.secondary};      /* white */
  padding: 48px 16px 72px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 72px 24px 96px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 96px 32px 120px;
  }
`;

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  text-align: left; /* 👈 left-align text on mobile */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center; /* center text on tablet+ */
  }
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 28px;
  font-size: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 44px;
    margin-bottom: 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 52px;
    margin-bottom: 40px;
  }
`;

const AvatarWrap = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 40px;
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 9999px;
  object-fit: cover;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
    height: 200px;
  }
`;

const Info = styled.div`
  display: grid;
  row-gap: 16px;
  justify-items: start; /* 👈 left-align info on mobile */
  margin-bottom: 56px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-items: center; /* center info on tablet+ */
    row-gap: 18px;
    margin-bottom: 64px;
  }
`;

const Name = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 26px;
  }
`;

const Line = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 18px;
  line-height: 1.5;

  &:hover { opacity: 0.9; }
  &:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const Socials = styled.nav`
  display: flex;
  justify-content: flex-start; /* 👈 left on mobile */
  align-items: center;
  gap: 28px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center; /* center icons on tablet+ */
    gap: 36px;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  width: 28px;
  height: 28px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 32px;
    height: 32px;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    filter: brightness(0) invert(1); /* ← force white on dark bg */
    transition: opacity 0.2s ease;
  }

  &:hover img {
    opacity: 0.8; /* subtle hover feedback */
  }

  &:focus-visible { 
    outline: 2px solid ${({ theme }) => theme.colors.secondary}; 
    outline-offset: 3px; 
  }
`;


const Contact = () => {
  return (
    <Section aria-labelledby="contact-heading">
      <Container>
        <Title id="contact-heading">Let’s Talk</Title>

        <AvatarWrap>
          <Avatar src={ulrika} alt="Ulrika Einebrant" loading="lazy" />
        </AvatarWrap>

        <Info>
          <Name>Ulrika Einebrant</Name>
          <Line href="tel:+46709266203" aria-label="Call +46 709 26 62 03">
            +46(0)709 26 62 03
          </Line>
          <Line
            href="einebrantaren@gmail.com"
            aria-label="Email einebrantaren at gmail dot com"
          >
            einebrantaren@gmail.com
          </Line>
        </Info>

        <Socials aria-label="Social links">
          <SocialLink href="https://www.linkedin.com/in/ulrika-einebrant/" target="_blank" rel="noopener noreferrer" aria-label="Ulrikas LinkedIn">
            <img src={iconLinkedIn} alt="" />
          </SocialLink>
          <SocialLink href="https://github.com/UlrikaRakkaBrant" target="_blank" rel="noopener noreferrer" aria-label="Ulrikas GitHub">
            <img src={iconGithub} alt="" />
          </SocialLink>
          <SocialLink href="https://kompanierror.se/#/" target="_blank" rel="noopener noreferrer" aria-label="Ulrikas Theatre Group Kompani Errors Website">
            <img src={kompanierror} alt="" />
          </SocialLink>
        </Socials>
      </Container>
    </Section>
  );
};

export default Contact;
