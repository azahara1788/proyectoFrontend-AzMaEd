import { useState } from "react";
import "./Modal.css";

export const Modal = ({ label, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="modal">
      <button onClick={() => setShow(!show)}>{label}</button>
      {show && (
        <div onClick={() => setShow(false)} className="modal-bg">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="modal-fg"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
