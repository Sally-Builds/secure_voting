import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   requestWallet,
//   reset,
//   getAdminAddress,
// } from "../../store/auth/authSlice";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

const Header = ({ web3 }) => {
  const [hamburgerIcon, setHamburgerIcon] = useState(false);
  const handleHamburgerState = () => setHamburgerIcon(!hamburgerIcon);
  // const [myAddress, setMyAddress] = useState("");
  // const [myAdminAddress, setMyAdminAddress] = useState("");
  // const dispatch = useDispatch();
  // const { message, isError, isSuccess, isLoading, isLoggedIn, adminAddress } =
  //   useSelector((state) => state.authSlice);

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   if (isSuccess) {
  //     toast.success(message);
  //   }
  //   dispatch(reset());
  //   dispatch(getAdminAddress());
  //   if (isLoggedIn) {
  //     setMyAddress(isLoggedIn.toLowerCase());
  //   }
  //   setMyAdminAddress(adminAddress.toLowerCase());
  //   // console.log(myAddress);
  //   // console.log(myAdminAddress);
  // }, [
  //   message,
  //   isError,
  //   isSuccess,
  //   isLoading,
  //   isLoggedIn,
  //   dispatch,
  //   adminAddress,
  //   setMyAddress,
  //   setMyAdminAddress,
  //   myAdminAddress,
  //   myAddress,
  // ]);

  // const connectWallet = () => {
  //   dispatch(requestWallet());
  // };

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
          <li
            className="m-3 border-b-2 border-gray-100 md:border-none"
            onClick={web3.connect}
          >
            <button className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-400 hover:bg-white bg-teal-200 border-teal-200 p-1 rounded-full tracking-wider pl-2 pr-2 border-2">
              Connect
            </button>
          </li>
          {/* <li className="m-3">
            <button
              onClick={connectWallet}
              className={
                isLoggedIn
                  ? "hidden"
                  : "font-semibold text-gray-500 uppercase text-sm hover:text-gray-400 hover:bg-white bg-teal-200 border-teal-200 p-1 rounded-full tracking-wider pl-2 pr-2 border-2"
              }
            >
              Connect {isLoggedIn}
            </button>
          </li>
          <li className="m-3">
            <Link
              to="/dashboard"
              className={
                isLoggedIn
                  ? "font-semibold text-gray-200 uppercase text-sm hover:text-gray-400 hover:bg-white bg-primary border-primary p-1 rounded-full tracking-wider pl-2 pr-2 border-2"
                  : "hidden"
              }
            >
              Dashboard
            </Link>
          </li> */}
          {/* {myAdminAddress == myAddress ? (
            <li className="m-3">
              <Link
                to="/admin"
                className="font-semibold text-gray-500 uppercase text-sm hover:text-gray-400 hover:bg-white bg-teal-200 border-teal-200 p-1 rounded-full tracking-wider pl-2 pr-2 border-2"
              >
                Admin
              </Link>
            </li>
          ) : (
            <></>
          )} */}
        </ul>
      </nav>
    </>
  );
};

export default Header;
