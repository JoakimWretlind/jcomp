import styled from "styled-components";

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

export const H2 = styled.h2`
  position: absolute;
  top: 3rem;
  left: 3rem;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 500;
  padding: 0 1rem;
  white-space: nowrap;
  transform: scale(0.8);
  color: ${(props) => props.theme.blue};
  border: 0.3rem solid ${(props) => props.theme.blue};
  visibility: hidden;
  @media (min-width: ${(props) => props.theme.smallScreen}) {
    visibility: visible;
  }
`;
