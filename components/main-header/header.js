import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink";

const Header = () => {
  return (
    <main className=" shadow-lg py-3">
      <div className="container flex justify-between mx-auto items-center">
        <Link href="/">
          <Image src={logo} className="w-8" alt="logo" />
        </Link>
        <nav>
          <ul className="flex space-x-3">
            {/* <NavLink href="/">Home</NavLink> */}
            <NavLink href="/meals">Meals</NavLink>
            <NavLink href="/comunity">Comunity</NavLink>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Header;
