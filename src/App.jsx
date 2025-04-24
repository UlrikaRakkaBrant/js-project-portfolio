import React from 'react';
import GlobalStyle from './styles/GlobalStyles.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills.jsx';
import Articles from './components/Articles.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
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
