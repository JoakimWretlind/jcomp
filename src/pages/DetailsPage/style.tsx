import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.midBlack};
`;

export const HeaderWrapper = styled.div`
  margin: 3rem auto;
  display: flex;
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    color: ${(props) => props.theme.brightWhite};
  }
  @media (min-width: ${(props) => props.theme.midScreen}) {
    margin: 0 auto 3rem;
  }
`;

export const Icon = styled.div`
  font-size: 3rem;
  margin: 0.3rem 1rem 0 0;
  color: ${(props) => props.theme.brightWhite};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  padding-bottom: 7rem;
  @media (min-width: ${(props) => props.theme.midScreen}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;

export const ImgWrapper = styled.div`
  grid-row: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 71rem;
  margin-top: 1rem;
  @media (min-width: ${(props) => props.theme.midScreen}) {
    width: 56%;
  }
`;

export const ImgHolder = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midWhite};
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.6rem rgb(0, 0, 0);
  transition: 0.3s ease;
  @media (min-width: ${(props) => props.theme.xsScreen}) {
    width: 44%;
    height: 15rem;
  }
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    height: 17rem;
    width: 21.4%;
  }
  @media (min-width: ${(props) => props.theme.midScreen}) {
    width: clamp(15rem, 22vw, 25rem);
    height: 19rem;
  }
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    width: clamp(19rem, 22vw, 30rem);
    height: 23rem;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    transition: 0.7s ease;
    filter: contrast(100%);
  }
  &:hover {
    transition: 0.7s ease;
    transform: translateY(-0.1rem);
    filter: contrast(120%);
  }
`;

export const TextPane = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  @media (min-width: ${(props) => props.theme.midScreen}) {
    width: 45%;
    margin-top: 1rem;
  }
`;

export const TextWrapper = styled.div`
  grid-row: 1;
  flex: 1;
  min-width: 26rem;
  padding: 2rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.midWhite};
  box-shadow: inset 0 0.1rem 0.2rem rgba(0, 0, 0, 1),
    inset 0 -0.2rem 0.4rem rgba(255, 255, 255, 1);
  h4 {
    font-size: 2.4rem;
    letter-spacing: 0.2rem;
    margin: 1rem 0 1rem 1rem;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.4;
    letter-spacing: 0.1rem;
    margin-bottom: 1.4rem;
    color: ${(props) => props.theme.darkBlack};
    &.price {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
`;
