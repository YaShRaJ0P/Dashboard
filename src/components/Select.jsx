import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Select = ({ name, value, onChange }) => {
  return (
    <div className="relative inline-block">
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block px-2 py-1 outline-none pr-10 border-2 border-gray-900 appearance-none rounded text-gray-900"
      >
        {name.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="absolute top-2/4 right-2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
    </div>
  );
};
