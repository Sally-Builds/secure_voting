import React from "react";
import Header from "../../components/Header/index";
import { Outlet } from "react-router-dom";

const mainLayout = ({ children, web3 }) => {
  return (
    <div className="grid">
      <Header web3={web3} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default mainLayout;
