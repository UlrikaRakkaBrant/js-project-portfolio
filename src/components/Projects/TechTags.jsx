// file: src/components/Projects/TechTags.jsx

import React from 'react';
import styled from 'styled-components';

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  /* pill shape with a thin black border */
  display: inline-block;
  padding: 0.25rem 0.75rem;     /* adjust left/right padding to taste */
  font-size: 0.875rem;          /* ~14px */
  font-weight: 500;
  color: #000;                  /* black text */
  background-color: transparent;/* or use #fff if you want white fill */
  border: 1px solid #000;       /* 1px black frame */
  border-radius: 0.4rem;        /* ~8px pill corners */
`;

const TechTags = ({ tags }) => (
  <TagsContainer>
    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </TagsContainer>
);

export default TechTags;
