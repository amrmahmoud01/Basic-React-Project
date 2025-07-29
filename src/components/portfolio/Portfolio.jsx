import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import style from "./portfolio.module.css";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [overlayShowing, setOverlayShowing] = useState(false);

  const [imgSrc, setImgSrc] = useState(null);

  function closeLightbox(e) {
    if (e.target === e.currentTarget) {
      setImgSrc(null);
    }
  }

  return (
    <>
      <div
        className={`${
          style.overlay
        } position-absolute w-100 vh-100 position-fixed d-flex justify-content-center align-items-center ${
          imgSrc ? null : "d-none"
        }`}
        onClick={closeLightbox}
      >
        <img src={imgSrc} alt="" />
      </div>
      <div
        className={`container-fluid d-flex flex-column align-items-center w-100 mb-5 position-relative ${style.portfolioBody}`}
      >
        <h1 className="fw-bold primaryText">PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center ">
          <div className="line me-3 mt-2 primaryBg"></div>
          <FontAwesomeIcon icon={faStar} color="#2c3e50" className="mt-2" />
          <div className="line primaryBg ms-3 mt-2"></div>
        </div>
        <div className="container mt-3">
          <div className="row g-5">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`position-relative ${style.item}`}
                onClick={() => {
                  setImgSrc(port1);
                }}
              >
                <img className="w-100 rounded-3" src={`${port1}`} alt=""></img>
                <div
                  className={`${style.layer} w-100 position-absolute h-100 top-0 start-0 d-flex justify-content-center align-items-center rounded-3`}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    className="mt-2"
                    size="6x"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`position-relative ${style.item}`}
                onClick={() => {
                  setImgSrc(port2);
                }}
              >
                <img className="w-100 rounded-3" src={`${port2}`} alt=""></img>
                <div
                  className={`${style.layer} w-100 position-absolute h-100 top-0 start-0 d-flex justify-content-center align-items-center rounded-3`}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    className="mt-2"
                    size="6x"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`position-relative ${style.item}`}
                onClick={() => {
                  setImgSrc(port3);
                }}
              >
                <img className="w-100 rounded-3" src={`${port3}`} alt=""></img>
                <div
                  className={`${style.layer} w-100 position-absolute h-100 top-0 start-0 d-flex justify-content-center align-items-center rounded-3`}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    className="mt-2"
                    size="6x"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`position-relative ${style.item}`}
                onClick={() => {
                  setImgSrc(port1);
                }}
              >
                <img className="w-100 rounded-3" src={`${port1}`} alt=""></img>
                <div
                  className={`${style.layer} w-100 position-absolute h-100 top-0 start-0 d-flex justify-content-center align-items-center rounded-3`}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    className="mt-2"
                    size="6x"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`position-relative ${style.item}`}
                onClick={() => {
                  setImgSrc(port2);
                }}
              >
                <img className="w-100 rounded-3" src={`${port2}`} alt=""></img>
                <div
                  className={`${style.layer} w-100 position-absolute h-100 top-0 start-0 d-flex justify-content-center align-items-center rounded-3`}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    className="mt-2"
                    size="6x"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div
                className={`position-relative ${style.item}`}
                onClick={() => {
                  setImgSrc(port3);
                }}
              >
                <img className="w-100 rounded-3" src={`${port3}`} alt=""></img>
                <div
                  className={`${style.layer} w-100 position-absolute h-100 top-0 start-0 d-flex justify-content-center align-items-center rounded-3`}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="white"
                    className="mt-2"
                    size="6x"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
