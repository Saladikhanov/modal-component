import React, { Component, FunctionComponent, useState } from "react";
import { render } from "react-dom";
import { Modal } from "./modal/modal";
import { ConfirmationModal } from "./confirmation-modal/confirmation-modal";
import { useModal } from "./useModal";

const App: FunctionComponent = () => {
  const { isShown, toggle } = useModal();

  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <React.Fragment>
      <button onClick={toggle}>Open modal</button>

      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Header Text"
        modalContent={
          <ConfirmationModal
            onConfirm={onConfirm}
            onCancel={onCancel}
            message="Content Message"
          />
        }
      />
    </React.Fragment>
  );
};

render(<App />, document.getElementById("root"));
