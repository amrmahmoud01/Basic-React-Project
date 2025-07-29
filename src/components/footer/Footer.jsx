import React from "react";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
faGlobe;
export default function Footer() {
  return (
    <>
      <div className={`row m-auto gy-5 ${style.footerBody}`}>
        <div className="text-center col-sm-12 col-md-4">
          <h3 className="text-uppercase">Location</h3>
          <h4 className="fs-6 mb-3">2215 John Daniel Drive</h4>
          <h4 className="fs-6">Clark, MO 65243</h4>
        </div>
        <div className="col-sm-12 col-md-4">
          <h3 className="text-center">AROUND THE WEB</h3>
          <div className="container">
            <div className="d-flex justify-content-center">
              <div
                className={`${style.icon} me-2 d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div
                className={`${style.icon} me-2 d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div
                className={`${style.icon} me-2 d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div
                className={`${style.icon} me-2 d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faGlobe} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center col-sm-12 col-md-4">
          <h3 className="text-uppercase">ABOUT FREELANCER</h3>
          <h4 className="fs-6">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route{" "}
          </h4>
        </div>
      </div>
      <footer className="py-4 bg-dark text-white text-center">
        Copyright © Your Website 2021
      </footer>
    </>
  );
}
