import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.midBlack};
  background: radial-gradient(#343434, #171717);
`;

export const MainWrapper = styled.div`
  position: relative;
  padding: 3rem 0;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-flex-group: yellowgreen;
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.brightWhite};
  @media (min-width: ${(props) => props.theme.midScreen}) {
    justify-content: center;
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  left: 1rem;
  width: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.brightWhite};
  @media (min-width: ${(props) => props.theme.midScreen}) {
    left: 4rem;
  }
  .icon {
    height: 2.4rem;
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

export const Header = styled.div`
  width: 65%;
  margin-right: 1rem;
  @media (min-width: ${(props) => props.theme.midScreen}) {
    margin-right: 0;
  }
  h2 {
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 71rem;
  margin-top: 1rem;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: ${(props) => props.theme.midScreen}) {
    width: 56%;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: 0.7s ease;
  filter: contrast(100%);
`;

export const ImgHolder = styled.div`
  overflow: hidden;
  width: 80vw;
  height: 15rem;
  margin: 1rem;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midWhite};
  border-radius: 0.4rem;
  box-shadow: 0 0.2rem 0.6rem rgb(0, 0, 0);
  transition: 0.3s ease;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    height: 17rem;
    width: 19.2vw;
  }
  @media (min-width: ${(props) => props.theme.midScreen}) {
    width: clamp(15rem, 22vw, 25rem);
    height: 19rem;
  }
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    width: clamp(19rem, 22vw, 30rem);
    height: 23rem;
  }
  &:hover ${Img} {
    transition: 0.7s ease;
    transform: scale(1.035);
    filter: contrast(120%);
    cursor: pointer;
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
    margin: 1rem 0;
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
