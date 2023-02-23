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
  justify-content: flex-start;
  align-items: center;
  padding: 7rem 3rem 0;
  h2 {
    font-size: 3rem;
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 3rem;
    letter-spacing: 0.2rem;
    color: #f4f4f5;
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
  height: 22rem;
  width: 28rem;
  margin: 1rem;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f5;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 0.6rem rgb(0, 0, 0);
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const InfoContainer = styled.div`
  /* width: 40%;
  max-width: 40rem; */
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.2);
  margin: 0 2rem;
  background-color: #f4f4f5;
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
    color: #222;
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
  background-color: #f4f4f5;
  color: #555;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  transition: 0.25s ease;
  p {
    padding-left: 0.5rem;
  }
  &:hover {
    background-color: #f00;
  }
`;
