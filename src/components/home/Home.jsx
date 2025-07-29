import React from "react";
import avatar from "../../assets/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./home.module.css";
export default function Home() {
  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 w-100 ${style.homeBody}`}
    >
      <img src={avatar} className=" mb-5" alt="" />
      <h1 className="fw-bold text-white">START FRAMEWORK</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="line me-3 mt-2"></div>
        <FontAwesomeIcon icon={faStar} color="white" className="mt-2" />
        <div className="line ms-3 mt-2"></div>
      </div>
      <p className="text-white mt-3">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
