"use client";
import { useAppContext } from "@/utils/context";
import React, { useState } from "react";

export const Login = () => {
  const { updateIsAuthenticated } = useAppContext();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // Array containing the form fields data
  const formFields = [
    { name: "name", type: "text", placeholder: "Tony Stark", label: "Name" },
    {
      name: "phone",
      type: "tel",
      placeholder: "1112223334",
      label: "Phone",
    },
    {
      name: "email",
      type: "email",
      placeholder: "myname@example.com",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "••••••••",
      label: "Password",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //API request to check if it is accepted update below
    updateIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-full">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Log In
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[#050C34] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <div>
            <button
              type="submit"
              className="w-full bg-[#0A1551] text-white py-2 rounded-md font-semibold hover:bg-[#050C34] focus:outline-none focus:ring-2 focus:ring-[#112fd8]"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
