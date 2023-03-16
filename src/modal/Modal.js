import React, { useEffect, useState } from "react";
import "./modal.css";
import { Link } from "react-router-dom";

const Modal = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <Link state={list} to={"/list"}>
        <button className="countNumberBtn">10</button>
      </Link>
    </div>
  );
};

export default Modal;
