import styled from "styled-components";

export const MotionOverlay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Panel = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.midBlack};
`;

export const HorizontalMotionOverlay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
`;

export const PanelHorizontal = styled.div`
  width: 100vw;
  height: calc(100vh / 3);
  background-color: ${(props) => props.theme.midBlack};
`;
