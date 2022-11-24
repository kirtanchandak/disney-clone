import React from "react";
import Image from "next/image";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { MdScreenShare, MdSportsBasketball } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

function Header() {
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] h-[72px] flex items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="header-link group">
          <AiFillHome />
          <span className="span mt-1">Home</span>
        </a>
        <a className="header-link group">
          <MdScreenShare />
          <span className="span mt-1">TV</span>
        </a>
        <a className="header-link group">
          <RiMovie2Fill />
          <span className="span mt-1">Movies</span>
        </a>
        <a className="header-link group">
          <MdSportsBasketball />
          <span className="span mt-1">Sports</span>
        </a>
        <a className="header-link group">
          <AiFillPlusCircle />
          <span className="span mt-1">Watchlist</span>
        </a>
      </div>
      <button className="ml-auto uppercase px-4 border py-1 rounded hover:bg-white hover:text-black transition duration-300">
        Login
      </button>
    </div>
  );
}

export default Header;
