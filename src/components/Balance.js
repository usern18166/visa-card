import React from "react";
import balance from "./balance.module.css";

const Balance = () => {
  return (
    <div className={balance.main}>
      <h4 className={balance.balance}>Balance</h4>
      <div className={balance.container}>
        <div className={balance.card}>
          <p className={balance.dollar}>0.00 USD</p>
        </div>
        <div className={balance.card}>
          <p className={balance.dollar}>0.00 EUR</p>
        </div>
        <div className={balance.card}>
          <p className={balance.dollar}>0.00 GBP</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
