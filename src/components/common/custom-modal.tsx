import { MODAL_EVENT_PROPS } from "@/model";
import { EventEmitter } from "@/utils";
import { useEffect, useState } from "react";
import { ConfirmationModal } from "@/components";
import { DialogContent, Dialog, styled } from "@mui/material";

const DialogWrapper = styled(Dialog)(
  () => `
    // .MuiDialog-container {
    //     height: auto;
    // }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px);
        max-width: fit-content !important;
        overflow: auto;
        box-sizing: border-box;
        padding: 20px;
    }
`
);

export const CustomModal = () => {
  const [modalDetails, setModalDetails] = useState<MODAL_EVENT_PROPS>({});
  const [visible, setVisible] = useState(false);
  //   const visibleRef = useRef(null);

  useEffect(() => {
    EventEmitter.addListener("modal", (params: MODAL_EVENT_PROPS) => {
      setModalDetails({ ...params, type: params.type || "custom" });
      setVisible((prev) => !prev);
      //   visibleRef.current = Date.now();
    });
  }, []);

  // useEffect(() => {
  //       setVisible((prev) => !prev);
  //     console.log('ref altered');
  //   }, [visibleRef.current]);

  let ModalBody = null;
  if (modalDetails.type === "custom") ModalBody = modalDetails.component;
  if (modalDetails.type === "confirmation") {
    const {
      type: _type,
      containerProps: _containerProps,
      ...confirmationModalProps
    } = modalDetails;
    ModalBody = function customModal(params) {
      return (
        <ConfirmationModal
          {...params}
          {...confirmationModalProps}
          sx={{
            minWidth: 500,
            // ...confirmationModalProps?.sx
          }}
          onConfirm={async (event) => {
            if (confirmationModalProps.onConfirm)
              await confirmationModalProps.onConfirm(event);
            setVisible(false);
          }}
          onCancel={async (event) => {
            if (confirmationModalProps.onCancel)
              await confirmationModalProps.onCancel(event);
            setVisible(false);
          }}
        />
      );
    };
  }

  return (
    <DialogWrapper
      {...modalDetails.containerProps}
      className={["custom-scrollbar", modalDetails.containerProps?.className]
        .filter((el) => el)
        .join(" ")}
      sx={{ width: "100vw", ...modalDetails.containerProps?.sx }}
      open={visible}
      onBackdropClick={(event) => {
        if (modalDetails.containerProps?.onBackdropClick)
          modalDetails.containerProps.onBackdropClick(event);
        if (
          modalDetails.containerProps?.closeOnClick === undefined
            ? true
            : modalDetails.containerProps?.closeOnClick
        )
          setVisible(false);
      }}
    >
      <DialogContent
        {...modalDetails.contentContainerProps}
        sx={{
          boxSizing: "border-box",
          padding: 0,
          width: modalDetails.contentContainerProps?.sx
            ? modalDetails.contentContainerProps?.sx["width"]
            : { xs: "90%", sm: "80%", md: 500 },
          ...modalDetails.contentContainerProps?.sx,
        }}
      >
        {ModalBody && <ModalBody onCancel={() => setVisible(false)} />}
      </DialogContent>
    </DialogWrapper>
  );
};
