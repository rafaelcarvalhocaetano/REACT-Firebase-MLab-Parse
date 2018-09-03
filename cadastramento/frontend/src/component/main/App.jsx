import "./app.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Footer from "../template/Footer";
import Router from "./Router";

export default props => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Router />
      <Footer />
    </div>
  </BrowserRouter>
);
