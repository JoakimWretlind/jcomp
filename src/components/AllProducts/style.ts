import styled from "styled-components";

export const ProductsPageWrapper = styled.div`
  height: 100%;
  min-height: 72vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0rem 3rem;
`;

export const ProductsContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 160rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  height: min-content;
  width: 34rem;
  padding: 1rem;
  aspect-ratio: 16/7;
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
    background-color: ${(props) => props.theme.midBlack};
    color: ${(props) => props.theme.midtWhite};
    transition: 0.25s ease;
    @media (min-width: ${(props) => props.theme.smallScreen}) {
      margin: 0.1rem;
      min-width: 11rem;
    }
    &:hover {
      transform: translateY(0.1rem);
      cursor: pointer;
      background-color: ${(props) => props.theme.gray};
      color: #222;
    }
  }
`;
