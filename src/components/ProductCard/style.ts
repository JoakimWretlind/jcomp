import styled from "styled-components";

export const Card = styled.div`
  height: max-content;
  width: 100%;
  border-radius: 1rem;
  box-shadow: ${(props) => props.theme.cardShadow};
  background-color: ${(props) => props.theme.brightWhite};
  aspect-ratio: 16/9;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: ${(props) => props.theme.cardShadowHover};
    filter: contrast(110%);
  }
`;

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.midBlack};
  img {
    width: clamp(10rem, 50%, 16rem);
    height: 100%;
    max-height: 12rem;
    margin-bottom: 1rem;
    object-fit: contain;
    margin-right: 0.5rem;
  }
  h5 {
    text-transform: capitalize;
    font-size: 1.8rem;
    line-height: 0.8;
  }
  h6 {
    margin-top: 0.2rem;
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: 500;
    letter-spacing: 0.2rem;
  }
  p {
    font-size: 1.2rem;
    text-transform: capitalize;
    &.model {
      font-weight: 700;
      margin-bottom: 0.4rem;
    }
  }
  hr {
    border: none;
    background-color: ${(props) => props.theme.gray};
    height: 0.1rem;
    margin: 0.1rem 0 0.2rem;
  }
  div {
    width: 100%;
    text-align: center;
    @media (min-width: ${(props) => props.theme.xsScreen}) {
      width: 14rem;
      margin-left: 1rem;
    }
  }
`;
