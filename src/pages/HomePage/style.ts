import styled from "styled-components";

export const HomePageContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.midtWhite};
  h1 {
    margin: 3rem 0 1rem;
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 0.2rem;
    font-family: "Roboto", sans-serif;
  }
`;
