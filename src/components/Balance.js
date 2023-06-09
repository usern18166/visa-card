import React, { useState } from "react";
import balance from "./balance.module.css";

import AddBeneficiaryModel from "./AddBeneficiaryModel";
import Modal from "../modal/Modal";
import SelectModal from "../SelectModal/SelectModal";

const Balance = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        marginLeft: "230px",
        position: "relative",
      }}
      className={balance.main}
    >
      <h4 style={{ marginTop: "100px" }} className={balance.balance}>
        Balance
      </h4>
      <div style={{ display: "flex", gap: "200px" }}>
        <div className={balance.container}>
          <div className={balance.card}>
            <p className={balance.dollar}>$1000 USD</p>
          </div>
        </div>
        <div>
          {/* trans */}
          <div
            onClick={handleClick}
            style={{ marginLeft: "-30px" }}
            className={balance.transfer}
          >
            <p style={{ fontWeight: "500" }}>Transfer</p>
          </div>

          {/* hr */}

          <hr
            style={{
              height: "200px",
              marginTop: "-110px",
              marginLeft: "190px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div className={balance.btn1}>
          <AddBeneficiaryModel />

          {/* <hr
            style={{
              height: "20px",
              marginTop: "9px",
              marginLeft: "5px",
              fontWeight: "bold",
              border: "1px solid black",
            }}
          /> */}
          <div>
            <Modal />
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              fontSize: "13px",
            }}
          >
            <SelectModal open={open} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
