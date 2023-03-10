import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: minmax(10rem, 10vh) minmax(76vh, 1fr) 14vh;
  background-color: ${(props) => props.theme.midWhite};
`;

export const H1 = styled.h1`
  grid-row: 1;
  height: 100%;
  font-size: clamp(2rem, 6vw, 3rem);
  text-transform: capitalize;
  font-weight: 400;
  //letter-spacing: 0.2rem;
  letter-spacing: clamp(0.2rem, 2vw, 1rem);
  //font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  color: ${(props) => props.theme.midBlack};
`;
