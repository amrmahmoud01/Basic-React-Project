import React from "react";
import style from "./contact.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Contact() {
  return (
    <>
      <div
        className={`${style.contactBody} d-flex flex-column justify-content-center align-items-center`}
      >
        <h1 className="fw-bold primaryText">CONTACT SECTION</h1>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className="line me-3 mt-2 primaryBg"></div>
          <FontAwesomeIcon icon={faStar} color="#2c3e50" className="mt-2" />
          <div className="line primaryBg ms-3 mt-2"></div>
        </div>
        <div className="container w-50">
            <input type="text" className={`form-control border-top-0 border-start-0 border-end-0 mb-5 ${style.form}`} placeholder="userName"/>
            <input type="text" className={`form-control border-top-0 border-start-0 border-end-0 mb-5 ${style.form}`} placeholder="userAge" />
            <input type="text" className={`form-control border-top-0 border-start-0 border-end-0 mb-5 ${style.form}`} placeholder="userEmail" />
            <input type="text" className={`form-control border-top-0 border-start-0 border-end-0 mb-4 ${style.form}`} placeholder="userPassword" />
            <button className={`py-2 px-2 rounded-2 border-0 ${style.secBg} text-white`}>send Message</button>
        </div>

      </div>
    </>
  );
}
