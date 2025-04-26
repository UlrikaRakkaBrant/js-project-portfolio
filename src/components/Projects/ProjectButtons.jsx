// file: src/components/Projects/ProjectButtons.jsx

import React from "react";
import styled from "styled-components";
import linkIcon from "../../assets/link-icon.svg";
import githubIcon from "../../assets/github-icon.svg";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.a`
  position: relative;
  width: 303px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

   & > .btn-icon {
    position: absolute;
    left: 16px;    /* ← SEMIKOLON VARJE RAD */
    top: 8px;      /* ← annars ignoreras hela blocket */
    width: 32px;
    height: 32px;
    z-index: 1;            /* bring it above other content */
    pointer-events: auto;  /* so you can click/inspect it directly */
  }
`;

const Text = styled.span`
  margin-left: 64px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 48px;
  color: #fff;
`;

const ProjectButtons = ({ live, code }) => (
  <ButtonGroup>
    <Button href={live} target="_blank" rel="noopener noreferrer">
      <img className="btn-icon" src={linkIcon} alt="" aria-hidden="true" />
      <Text>Live demo</Text>
    </Button>
    <Button href={code} target="_blank" rel="noopener noreferrer">
      <img className="btn-icon" src={githubIcon} alt="" aria-hidden="true" />
      <Text>View Code</Text>
    </Button>
  </ButtonGroup>
);

export default ProjectButtons;
