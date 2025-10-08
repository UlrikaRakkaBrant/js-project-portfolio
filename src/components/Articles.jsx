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
  align-items: stretch; /* let cards stretch full width on mobile */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   align-items: center;  /* center the fixed-width cards (42/54rem) */
`;

const Card = styled.article`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  overflow: hidden; /* ensure image corners clip to 12px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  /* optional: match internal spacing uniformly */
  padding-right: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  flex-direction: row;
  width: 42rem;
  align-items: stretch; /* makes Body match Thumb height */
  column-gap: 1 rem; /* only horizontal spacing beween image and body */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  width: 54rem;
  column-gap: 3rem; /* wider horizontal gutter on desktop */
  }
`;

const Thumb = styled.img`
  width: 327px;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
  margin-left: 1rem; /* align with Body padding on mobile */
  flex-shrink: 0;    /* don’t let the image shrink in row layout */

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 200px;
    height: 338px;
    margin-left: 0;   /* reset on larger screens */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 479px;
    height: 311px;
  }
`;

const Body = styled.div`
  display: grid;
  gap: 0.5rem;
  flex: 1;        /* take remaining width in row layout */
  min-width: 0;   /* allow text to wrap */

                  /* On tablet/desktop, force top→bottom distribution:
                    row1: date (auto)
                    row2: title+excerpt (1fr, flexible)
                    row3: button (auto) */
@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  grid-template-rows: auto 1fr auto;
  align-content: stretch;
}
`;

const Meta = styled.time`
  display: inline-flex;                  /* lets us control height cleanly */
  align-items: center;                   /* vertical centering of text */
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1;                        /* keeps text vertically balanced */
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondary};

  /* Figma: Hug (142×28) */
  height: 28px;                          /* fixed height per design */
  padding: 0 0.75rem;                    /* gives space left/right */
  width: fit-content;                    /* "hug" content horizontally */
  min-width: 142px;                      /* ensures minimum 142px total width */

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`;



const Title = styled.h3`
  font-size: 1.125rem;
  line-height: 1.3;
  margin: 0;
`;

const Excerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

const ReadLink = styled.a`
  display: inline-flex;                 /* center the text vertically */
  align-items: center;
  justify-content: center;

  width: 303px;
  height: 48px;

  border-radius: 12px;                 /* ← updated to match your Figma */
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  /* spacing */
  margin-top: 0.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: end;     /* bottom align inside grid */
    justify-self: start; /* left align horizontally */
  }

  &:hover {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
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

