import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 10vh minmax(76vh, 1fr) 14vh;
  background-color: ${(props) => props.theme.midWhite};
`;

export const H1 = styled.h1`
  grid-row: 1;
  height: 100%;
  font-size: 3rem;
  text-transform: capitalize;
  font-weight: 300;
  letter-spacing: 0.2rem;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;
