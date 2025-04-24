import React from 'react';
import styled from 'styled-components';

const SkillsWrapper = styled.section`
  padding: 2rem 1rem;
  background-color: #000;
  color: #fff;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Group = styled.div`
  background: transparent;
  padding: 1rem;
`;

const GroupTitle = styled.h3`
  display: flex;
  width: 177px;
  height: 28px;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  margin: 0 0 0.75rem 0; /* default left-aligned on mobile */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 auto 0.75rem; /* centered frame on tablet */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 0 0.75rem 0; /* left-aligned on desktop */
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
  color: #fff;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: left;
  }
`;

const SkillItem = styled.li`
  margin-bottom: 0.4rem;
`;

const Skills = () => {
  return (
    <SkillsWrapper>
      <SectionTitle>Skills</SectionTitle>
      <Grid>
        <Group>
          <GroupTitle>Code</GroupTitle>
          <SkillList>
            <SkillItem>HTML5</SkillItem>
            <SkillItem>CSS3</SkillItem>
            <SkillItem>JavaScript ES6</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Styled Components</SkillItem>
            <SkillItem>GitHub</SkillItem>
          </SkillList>
        </Group>
        <Group>
          <GroupTitle>Toolbox</GroupTitle>
          <SkillList>
            <SkillItem>Figma</SkillItem>
            <SkillItem>Slack</SkillItem>
            <SkillItem>Postman</SkillItem>
            <SkillItem>Atom</SkillItem>
            <SkillItem>Adobe Photoshop</SkillItem>
            <SkillItem>Adobe Illustrator</SkillItem>
          </SkillList>
        </Group>
        <Group>
          <GroupTitle>Upcoming</GroupTitle>
          <SkillList>
            <SkillItem>Node.js</SkillItem>
          </SkillList>
        </Group>
        <Group>
          <GroupTitle>More</GroupTitle>
          <SkillList>
            <SkillItem>Branding</SkillItem>
            <SkillItem>Strategy</SkillItem>
            <SkillItem>Process Design</SkillItem>
            <SkillItem>Concept Development</SkillItem>
            <SkillItem>Agile methodology</SkillItem>
          </SkillList>
        </Group>
      </Grid>
    </SkillsWrapper>
  );
};

export default Skills;
