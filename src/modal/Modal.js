import React, { useEffect, useState } from "react";
import "./modal.css";
import { SlArrowRight } from "react-icons/sl";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";

const Modal = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <div>
        <button
          style={
            open
              ? { backgroundColor: "#0048ba", color: "white" }
              : { backgroundColor: "rgb(224, 224, 226)", color: "black" }
          }
          onClick={handleOpen}
          className="countNumberBtn"
        >
          10
        </button>
      </div>

      {open ? (
        <div
          className="accountCard"
          style={{ marginTop: "-350px", padding: "20px", zIndex: "200" }}
        >
          <h6
            onClick={handleOpen}
            style={{
              position: "absolute",
              marginTop: "3px",
              marginLeft: "1320px",
              cursor: "pointer",
            }}
          >
            X
          </h6>
          {list.map((item) => (
            <div style={{}} className="listCard">
              <div className="buildingIcon">
                <HiOutlineBuildingLibrary
                  style={{ width: "60px", height: "35px", color: "gray" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="infoDetails"
              >
                <div>
                  <div className="nameInfo">
                    <h3>{item.holder_name}</h3>
                    <h3>({item.position})</h3>{" "}
                    <hr style={{ height: "16px", marginTop: "25px" }} />
                    <h3 style={{ color: "gray" }}>{item.currency[0]}</h3>
                  </div>
                  <div style={{ marginTop: "-20px" }}>
                    <p style={{ color: "gray" }}>Account Number</p>
                    <p style={{ marginTop: "-10px" }}>{item.account_number}</p>
                  </div>
                  <hr />

                  <p style={{ marginTop: "-3px", color: "gray" }}>
                    {item.status}
                  </p>
                </div>
                <button
                  style={{
                    marginLeft: "40px",
                    cursor: "pointer",
                    backgroundColor: "white",
                    border: "1px solid white",
                  }}
                >
                  <SlArrowRight
                    style={{ height: "25px", width: "25px", color: "gray" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Modal;
