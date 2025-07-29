import React from "react";
import style from "./about.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <>
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 w-100 text-white ${style.aboutBody}`}
      >
        <h1 className="text-uppercase fw-bold">About Component</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line me-3 mt-2"></div>
          <FontAwesomeIcon icon={faStar} color="white" className="mt-2" />
          <div className="line ms-3 mt-2"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
