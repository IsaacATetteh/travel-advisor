"use client";
import { React, useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.jpg";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {};

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white ">
      <div className="flex items-center justify-between w-full h-full px-4 2xl:px-16 ">
        <div className="flex items-center">
          <Link href="/">
            <Image
              width="100"
              height="100"
              style={{ minWidth: "100px", minHeight: "75" }}
              src={Logo}
              alt="Logo"
              priority
            />
          </Link>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/destination">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Destination
              </li>
            </Link>
            <Link href="/destination">
              <li className="ml-10 uppercase hover:border-b text-xl">
                About Us
              </li>
            </Link>
            <Link href="/destination">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Testomonial
              </li>
            </Link>
            <Link href="/destination">
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
    </nav>
  );
};

export default Navbar;
