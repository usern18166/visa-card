import React, { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="countNumberBtn"
        style={
          isOpen
            ? { backgroundColor: "#0048ba", color: "white" }
            : { backgroundColor: "rgb(224, 224, 226)", color: "black" }
        }
        // className={`wrapper1 btn2 ${open ? "active" : "disable"}`}
        onClick={toggleDropdown}
      >
        10
      </button>

      {isOpen ? (
        <div style={{ position: "absolute" }}>
          <div style={{ marginTop: "13px" }}>
           <h4>number</h4>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
