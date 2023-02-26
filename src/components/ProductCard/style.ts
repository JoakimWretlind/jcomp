import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 160rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  color: #fff;
  border-radius: 0.5rem;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.cardShadow};
  background-color: ${(props) => props.theme.brightWhite};
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: ${(props) => props.theme.cardShadowHover};
    filter: contrast(110%);
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Right = styled.div`
  width: 50%;
  color: #222;
  h5 {
    text-transform: capitalize;
    font-size: 1.8rem;
    line-height: 0.8;
    text-align: center;
  }
  h6 {
    margin-top: 0.2rem;
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  p {
    font-size: 1.2rem;
    text-transform: capitalize;
    &.model {
      font-weight: 700;
      margin-bottom: 0.4rem;
      text-align: center;
    }
    &.details {
      text-align: center;
    }
    &.price {
      margin-top: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
      @media (min-width: ${(props) => props.theme.xsScreen}) {
        text-align: left;
      }
    }
  }
  hr {
    border: none;
    background-color: ${(props) => props.theme.lightGray};
    height: 0.1rem;
    width: 100%;
    margin: 0.1rem 0 0.5rem;
  }
`;
