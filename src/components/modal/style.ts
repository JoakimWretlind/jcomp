import styled, { keyframes } from "styled-components";

type ModalProps = {
  isModal: boolean;
};

const enterOpacity = keyframes`
    0%{ opacity: 0 }
    100%{ opacity: 1}
`;

const imageAnimation = keyframes`
    0%{ height: 40rem; width: 0rem }
    100%{height: 40rem; width: 40rem}
`;

const imageAnimation_small = keyframes`
    0%{ height: 23rem; width: 0rem }
    100%{ height: 23rem; width: 23rem}
`;

export const ModalWrapper = styled.div<ModalProps>`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${enterOpacity} 0.5s ease;
  background: radial-gradient(#212f3e, #000000);
  p {
    margin-top: 2rem;
    font-weight: 300;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.brightWhite};
    opacity: ${({ isModal }) => (isModal ? "0" : "1")};
    &:hover {
      cursor: default;
    }
  }
`;

export const ImgContainer = styled.div<ModalProps>`
  overflow: hidden;
  background: radial-gradient(#c9f6fd, #212f3e);
  height: 10rem;
  width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${imageAnimation_small} 0.75s forwards;
  animation-timing-function: cubic-bezier(1, 0.37, 0.41, 0.85);
  opacity: ${({ isModal }) => (isModal ? "0" : "1")};
  border-radius: 1rem;
  box-shadow: 0.1rem 0.4rem 1.2rem rgba(0, 0, 0, 0.8);
  transition: 0.75s ease;
  padding: 1.4rem;
  @media (min-width: 440px) {
    animation: ${imageAnimation} 0.75s forwards;
  }
  &:hover {
    transition: 0.3s ease;
    transform: translateY(0.05rem);
    cursor: crosshair;
    box-shadow: 0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;
