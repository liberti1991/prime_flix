import ReactLoading from "react-loading";
import { LayoutContainer, OverlayModal } from "./stylesLoading";

export const Loading = () => {
  return (
    <>
      <OverlayModal></OverlayModal>
      <LayoutContainer>
        <ReactLoading type="spin" color="red" />
      </LayoutContainer>
    </>
  );
};
