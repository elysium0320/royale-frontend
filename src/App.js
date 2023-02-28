import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/HeaderMenu";
import Profile from "./components/Profile";

import logo from "./assets/images/logo.svg";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-full flex flex-col text-white">
          <div className="w-full flex flex-row justify-center items-center bg-[blue] p-1">
            <p>
              Join our Discord to play and win prizes! <u>Join Discord</u>
            </p>
          </div>
          <div className="w-full flex flex-row justify-between items-center py-8 px-8 border-b-[1px] border-b-[gray]">
            <img src={logo} alt="logo" />
            <div>
              <Header />
            </div>
          </div>
          <div className="w-full flex-row justify-center items-center">
            <Routes>
              <Route index element={<Profile />} />
              <Route element={<Profile />} path="/profile" />
              <Route element={<div>leaderboards</div>} path="/leaderboards" />
              <Route element={<div>searchTicket</div>} path="/searchTicket" />
              <Route element={<div>discord</div>} path="/discord" />
              <Route element={<div>twitter</div>} path="/twitter" />
              <Route element={<div>Not found</div>} path="*" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
