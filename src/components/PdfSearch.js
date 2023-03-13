import React from "react";
import { Link, useLocation } from "react-router-dom";
import pdf from "./pdf.module.css";

const PdfSearch = () => {
  const location = useLocation();
  const items = location.state;
  // console.log(items)

   const handlePdf = () => {
     document.getElementById("pdfBtn").style.display = "none";
     window.print();
     document.getElementById("pdfBtn").style.display = "block";
   };
  return (
    <div>
      <table style={{ marginTop: "40px" }}>
        <tr>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Beneficiary</th>
          <th>Amount</th>
          <th>Preprocess</th>
          <th>Status</th>
        </tr>

        {items.map((historie) => (
          <tr className={pdf.dataStyle} key={historie.id}>
            <td>{historie.transactionId}</td>
            <td>{historie.date}</td>
            <td>{historie.beneficiary}</td>
            <td>${historie.amount}</td>
            <td>{historie.preprocess}</td>
            <td>{historie.status}</td>
          </tr>
        ))}
      </table>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
        }}
      >
        <button
        className={pdf.download}
          style={{
            padding: "5px 15px",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={handlePdf}
          id={"pdfBtn"}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default PdfSearch;
