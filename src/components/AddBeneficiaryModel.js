import React from "react";
import "./addBeneficaryModal.css";
const AddBeneficiaryModel = () => {
  return (
    <div >
      <div className="wrapper11">
        <a href="#demo-modal">Add Beneficiary</a>
      </div>

      <div id="demo-modal" className="modal11">
        <div className="modal__content">
          <h1>CSS Only Modal</h1>

          <p>
            You can use the :target pseudo-class to create a modals with Zero
            JavaScript. Enjoy!
          </p>

          <a href="#" className="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddBeneficiaryModel;
