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

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 3rem;
  @media (min-width: ${(props) => props.theme.xsScreen}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
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
`;

export const FilterButton = styled.button`
  padding: 0.6rem 0.8rem;
  width: 80%;
  max-width: 18rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  margin: 0.2rem;
  background-color: ${(props) => props.theme.brightWhite};
  color: ${(props) => props.theme.midBlack};
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
  font-family: "montserrat", sans-serif;
  transition: 0.25s ease;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    margin: 0.1rem;
    min-width: 11rem;
  }
  &:hover {
    transform: translateY(0.1rem);
    cursor: pointer;
    color: ${(props) => props.theme.brightWhite};
    background-color: ${(props) => props.theme.lightGray};
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
