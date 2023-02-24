import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailsWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  max-width: 160rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3rem;
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 3rem;
    letter-spacing: 0.2rem;
    color: ${(props) => props.theme.brightWhite};
  }
`;

export const DetailsContainer = styled.div`
  height: min-content;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AllImagesContainer = styled.div`
  margin: 0 auto;
  height: max-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  max-width: 62rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  height: 22rem;
  width: 28rem;
  margin: 1rem;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.midWhite};
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.6rem rgb(0, 0, 0);
  transition: 0.3s ease;
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
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2rem;
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

export const TextPane = styled.div`
  height: 100%;
  width: 40%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Links = styled(Link)`
  margin: 2rem 0 0 2rem;
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
