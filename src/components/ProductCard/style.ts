import styled from "styled-components";

export const Card = styled.div`
  width: 24rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.cardShadow};
  background-color: ${(props) => props.theme.brightWhite};
  padding: 2rem 1rem;
  margin: 1rem;
  color: ${(props) => props.theme.midBlack};
  transition: 0.3s ease;
  @media (min-width: ${(props) => props.theme.xsScreen}) {
    width: 34rem;
    padding: 1rem;
    aspect-ratio: 16/8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  &:hover {
    transform: translateY(-0.1rem);
    box-shadow: ${(props) => props.theme.cardShadowHover};
    filter: contrast(110%);
  }
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1rem;
    img {
      width: 100%;
      height: 100%;
      max-height: 12rem;
      margin-bottom: 2rem;
      object-fit: contain;
      margin-right: 0.5rem;
      @media (min-width: ${(props) => props.theme.xsScreen}) {
        margin-bottom: 0;
      }
    }
  }
  .right {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${(props) => props.theme.xsScreen}) {
      width: 50%;
    }
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
  }
`;
