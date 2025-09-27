import styled from "styled-components"

const TitleText = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const Title = () => {
  return (
    <TitleText>Creative Developer with a background in project managing and theatre.</TitleText>
  );
};

export default Title;