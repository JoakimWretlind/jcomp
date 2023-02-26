import styled, { keyframes } from "styled-components";

const textboxAnimationS = keyframes`
    0%{
        top: -20vh;
        left: 40%;
        width: 4rem;
        transform: scale(1);
        animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    23%{
        top: 45%;
        left: 40%;
        width: 4rem;
        transform: scale(1);
    }
    50%{
        top: 45%;
        left: 40%;
        width: 24.8rem;
        transform: scale(1);
    }
    73%{
        top: 45%;
        left: 40%;
        width: 24.8rem;
        transform: scale(1);
        opacity: 1;
    } 
    99%{
        top: 3rem;
        left: 40%;
        width: 24.8rem;
        transform: scale(0.6);
        opacity: 0;        
    }
    100%{
        display: none;
    }
`;

const textboxAnimationM = keyframes`
    0%{
        top: -20vh;
        left: 40%;
        width: 4rem;
        transform: scale(1);
        animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    23%{
        top: 45%;
        left: 40%;
        width: 4rem;
        transform: scale(1);
    }
    50%{
        top: 45%;
        left: 40%;
        width: 24.8rem;
        transform: scale(1);
    }
    73%{
        top: 45%;
        left: 40%;
        width: 24.8rem;
        transform: scale(1);
    } 
    100%{
        top: 3rem;
        left: 0rem;
        width: 24.8rem;
        transform: scale(0.6);
        
    }
`;

const textboxAnimation = keyframes`
    0%{
        top: -20vh;
        left: 40%;
        width: 4rem;
        transform: scale(1);
        animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    23%{
        top: 45%;
        left: 40%;
        width: 4rem;
        transform: scale(1);
    }
    50%{
        top: 45%;
        left: 40%;
        width: 24.8rem;
        transform: scale(1);
    }
    73%{
        top: 45%;
        left: 40%;
        width: 24.8rem;
        transform: scale(1);
    } 
    100%{
        top: 3rem;
        left: 3rem;
        width: 24.8rem;
        transform: scale(0.8);
        
    }
`;

export const TextBox = styled.div`
  position: absolute;
  overflow: hidden;
  height: min-content;
  width: 4rem;
  top: -20vh;
  left: 30%;
  animation: ${textboxAnimationS} 1.7s forwards;
  animation-delay: 0.4s;
  z-index: 100;
  @media (min-width: ${(props) => props.theme.largeScreen}) {
    animation: ${textboxAnimationM} 1.7s forwards;
  }
  @media (min-width: ${(props) => props.theme.xlargeScreen}) {
    animation: ${textboxAnimation} 1.7s forwards;
  }
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 500;
  padding: 0 1rem;
  white-space: nowrap;
  color: ${(props) => props.theme.blue};
  border: 0.3rem solid ${(props) => props.theme.blue};
`;
