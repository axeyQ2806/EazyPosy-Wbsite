import { CButton, CModal, CModalBody } from "@coreui/react";
import "./Modal.css";
import { useState } from "react";
const Modal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby='LiveDemoExampleLabel'
      >
        <CModalBody>
          <p>Woohoo, you're reading this text in a modal!</p>
        </CModalBody>
      </CModal>
    </>
  );
};

export default Modal;
