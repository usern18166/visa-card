import React, { useEffect, useState } from "react";
import table from "./table.module.css";

const History = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    fetch("/history.json")
      .then((res) => res.json())
      .then((data) => setHistories(data));
  }, []);

  return (
    <table>
      <tr>
        <th>Transaction ID</th>
        <th>Date</th>
        <th>Beneficiary</th>
        <th>Amount</th>
        <th>Preprocess</th>
        <th>Status</th>
      </tr>

      {histories.map((historie) => (
        <tr className={table.dataStyle} key={historie.id}>
          <td>{historie.transactionId}</td>
          <td>{historie.date}</td>
          <td>{historie.beneficiary}</td>
          <td>${historie.amount}</td>
          <td>{historie.preprocess}</td>
          <td>{historie.status}</td>
        </tr>
      ))}
    </table>
  );
};

export default History;
