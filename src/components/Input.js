import React, { useEffect, useState } from "react";
import input from "./input.module.css";
import { Link } from "react-router-dom";

const Input = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState(false);

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  useEffect(() => {
    fetch("/history.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function searchByDateRange(startDate, endDate) {
    const filteredData = data.filter((item) => {
      const date = new Date(item.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setResults(filteredData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchByDateRange(startDate, endDate);
    setSearchResult(startDate, endDate);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <div>
            <div className={input.searchField}>
              <input
                lang="fr"
                placeholder="DD/MM/YYYY"
                style={{ textTransform: "uppercase" }}
                type="date"
                className={input.search}
                id="start-date"
                value={startDate}
                onChange={handleDateChange}
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
                lang="fr"
                style={{ textTransform: "uppercase" }}
                type="date"
                className={input.search}
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
            />
          </div>
          <div>
            <button type="submit" className={input.btnSearch}>
              Search
            </button>
          </div>
        </form>
      </div>

      <div
        style={{
          display: searchResult ? "block" : "none",
        }}
      >
        <table style={{ marginTop: "40px" }}>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Beneficiary</th>
            <th>Amount</th>
            <th>Preprocess</th>
            <th>Status</th>
          </tr>

          {results.map((historie) => (
            <tr className={input.dataStyle} key={historie.id}>
              <td>{historie.transactionId}</td>
              <td>{historie.date}</td>
              <td>{historie.beneficiary}</td>
              <td>${historie.amount}</td>
              <td>{historie.preprocess}</td>
              <td>{historie.status}</td>
            </tr>
          ))}
        </table>
      </div>

      {searchResult && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to={"/pdfSearch"}
            state={results}
          >
            <button className={input.download}>Download</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Input;
