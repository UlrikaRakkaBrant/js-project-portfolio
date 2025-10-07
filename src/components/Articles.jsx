// file: src/components/Articles.jsx
import React from 'react';
import styled from 'styled-components';
import articleData from '../data/articles.json';

const Wrapper = styled.section`
  padding: 2rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 12px;
  overflow: hidden; /* ensure image corners clip to 12px */
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  flex-direction: row;
  width: 42rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  width: 54rem;
  gap: 3rem;
  }
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
  display: block;

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 338px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 479px;
    height: 311px;
  }
`;

const Body = styled.div`
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
`;

const Meta = styled.time`
  font-size: 0.875rem;
  color: #666;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.3;
`;

const Excerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ReadLink = styled.a`
  margin-top: 0.25rem;
  align-self: start;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  text-decoration: none;

  &:hover { opacity: 0.9; }
  &:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }
`;

const formatDateWithOrdinal = (iso) => {
  // e.g., "July 14th"
  const d = new Date(iso);
  const day = d.getDate();
  const month = d.toLocaleString(undefined, { month: 'long' });
  const ordinal = (n) => {
    const j = n % 10, k = n % 100;
    if (j === 1 && k !== 11) return 'st';
    if (j === 2 && k !== 12) return 'nd';
    if (j === 3 && k !== 13) return 'rd';
    return 'th';
  };
  return `${month} ${day}${ordinal(day)}`;
};

const Articles = () => {
  return (
    <Wrapper aria-labelledby="articles-heading">
      <SectionTitle id="articles-heading">My Words</SectionTitle>

      <List>
        {articleData.articles.map((a) => (
          <Card key={a.url}>
            <Thumb src={a.image} alt={a.imageAlt || a.title} loading="lazy" />

            <Body>
              <Meta dateTime={a.date}>{formatDateWithOrdinal(a.date)}</Meta>
              <Title>{a.title}</Title>
              <Excerpt>{a.excerpt}</Excerpt>
              <ReadLink
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read article: ${a.title}`}
              >
                Read article
              </ReadLink>
            </Body>
          </Card>
        ))}
      </List>
    </Wrapper>
  );
};

export default Articles;

