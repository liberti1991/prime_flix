import styled from "styled-components";

export const OverlayModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const LayoutContainer = styled.section`
  position: absolute;
  z-index: 160;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
