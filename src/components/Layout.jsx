import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <>
      <MyNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
