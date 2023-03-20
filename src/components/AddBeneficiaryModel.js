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
  const [bankDetails, setBankDetails] = useState(false);

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

  const bankClickDetails = () => {
    setBankDetails(!bankDetails);
  };

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
              padding: "30px",
              // backgroundColor: "red",
            }}
          >
            <h6
              onClick={toggleDropdown}
              style={{
                position: "absolute",
                marginTop: "-50px",
                marginLeft: "1260px",
                cursor: "pointer",
              }}
            >
              X
            </h6>
            <h4 style={{ color: "gray", fontWeight: "500" }}>
              Add bank account
            </h4>
          </div>
          <hr style={{ margin: "10px" }} />
          <div>
            <div onClick={toggleDetails} className="details">
              <IoIosArrowDown style={{ cursor: "pointer" }} />
              <p>Enter bank details</p>
            </div>
            <hr style={{ margin: "10px", marginTop: "-10px" }} />
            {openDetails && (
              <div style={{ marginRight: "1100px" }}>
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
                style={{ marginRight: "1140px", marginTop: "10px" }}
                class="select"
              >
                <label style={{ color: "gray", marginTop: "19px" }}>
                  Bank country
                </label>
                <br />
                <select className="selectOption" style={{ marginLeft: "15px" }}>
                  {country.map((item) => (
                    <>
                      <img src={item?.flags.png} alt="" />
                      <option className="option" value="1">
                        {item?.name?.common}
                      </option>
                    </>
                  ))}
                </select>
              </div>
            )}
            {openDetails && (
              <div
                style={{ marginTop: "10px", marginRight: "1030px" }}
                class="select"
              >
                <label
                  style={{
                    color: "gray",
                    marginTop: "19px",
                  }}
                >
                  Select bank account currency
                </label>
                <br />
                <select className="selectOption" style={{ marginLeft: "15px" }}>
                  <option value="1">USD</option>
                  <option value="2">BDT</option>
                  <option value="3">URO</option>
                </select>
              </div>
            )}
            {openDetails && (
              <div style={{ marginLeft: "30px" }} className="questions">
                <AiOutlineQuestionCircle />
                <p>What are my currency options?</p>
              </div>
            )}
            {openDetails && <hr style={{ margin: "10px" }} />}

            {openDetails && (
              <div style={{ padding: "0px 0px 10px 0px" }}>
                <button onClick={bankClickDetails} className="nextBtn">
                  next <IoMdArrowDropdown style={{ marginTop: "5px" }} />
                </button>
              </div>
            )}

            {openDetails && bankDetails && (
              <div>
                <hr style={{ margin: "10px", marginTop: "0px" }} />
                <div
                  style={{ marginTop: "10px", marginRight: "1150px" }}
                  class="select"
                >
                  <label
                    style={{
                      color: "gray",
                      marginTop: "19px",
                    }}
                  >
                    Bank Name
                  </label>
                  <br />
                  <select
                    className="selectOption"
                    style={{ marginLeft: "15px" }}
                  >
                    <option style={{ color: "gray" }} value="1">
                      e.g Royal Bank of Bangladesh
                    </option>
                    <option value="2">e.g Royal Bank of Bangladesh</option>
                    <option value="3">e.g Royal Bank of Bangladesh</option>
                  </select>
                </div>
              </div>
            )}
            {openDetails && bankDetails && (
              <div>
                <div
                  style={{ marginTop: "10px", marginRight: "1140px" }}
                  class="select"
                >
                  <label
                    style={{
                      color: "gray",
                      marginTop: "19px",
                    }}
                  >
                    Branch Name
                  </label>
                  <br />
                  <select
                    className="selectOption"
                    style={{ marginLeft: "15px" }}
                  >
                    <option style={{ color: "gray" }} value="1">
                      e.g Nizam Road Branch Chittagong
                    </option>
                    <option value="2">e.g Khilkhet Branch Dhaka</option>
                  </select>
                </div>
              </div>
            )}
            {openDetails && bankDetails && (
              <div>
                <div
                  style={{ marginTop: "10px", marginRight: "1075px" }}
                  class="select"
                >
                  <label
                    style={{
                      color: "gray",
                      marginTop: "19px",
                    }}
                  >
                    Account Holder Name
                  </label>
                  <br />
                  <select
                    className="selectOption"
                    style={{ marginLeft: "15px" }}
                  >
                    <option style={{ color: "gray" }} value="1">
                      e.g Payoneer Inc
                    </option>
                    <option value="2">e.g Payoneer Inc</option>
                  </select>
                </div>
              </div>
            )}
            {openDetails && bankDetails && (
              <div>
                <div
                  style={{ marginTop: "10px", marginRight: "1110px" }}
                  class="select"
                >
                  <label
                    style={{
                      color: "gray",
                      marginTop: "19px",
                    }}
                  >
                    Account Number
                  </label>
                  <br />
                  <select
                    className="selectOption"
                    style={{ marginLeft: "15px" }}
                  >
                    <option style={{ color: "gray" }} value="1">
                      e.g 34543567666
                    </option>
                    <option value="2">e.g 6876787815445</option>
                  </select>
                </div>
              </div>
            )}
            {openDetails && bankDetails && (
              <>
                <hr style={{ margin: "10px", marginTop: "20px" }} />
                <div
                  style={{
                    marginTop: "0px",
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <label>
                    <input type="checkbox" />{" "}
                    <span style={{ color: "gray" }}>
                      I confirm the bank account details above
                    </span>
                  </label>
                </div>
              </>
            )}
            {openDetails && bankDetails && (
              <div style={{ padding: "yarn15px" }}>
                <button className="submitBtn">submit</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddBeneficiaryModel;
