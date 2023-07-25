import { useState } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./scenes/Home/Home";
import AdminPage from "./scenes/AdminPage/AdminPage";

import "./App.css";

function App() {
  const token = useSelector((state) => state.token);

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
