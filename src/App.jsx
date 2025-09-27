import React from 'react';
import GlobalStyle from './styles/GlobalStyles.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.jsx';
import Header from './components/Header.jsx';
import Title from './components/Title.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills.jsx';
import Articles from './components/Articles.jsx';
import Contact from './components/Contact.jsx';
import styled from "styled-components"

const TitleHeroContainer = styled.div`  
  display: flex;  
  flex-direction: column;  

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <TitleHeroContainer >
        <Title />
        <Hero />
      </TitleHeroContainer>
      <About />
      <Tech />
      <Projects />
      <Skills />
      <Articles />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
