import React from "react";
import card from "./card.module.css";
import chip from "../assets/images/chip.png";
import visa from "../assets/images/visa.png";
import logo from "../assets/images/micple.png";
import pattern from "../assets/images/pattern.png";
import Balance from "./Balance";
import Input from "./Input";
import History from "./History";

const Card = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "400px",
          // backgroundColor: "whitesmoke",
        }}
      >
        <div className={card.balance}>
          <Balance />
        </div>
        <div style={{ width: "400px" }}>
          <div className={card.card}>
            <div className={card.card_inner}>
              <div className={card.front}>
                <img src={logo} className={card.map_img} />
                <div className={card.row}>
                  <img src={chip} width="40px" />
                  <img src={visa} width="50px" />
                </div>
                <div
                  style={{
                    fontSize: "25px",
                  }}
                  className={card.rowNumber}
                >
                  <p>5244</p>
                  <p>2150</p>
                  <p>8252</p>
                  <p>6420</p>
                </div>
                <div
                  style={{ marginTop: "25px", fontSize: "12px" }}
                  className={card.row}
                >
                  <p style={{ fontWeight: "bold" }}>HOLDER NAME</p>
                  <p style={{ fontWeight: "bold" }}>VALID THRU</p>
                </div>
                <div
                  style={{ marginTop: "-10px", fontSize: "17px" }}
                  className={card.row}
                >
                  <p style={{ fontWeight: "bold" }}>RASHED ISLAM</p>
                  <p style={{ fontWeight: "bold" }}>11 / 27</p>
                </div>
              </div>

              <div className={card.back}>
                <img src={logo} className={card.map_img} />
                <div className={card.bar}></div>
                <div className={`${card.row} ${card.card_cvv}`}>
                  <div>
                    <img src={pattern} alt="" />
                  </div>
                  <p>824</p>
                </div>
                <div className={card.row}>
                  <p className={card.text}>
                    This is a virtual card design built using HTML and CSS. You
                    can also design something like this.
                  </p>
                </div>
                <div style={{ marginTop: "-20px" }} className={card.row}>
                  <p>CUSTOMER SIGNATURE</p>
                  <img src={visa} width="60px" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "20px",
            }}
          >
            <div>
              <button style={{}} className={card.btn1}>
                Lost/Hold Card
              </button>
            </div>
            <div>
              <button style={{}} className={card.btn1}>
                Section $
              </button>
            </div>
            <div>
              <button style={{}} className={card.btn1}>
                Reset/View Pin
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0px 20px 0px 20px", marginTop: "30px" }}>
        <Input />
      </div>
      <div style={{ padding: "0px 20px 0px 20px", marginTop: "40px" }}>
        <History />
      </div>
    </div>
  );
};

export default Card;
