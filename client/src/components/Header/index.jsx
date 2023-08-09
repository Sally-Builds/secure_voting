import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = ({ web3 }) => {
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  const handleHamburgerState = () => setHamburgerIcon(!hamburgerIcon);
  const [user, setUser] = useState("");
  // const [myAddress, setMyAddress] = useState("");
  // const [myAdminAddress, setMyAdminAddress] = useState("");

  useEffect(() => {
    getAddress();
  });

  const getAddress = async () => {
    if (web3.provider) {
      let account = await web3.provider.request({
        method: "eth_requestAccounts",
      });
      if (account.length > 0) {
        setUser(account[0]);
      }
    }
  };
  return (
    <>
      <nav className="md:flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-secondary-200 text-3xl font-body font-bold p-3">
              <span className="border-b-2 border-gray-50">CaritasVote</span>
            </h1>
          </div>

          <div className="md:hidden cursor-pointer">
            <MenuIcon
              className={!hamburgerIcon ? "w-5" : "hidden w-5"}
              id="burger"
              onClick={handleHamburgerState}
            ></MenuIcon>
            <XIcon
              className={!hamburgerIcon ? "w-5 hidden" : "block w-5"}
              onClick={handleHamburgerState}
            ></XIcon>
          </div>
        </div>

        <ul
          className={
            !hamburgerIcon
              ? "hidden md:flex"
              : "md:flex justify-between items-center block"
          }
        >
          <li className="m-3 border-b-2 border-gray-100 md:border-none">
            <a
              href="/"
              className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-700 font-body"
            >
              Home
            </a>
          </li>
          <li className="m-3 border-b-2 border-gray-100 md:border-none">
            <a
              href="/"
              className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-700 font-body"
            >
              About
            </a>
          </li>
          <li className="m-3 border-b-2 border-gray-100 md:border-none">
            <a
              href="/"
              className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-700 font-body"
            >
              Contact us
            </a>
          </li>
          {user ? (
            <li
              className="m-3 border-b-2 border-gray-100 md:border-none"
              onClick={web3.connect}
            >
              <span className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-400 hover:bg-white bg-teal-200 border-teal-200 p-1 rounded-full tracking-wider pl-2 pr-2 border-2">
                {user}
              </span>
            </li>
          ) : (
            <li
              className="m-3 border-b-2 border-gray-100 md:border-none"
              onClick={web3.connect}
            >
              <button className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-400 hover:bg-white bg-teal-200 border-teal-200 p-1 rounded-full tracking-wider pl-2 pr-2 border-2">
                Connect
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
