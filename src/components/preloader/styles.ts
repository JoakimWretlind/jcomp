import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 1;
    }
    90%{
        left: 0;
        opacity:0
    }
    100%{
        opacity:0;
        left: 100vw;
    }
`;

const skewAnimation1 = keyframes`
0%{
    top: -120vh;
    transform: skewY(1deg);
}
100%{
    top: 0;
    transform: skewY(0);
}
`;

const skewAnimation2 = keyframes`
0%{
    top: -120vh;
    transform: skewY(3deg);
}
100%{
    top: 0;
    transform: skewY(0);
}
`;

export const logoAnimationS = keyframes`
    0%{
        top: -5rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.3;
        width: 3.4rem;
        animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    23%{
        top: 50vh;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 3.4rem;
    }
    50%{
        top: 50vh;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 21rem;
    }
    73%{
        top: 50vh;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 21rem;
        opacity: 1;
    }
    99%{
        opacity: 1;
        top: -5rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
    }
    100%{
      visibility: hidden;
    }
`;

export const logoAnimationM = keyframes`
    0%{
        top: -5rem;
        left: 41%;
        transform: translate(-50%,-50%);
        opacity: 0.3;
        animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    23%{
        top: 50vh;
        left: 41%;
        transform: translate(-50%,-50%);
        width: 4rem;
        transform: scale(1);
    }
    50%{
        top: 50vh;
        left: 36%;
        transform: translate(-50%,-50%);
        width: 24.8rem;
        transform: scale(1);
    }
    73%{
        top: 50vh;
        left: 36%;
        transform: translate(-50%,-50%);
        transform: scale(1);
    }
    100%{
      top: 3rem;
      left: 3rem;
      width: 24.8rem;
      transform: scale(0.8);
    }
`;

export const logoAnimation = keyframes`
    0%{
        top: -5rem;
        left: 50%;
        transform: translate(-50%,-50%);
        opacity: 0.3;
        animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    23%{
        top: 50vh;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 4rem;
        transform: scale(1);
    }
    50%{
        top: 50vh;
        left: 45%;
        transform: translate(-50%,-50%);
        width: 24.8rem;
        transform: scale(1);
    }
    73%{
        top: 50vh;
        left: 45%;
        transform: translate(-50%,-50%);
        transform: scale(1);
    }
    100%{
      top: 3rem;
      left: 3rem;
      width: 24.8rem;
      transform: scale(0.8);
    }
`;

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.midBlack};
  animation: ${fadeOut} 2s forwards;
  animation-delay: 2s;
  overflow: hidden;
  z-index: 100;
`;

export const SkewContainer = styled.div`
  position: absolute;
  top: -120vh;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.blue};
  animation: ${skewAnimation1} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  animation-delay: 2.2s;
  transform: skewY(0);
`;

export const SkewContainer2 = styled.div`
  position: absolute;
  top: -120vh;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.midWhite};
  animation: ${skewAnimation2} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  animation-delay: 2.25s;
  transform: skewY(0);
`;

//LogoAnimation
export const LogoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 0;
  max-width: 200rem;
  z-index: 101;
`;

export const TextBox = styled.div`
  position: absolute;
  overflow: hidden;
  top: -20rem;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  animation: ${logoAnimationS} 1.7s forwards;
  animation-delay: 0.4s;
  transform: scale(0.8);
  z-index: 101;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    transform: scale(1);
    animation: ${logoAnimationM} 1.7s forwards;
  }
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    transform: scale(1);
    animation: ${logoAnimation} 1.7s forwards;
  }
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 500;
  padding: 0 1rem;
  white-space: nowrap;
  color: ${(props) => props.theme.blue};
  border: 0.3rem solid ${(props) => props.theme.blue};
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    font-size: 3rem;
  }
`;
