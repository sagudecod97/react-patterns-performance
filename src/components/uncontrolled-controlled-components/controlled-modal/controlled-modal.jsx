import "./controlled-modal.scss";

const ControlledModal = ({ shouldDisplay, onClose, buttonText, children }) => {
  return (
    <>
      {shouldDisplay && (
        <div className="controlled-modal" onClick={onClose}>
          <div
            className="controlled-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="controlled-modal__button" onClick={onClose}>
              &#10006;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ControlledModal;
