import React, { useState } from "react";
import input from "./input.module.css";

const Input = () => {
  const [searchDate, setSearchDate] = useState("");
  const [showData, setShowData] = useState(false);

  const handleDateSearch = (event) => {
    if (event.target.value === "") {
      setShowData(false);
    }
    const input = event.target;
    const date = new Date(input.value);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    setSearchDate(month + "/" + day + "/" + year);
  };
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div>
        <div className={input.searchField}>
          <input
            type="date"
            className={input.search}
            onChange={handleDateSearch}
          />
        </div>
        <label className={input.label} htmlFor="Start">
          Start Date
        </label>
      </div>

      <div className={input.to}>
        <p>To</p>
      </div>

      <div>
        <div className={input.searchField}>
          <input
            type="date"
            className={input.search}
            onChange={handleDateSearch}
          />
        </div>
        <label className={input.label} htmlFor="Start">
          End Date
        </label>
      </div>
      <div className={input.searchField}>
        <input
          type="text"
          placeholder="Select Reports"
          className={input.searchReport}
          onChange={handleDateSearch}
        />
    
      </div>
      <div>
        <button className={input.btnSearch}>Search</button>
      </div>
    </div>
  );
};

export default Input;
