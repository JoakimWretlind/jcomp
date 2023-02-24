import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.lightWhite};
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
    font-size: 1.6rem;
    text-transform: capitalize;
    font-weight: 300;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
    border-radius: 0.3rem;
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.brightWhite};
    box-shadow: ${(props) => props.theme.buttonShadow};
    transition: 0.25s ease;
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
