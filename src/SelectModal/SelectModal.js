import React from "react";
import "./selectModal.css";

const SelectModal = () => {
  return (
    <div>
      <div className="wrapper1">
        <a href="#demo-modal1">Select Type</a>
      </div>

      <div id="demo-modal1" className="modal1">
        <div className="modal__content1">
          <div className="itemCard">
            <h3>Micple To Micple</h3>
          </div>
          <div className="itemCard">
            <h3>Account To Card</h3>
          </div>
          <div className="itemCard">
            <h3>Beneficiary</h3>
          </div>
          <div className="itemCard">
            <h3>Exchange</h3>
          </div>
          <a href="#" className="modal__close1">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectModal;
