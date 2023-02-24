import styled from "styled-components";

type DetailProps = {
  isDetails: boolean;
};

export const ProductsPageWrapper = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductsContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 166rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  height: min-content;
  width: 80%;
  max-width: 60rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0 2rem;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    width: 75%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
  }
  button {
    padding: 0.8rem;
    width: 80%;
    max-width: 18rem;
    outline: none;
    border: none;
    border-radius: 0.3rem;
    margin: 0.2rem;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.brightWhite};
    box-shadow: 0 0.2rem 0.4rem rgba(13, 65, 73, 0.3);
    transition: 0.25s ease;
    @media (min-width: ${(props) => props.theme.smallScreen}) {
      margin: 0.1rem;
      min-width: 11rem;
    }
    &:hover {
      transform: translateY(0.1rem);
      cursor: pointer;
      background-color: ${(props) => props.theme.lightBlue};
      color: ${(props) => props.theme.darkBlack};
      box-shadow: 0 -0.1rem 0.2rem rgba(26, 153, 173, 0.3),
        inset 0 -0.1rem 0.2rem rgba(255, 255, 255, 1);
    }
  }
`;

export const Overlay = styled.div<DetailProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  // width (or height) has to be dynamic not to cover the open page
  width: ${({ isDetails }) => (isDetails ? "100vw" : "0vw")};
`;
