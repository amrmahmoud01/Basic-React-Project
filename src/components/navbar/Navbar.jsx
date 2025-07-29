import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    console.log(scrolled);
  };
  useEffect(() => {
    setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }),
    [];
  return (
    <Navbar className={`position-fixed w-100 ${style.zindex}`} collapseOnSelect expand="lg">
      <Container
        className={`justify-content-between align-items-center  ${
          scrolled ? "py-0" : "py-4 "
        } ${style.scrolling}`}
      >
        <NavLink
          className="fs-2 fw-bold text-white text-decoration-none"
          to="/home"
        >
          START FRAMEWORK
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="">
            <NavLink
              className={({ isActive }) =>
                `text-decoration-none fw-bold me-4 text-uppercase text-white px-2 py-2 rounded-3 ${
                  isActive ? style.active : null
                } `
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-decoration-none fw-bold me-4 text-uppercase text-white px-2 py-2 rounded-3 ${
                  isActive ? style.active : null
                } `
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-decoration-none fw-bold me-4 text-uppercase text-white px-2 py-2 rounded-3 ${
                  isActive ? style.active : null
                } `
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
