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
              ? { backgroundColor: "#0048ba",color:"white" }
              : { backgroundColor: "rgb(224, 224, 226)",color:"black" }
             
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
            <div className="itemCard">
              <h4 className="cardItem">Micple To Micple</h4>
            </div>
            <div className="itemCard">
              <h4 className="cardItem">Account To Card</h4>
            </div>
            <div className="itemCard">
              <h4 className="cardItem">Beneficiary</h4>
            </div>
            <div className="itemCard">
              <h4 className="cardItem">Exchange</h4>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectModal;
