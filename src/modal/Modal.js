import React, { useEffect, useState } from "react";
import "./modal.css";
// import { HiBuildingLibrary } from "react-icons/b";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <button
        className="countNumberBtn"
        style={
          isOpen
            ? { backgroundColor: "#0048ba", color: "white" }
            : { backgroundColor: "rgb(224, 224, 226)", color: "black" }
        }
        // className={`wrapper1 btn2 ${open ? "active" : "disable"}`}
        onClick={toggleDropdown}
      >
        10
      </button>

      {isOpen ? (
        <div style={{ position: "absolute", marginLeft: "-473px" }}>
          <div
            className="accountCard"
            style={{ marginTop: "13px", padding: "5px" }}
          >
            {list.map((item) => (
              <div className="listCard">
                <div>
                  {/* <HiBuildingLibrary /> */}
                </div>
                <div>
                  <h3>{item.holder_name}</h3>
                  <p>{item.account_number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Modal;
