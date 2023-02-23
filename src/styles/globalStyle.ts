import { createGlobalStyle } from "styled-components";

export const searchTheme = {
  brightWhite: "hsl(0, 0%, 98%)",
  midtWhite: "hsl(240, 5%, 96%)",
  gray: "hsl(0, 0%, 70%)",
  darkBlack: "hsl(0, 0%, 10%)",
  midBlack: "hsl(0, 0%, 15%)",

  xsScreen: "380px",
  smallScreen: "620px",
  tabletScreen: "768px",
  largeScreen: "900px",
};

export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  background-color: hsl(0, 0%, 15%);
  font-family: 'montserrat',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
    }

ul, li {
  list-style: none;
    }
`;
