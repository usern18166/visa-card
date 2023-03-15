import React, { useEffect, useState } from "react";
import "./addBeneficaryModal.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import { AiOutlineQuestionCircle } from "react-icons/ai";

import { IoMdArrowDropdown } from "react-icons/io";

const AddBeneficiaryModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json().then((data) => setCountry(data))
    );
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDetails = () => {
    setOpenDetails(!openDetails);
  };

  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  return (
    <div>
      <button
        style={
          isOpen
            ? { backgroundColor: "#0048ba", color: "white" }
            : { backgroundColor: "rgb(224, 224, 226)", color: "black" }
        }
        onClick={toggleDropdown}
        className="wrapper11"
      >
        <MdOutlineLibraryAdd
          style={{ marginTop: "2px", fontSize: "15px", padding: "0px 3px" }}
        />
        Add Beneficiary
      </button>

      {isOpen ? (
        <div className="bankAccount">
          <div
            style={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "gray", fontWeight: "500" }}>
              Add bank account
            </h4>
          </div>
          <hr style={{ margin: "10px" }} />
          <div onClick={toggleDetails} className="details">
            <IoIosArrowDown style={{ cursor: "pointer" }} />
            <p>Enter bank details</p>
          </div>
          <hr style={{ margin: "10px", marginTop: "-10px" }} />
          {openDetails && (
            <div style={{ marginRight: "220px" }}>
              <form style={{ marginTop: "-10px" }}>
                <p>Bank account type</p>
                <div style={{ marginTop: "-10px", marginRight: "51px" }}>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                    <label for="html">Business</label>
                  <br />
                  <input
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                    <label for="css">Personal</label>
                </div>
              </form>
            </div>
          )}
          {openDetails && (
            <div
              style={{ marginRight: "255px", marginTop: "10px" }}
              class="select"
            >
              <label style={{ color: "gray", marginTop: "19px" }}>
                Bank country
              </label>
              <br />
              <select className="selectOption" style={{ marginLeft: "8px" }}>
                {country.map((item) => (
                  <>
                    <option className="option" value="1">
                      <img src={item?.flags.png} alt="" />
                      {item?.name?.common}
                    </option>
                  </>
                ))}
              </select>
            </div>
          )}
          {openDetails && (
            <div style={{ marginTop: "10px" }} class="select">
              <label
                style={{
                  color: "gray",
                  marginTop: "19px",
                  marginRight: "140px",

                }}
              >
                Select bank account currency
              </label>
              <br />
              <select className="selectOption" style={{ marginLeft: "8px" }}>
                <option value="1">BDT</option>
                <option value="2">USD</option>
                <option value="3">URO</option>
              </select>
            </div>
          )}
          {openDetails && (
            <div className="questions">
              <AiOutlineQuestionCircle />
              <p >What are my currency options?</p>
            </div>
          )}
          {openDetails && <hr style={{ margin: "10px" }} />}

          {openDetails && (
            <div style={{ padding: "0px 0px 10px 0px" }}>
              <button className="nextBtn">
                next <IoMdArrowDropdown style={{marginTop:"5px"}} />
              </button>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddBeneficiaryModel;
