"use client";

import { Navbar } from "@/components/Navbar";
import { useAppContext } from "@/utils/context";
import React from "react";
import { Login } from "./Login";

export const Wrapper = ({ children }) => {
  const { isAuthenticated } = useAppContext();
  return isAuthenticated ? (
    <>
      <Navbar />
      <main className="w-full ">{children}</main>
    </>
  ) : (
    <Login />
  );
};
