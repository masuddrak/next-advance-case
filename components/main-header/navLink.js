"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  console.log(path.startsWith());

  return (
    <li>
      <Link
        href={href}
        className={
          path.startsWith(href) ? "font-bold shadow-md text-primary" : ""
        }
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
