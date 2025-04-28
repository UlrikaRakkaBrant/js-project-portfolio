// src/theme.js
export const theme = {
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF",
    // you can also add tagBg/tagText if you like
  },
  fonts: {
    family: "Poppins, sans-serif",
    size: {
      // desktop
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.5rem",
      body: "1rem",
      // tablet/mobile (you can override with media queries)
      h1Mobile: "2rem",
      h2Mobile: "1.75rem",
      // …etc
    },
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
  },
};
