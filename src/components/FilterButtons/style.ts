import styled from "styled-components";

type DetailProps = {
  isDetails: boolean;
};

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
`;

export const FilteredButton = styled.button`
  padding: 0.6rem 0.8rem;
  width: 80%;
  max-width: 18rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  margin: 0.2rem;
  background-color: ${(props) => props.theme.brightWhite};
  color: ${(props) => props.theme.midBlack};
  font-family: "montserrat", sans-serif;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
  transition: 0.25s ease;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    margin: 0.1rem;
    min-width: 11rem;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(0.1rem);
    background-color: ${(props) => props.theme.lightGray};
  }
  &.filtered {
    font-weight: 400;
    background-color: ${(props) => props.theme.midBlack};
    color: ${(props) => props.theme.midWhite};
  }
`;

export const Overlay = styled.div<DetailProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isDetails }) => (isDetails ? "100vw" : "0vw")};
`;

export const H2 = styled.h2`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: (2rem);
  font-weight: 500;
  letter-spacing: 0.1rem;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
