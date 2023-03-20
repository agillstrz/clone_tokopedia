import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../compoents/Footer";
import Home from "./Home";
import Navbar from "../compoents/Navbar";

export default function Layout() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <Navbar setHover={setHover} />
      <div className="mt-[10rem]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
