import { useState } from "react";

const UncontrolledModal = ({ buttonText, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  if (!isOpen) {
    return <button onClick={handleIsOpen}>{buttonText}</button>;
  }

  return (
    <div className="uncontrolled-modal" onClick={handleIsOpen}>
      <div
        className="uncontrolled-modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="uncontrolled-modal__button" onClick={handleIsOpen}>
          &#10006;
        </button>
        {children}
      </div>
    </div>
  );
};

export default UncontrolledModal;
