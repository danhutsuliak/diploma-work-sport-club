import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/header.component";

const Layout = () => (
  <div className="layout">
    <Header />
    <Outlet />
  </div>
);

export default Layout;
