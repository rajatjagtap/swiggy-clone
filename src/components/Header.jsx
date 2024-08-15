import React from "react";
import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { TfiShoppingCartFull } from "react-icons/tfi";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const ShowSideMenu = () => {
    setToggle(true);
  };

  const HideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      sup: "New",
    },
    {
      icon: <FaHandsHelping />,
      name: "Help",
    },
    {
      icon: <LiaSignInAltSolid />,
      name: "Sign In",
    },
    {
      icon: <TfiShoppingCartFull />,
      name: "Cart",
    },
  ];

  return (
    <>
      
      <div
        className="black-overlay z-[9999] w-full h-full fixed duration-500"
        onClick={HideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        {/* div: for button  */}
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full pt-[10rem] bg-white absolute duration-500"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="flex  justify-center  w-full"></div>
        </div>
      </div>

      <header className="shadow-xl justify-center sticky top-0 bg-white z-[9999]">
        {/* div:for placing various header elements */}
        <div className="max-w-[1200px] mx-auto flex">
          {/* div: for logo */}
          <div className="w-[100px] flex items-center">
            <img src="images/logo.png" alt="" className="w-full h-[80%]" />
          </div>

          {/* div:span items */}
          <div className="flex-row justify-center mt-8">
            <span className="font-bold border-b-[3px] border-[black] hover:text-[#fc8019] cursor-pointer">
              Hinjawadi
            </span>
            <span className="ml-2">
              Phase 1, Hinjawadi Rajiv Gandhi Infotech Park
            </span>
          </div>

          {/* dropdown */}
          {/* <RxCaretDown
            onClick={ShowSideMenu}
            font-size={25}
            className="font-bold mt-8  text-[#ff5200]"
          /> */}

          <nav className=" hidden  md:flex list-none gap-10  ml-auto text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center cursor-pointer space-x-2 hover:text-[#fc8019]"
                >
                  <div>{link.icon}</div>

                  <div>{link.name}</div>

                  <div>
                    <sup className="text-[#fc8019]">{link.sup}</sup>
                  </div>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
