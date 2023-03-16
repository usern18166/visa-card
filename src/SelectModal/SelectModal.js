import React, { useState } from "react";
import "./selectModal.css";

const SelectModal = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    if (open) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div
        style={{ textDecoration: "none" }}
        // href={`${open ? "#demo-modal1" : "#"}`}
      >
        <button
          style={
            isOpen
              ? { backgroundColor: "#0048ba", color: "white" }
              : { backgroundColor: "rgb(224, 224, 226)", color: "black" }
          }
          className={`wrapper1 btn2 ${open ? "active" : "disable"}`}
          onClick={toggleDropdown}
        >
          Select Type
        </button>
      </div>

      {isOpen ? (
        <div style={{ position: "absolute" }}>
          <div style={{ marginTop: "13px" }}>
            <button className="itemCard">Micple To Micple</button>
            <button className="itemCard">Account To Card</button>
            <button className="itemCard">Beneficiary</button>
            <button className="itemCard">Exchange</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectModal;
