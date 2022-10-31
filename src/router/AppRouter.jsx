import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/nav/Navbar";
import { GlobalStyles } from "./../components/globalStyles/GlobalStyles";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";
import About from "./../pages/about/About";
import Detail from "./../pages/detail/Detail";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
