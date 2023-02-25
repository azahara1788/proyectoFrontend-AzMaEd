import { useState } from "react";
// Import css de la Modal
import "./Modal.css";

// Componente Modal
const Modal = ({ label, children }) => {
  // Defino estado para mostrar o ocultar children
  const [show, setShow] = useState(false);

  /* JSX componente.
  El boton permite de ocultar/visualizar children cambiando el valor de show
  Uso de rendering condicionál: {show && (...)} */
  return (
    <div className="modal">
      <button onClick={() => setShow(!show)}>{label}</button>
      {show && (
        <div onClick={() => setShow(false)} className="modal-bg">
          <div
            onClick={(e) => {
              e.stopPropagation();
              console.log("Evento click en modal fg");
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

export default Modal;
