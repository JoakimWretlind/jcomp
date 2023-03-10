import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailsWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: 3rem;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 3rem;
    letter-spacing: 0.2rem;
    color: ${(props) => props.theme.brightWhite};
    @media (min-width: ${(props) => props.theme.midScreen}) {
      margin-top: 0;
    }
  }
`;

export const DetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 120rem;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  padding-bottom: 7rem;
  @media (min-width: ${(props) => props.theme.midScreen}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AllImagesContainer = styled.div`
  grid-row: 2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 71rem;
  margin-top: 1rem;
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    margin-top: 0;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 17rem;
  margin: 1rem;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midWhite};
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.6rem rgb(0, 0, 0);
  transition: 0.3s ease;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    height: 17rem;
    width: 21%;
  }
  @media (min-width: ${(props) => props.theme.midScreen}) {
    width: clamp(16rem, 25vw, 24rem);
  }
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    width: clamp(23rem, 29vw, 30rem);
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

export const InfoContainer = styled.div`
  grid-row: 1;
  width: 100%;
  min-width: 26rem;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const BackButton = styled(Link)`
  width: 6rem;
  height: 3rem;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.midWhite};
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  transition: 0.25s ease;
  box-shadow: ${(props) => props.theme.buttonShadow};
  &:hover {
    transform: translateY(0.1rem);
    cursor: pointer;
    background-color: ${(props) => props.theme.lightBlue};
    color: ${(props) => props.theme.darkBlack};
    box-shadow: 0 -0.1rem 0.2rem rgba(26, 153, 173, 0.3),
      inset 0 -0.1rem 0.2rem rgba(255, 255, 255, 1);
  }
`;

export const TextPane = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media (min-width: ${(props) => props.theme.midScreen}) {
    margin: 0;
    width: 40%;
    max-width: 40rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Links = styled(Link)`
  margin-top: 2rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.brightWhite};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  transition: 0.3s ease;
  p {
    padding-left: 0.5rem;
  }
  &:hover {
    transform: translateY(0.1rem);
    cursor: pointer;
    background-color: ${(props) => props.theme.lightBlue};
    color: ${(props) => props.theme.darkBlack};
    box-shadow: 0 -0.1rem 0.2rem rgba(26, 153, 173, 0.3),
      inset 0 -0.1rem 0.2rem rgba(255, 255, 255, 1);
  }
`;
