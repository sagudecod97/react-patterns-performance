import "./modal.scss";
import { useState } from "react";

const Modal = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  if (!isOpen) {
    return <button onClick={handleIsOpen}>{buttonText}</button>;
  }

  return (
    <div className="modal" onClick={handleIsOpen}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__button" onClick={handleIsOpen}>
          &#10006;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
