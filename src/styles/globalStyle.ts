import { createGlobalStyle } from "styled-components";

export const searchTheme = {
  lightBlue: "hsl(188, 94%, 89%)",
  blue: "hsl(188, 74%, 39%)",
  brightWhite: "hsl(0, 0%, 98%)",
  lightWhite: "hsl(240, 5%, 96%)",
  midWhite: "hsl(240, 5%, 91%)",
  gray: "hsl(0, 0%, 70%)",
  lightGray: "hsl(0, 0%, 85%)",
  darkBlack: "hsl(0, 0%, 10%)",
  midBlack: "hsl(0, 0%, 15%)",
  red: "hsl(0, 88%, 37%)",

  buttonShadow: "0 0.2rem 0.4rem rgba(13, 65, 73, 0.3)",
  cardShadow: "0 0.2rem 0.4rem rgba(2, 2, 2, 0.2)",
  cardShadowHover: "0 0.3rem 0.6rem rgba(2, 2, 2, 0.2)",

  xsScreen: "380px",
  smallScreen: "620px",
  midScreen: "720px",
  tabletScreen: "768px",
  largeScreen: "865px",
  xlargeScreen: "1000px",
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
  /* overflow:scroll;
  ::-webkit-scrollbar {
  display: none;
} */
  
}
a {
  text-decoration: none;
    }

ul, li {
  list-style: none;
    }
`;
