import { useState } from "react";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./scenes/Home/Home";
import AdminPage from "./scenes/AdminPage/AdminPage";
import AdminProfile from "./scenes/AdminProfile/AdminProfile";

import "./App.css";

function App() {
  //const token = useSelector((state) => state.token);
  const isAuth = useSelector((state) => Boolean(state.token));

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={!isAuth ? <Home /> : <Navigate to="/admin" />} />
            <Route path="/admin" element={isAuth ? <AdminPage />: <Navigate to="/" />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
