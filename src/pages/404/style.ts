import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midtWhite};
`;

export const ErrorContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 160rem;
  padding-bottom: 2rem;
  @media (min-width: ${(props) => props.theme.xsScreen}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80vw;
    max-width: 160rem;
  }
`;

export const ImgContainer = styled.img`
  height: 80%;
  width: 40vw;
  margin-right: 2rem;
  object-fit: contain;
`;

export const TextContainer = styled.div`
  height: 100%;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${(props) => props.theme.xsScreen}) {
    width: 50%;
  }
  h3 {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
  }
  p {
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin: 3rem 0;
  }
  button {
    padding: 1rem 4rem;
    background-color: ${(props) => props.theme.midBlack};
    color: ${(props) => props.theme.midtWhite};
    border: none;
    outline: none;
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 1rem;
    border-radius: 0.3rem;
    box-shadow: ${(props) => props.theme.buttonShadow};
    transition: 0.25s ease;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.lightBlue};
      box-shadow: none;
      transform: translateY(0.1rem);
      background-color: ${(props) => props.theme.buttonShadowHover};
    }
  }
`;
