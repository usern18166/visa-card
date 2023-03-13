import React from "react";
import "./selectModal.css";

const SelectModal = ({ open }) => {
  return (
    <div>
      {/* <div className="wrapper1">
        <a href="#demo-modal1">Select Type</a>
      </div> */}
      <a style={{textDecoration:"none"}} href={`${open ? "#demo-modal1" : '#'}`}>
        <button
          className={`wrapper1 btn2 ${open ? 'active' : 'disable'}`}
          // disabled={open}
        >
          Select Type
        </button>
      </a>

      <div id="demo-modal1" className="modal1">
        <div className="modal__content1">
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
          <a href="#" className="modal__close1">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectModal;
