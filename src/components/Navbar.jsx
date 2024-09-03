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
                <nav.icon className="size-6 block" />
              </span>
              <span
                className={`${
                  isOpen ? "inline-block" : "hidden"
                } transition-all duration-1000`}
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
        isOpen ? "w-52" : " w-[4.5rem]"
      } h-screen bg-[#0A1551] text-white px-4 py-4 transition-all duration-300`}
    >
      <div className="h-full flex flex-col justify-between">
        <ul className="space-y-2 font-semibold text-base">{navItems}</ul>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="hover:bg-[#050C34] p-2 rounded-sm transition-all duration-150"
          aria-label="Toggle Navigation"
        >
          <RxDoubleArrowLeft
            className={`size-6 ${
              isOpen ? "rotate-0" : "rotate-180"
            } transition-transform duration-300`}
          />
        </button>
      </div>
    </nav>
  );
};
