import React from "react";
import "./modal.css";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const List = () => {
  const location = useLocation();
  const items = location.state;
  console.log(items);

  return (
    <div style={{}}>
      <div
        className="accountCard"
        style={{ marginTop: "13px", padding: "5px" }}
      >
        {items.map((item) => (
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

                <p style={{marginTop:"-3px",color:"gray"}}>{item.status}</p>
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
    </div>
  );
};

export default List;
