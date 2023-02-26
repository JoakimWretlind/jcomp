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

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.midBlack};
  z-index: 100;
  animation: ${fadeOut} 2s forwards;
  animation-delay: 2s;
  overflow: hidden;
`;

export const SkewContainer = styled.div`
  position: absolute;
  top: -120vh;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.blue};
  animation: ${skewAnimation1} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  animation-delay: 2.3s;
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
  animation-delay: 2.35s;
  transform: skewY(0);
`;
