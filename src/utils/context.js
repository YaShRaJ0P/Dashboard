"use client";

import React, { createContext, useState, useContext } from "react";

// Initial state for the context
const defaultProvider = {
  isAuthenticated: false,
};

// Create the context
const Context = createContext(defaultProvider);

// Create a provider component
export const ContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultProvider.isAuthenticated
  );

  const updateIsAuthenticated = (isAuthenticationState) => {
    setIsAuthenticated(isAuthenticationState);
  };

  const values = {
    isAuthenticated,
    updateIsAuthenticated,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

// Custom hook for consuming context values
export const useAppContext = () => useContext(Context);
