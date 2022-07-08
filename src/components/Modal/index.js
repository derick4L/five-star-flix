import "./style.scss";

const Modal = ({ isOpen, onClose, id, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" id={id}>
      <div className="modal-content">
        <div className="modal-content-lose" onClick={onClose}>
          <span className="modal-close-icon">&times;</span>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
