import React from 'react';
import styled from 'styled-components';

const TagsWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin: 0.5rem 0;
`;

const Tag = styled.span`
  background-color: #ddd;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 4px;
`;

const TechTags = ({ tags }) => (
  <TagsWrapper>
    {tags.map((tag, i) => (
      <Tag key={i}>{tag}</Tag>
    ))}
  </TagsWrapper>
);

export default TechTags;
