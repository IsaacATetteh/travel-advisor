"use client";
import { React, useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.jpg";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="fixed z-20 w-full h-20 shadow-xl bg-white backdrop-blur-md"
      id="navbar"
      style={{ paddingRight: "0 !important" }}
    >
      <div className="flex items-center justify-between w-full h-full px-4 2xl:px-16 ">
        <Link className="flex items-center" href="/">
          <Image
            width="100"
            height="100"
            style={{ minWidth: "100px", minHeight: "75" }}
            src={Logo}
            alt="Logo"
            priority
          />
          <p className="">Travel Advisor</p>
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="">
              <li className="ml-10 uppercase hover:border-b text-xl">
                About Us
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Testomonial
              </li>
            </Link>
            <Link href="">
              <li className="mx-10  uppercase hover:border-b text-xl">
                Gallery
              </li>
            </Link>
          </ul>
        </div>
        <div className="sm:hidden cursor-pointer pl-24" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#d7d7d7] ease-in duration-500 p-10 z-30"
            : "fixed left-[-100%] top-0 padding-10 ease-in duration-500 z-30"
        }
      >
        <div className="w-full cursor-pointer flex items-center justify-end">
          <div onClick={handleNav}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/destination">
              <li
                className="py-4 uppercase hover:border-b text-xl"
                onClick={handleNav}
              >
                About Us
              </li>
            </Link>
            <Link href="/destination">
              <li
                className="py-4 uppercase hover:border-b text-xl"
                onClick={handleNav}
              >
                Testomonial
              </li>
            </Link>
            <Link href="/destination">
              <li
                className="py-4  uppercase hover:border-b text-xl"
                onClick={handleNav}
              >
                Gallery
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
