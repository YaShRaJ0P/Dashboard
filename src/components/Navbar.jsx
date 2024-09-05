"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { IoHome, IoPeople, IoPeopleCircle } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import { RxDoubleArrowLeft } from "react-icons/rx";

const navList = [
  { name: "Dashboard", icon: IoHome, link: "/" },
  { name: "Users", icon: IoPeople, link: "/users" },
  { name: "Teams", icon: IoPeopleCircle, link: "/teams" },
  { name: "Forms", icon: SiGoogleforms, link: "/forms" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () =>
      navList.map((nav) => (
        <li
          key={nav.link}
          className="hover:bg-[#050C34] p-2 rounded-sm transition-all duration-150"
        >
          <Link href={nav.link} aria-label={nav.name}>
            <div className="flex items-center gap-3">
              <span>
                <nav.icon className="size-6 max-sm:size-5 block" />
              </span>
              <span
                className={`${
                  isOpen ? "inline-block opacity-100" : "hidden opacity-0"
                } transition-all duration-300 ease-in-out`}
              >
                {nav.name}
              </span>
            </div>
          </Link>
        </li>
      )),
    [isOpen]
  );

  return (
    <nav
      className={`${
        isOpen ? "w-52 max-md:absolute" : "w-[4.5rem] max-sm:w-[3.5rem]"
      } fixed inset-y-0 left-0 h-screen bg-[#0A1551] text-white p-4 max-sm:p-2 transition-all duration-300 ease-in-out flex-shrink-0 z-40`}
    >
      <div className="h-full flex flex-col justify-between">
        <ul className="space-y-2 font-semibold text-base max-sm:text-sm">
          {navItems}
        </ul>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="hover:bg-[#050C34] p-2 rounded-sm transition-all duration-150"
          aria-label="Toggle Navigation"
        >
          <RxDoubleArrowLeft
            className={`size-6 max-sm:size-5 ${
              isOpen ? "rotate-0" : "rotate-180"
            } transition-transform duration-300 ease-in-out`}
          />
        </button>
      </div>
    </nav>
  );
};
