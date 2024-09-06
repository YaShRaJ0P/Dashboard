"use client";

import React, { useState } from "react";
import { UserTable } from "@/components/UserTable";
import { SearchButton } from "@/components/SearchButton";
import { AddUserWithModal } from "@/components/AddUserWithModal";
import { Select } from "@/components/Select";

const users = [
  { id: 1, name: "All User", value: "all_users" },
  { id: 2, name: "Active Users", value: "active_users" },
  { id: 3, name: "Inactive Users", value: "inactive_users" },
];

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(users[0].value);
  const [selectAll, setSelectAll] = useState(false);

  const handleSearchSubmit = () => {
    console.log("Search submitted with value:", searchValue);
  };

  const handleUserSelect = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleSelectAllChange = (e) => {
    setSelectAll(e.target.checked);
  };

  return (
    <section className="bg-[#f3f3fe] h-full p-6 max-sm:p-4 max-w-full flex-grow ml-[4.5rem] max-sm:ml-[3.5rem] flex flex-col">
      <h3 className="text-2xl font-semibold text-gray-800">Users</h3>
      <hr />
      <div className="flex justify-between items-center pt-2 h-13">
        <SearchButton
          value={searchValue}
          setValue={setSearchValue}
          onSubmit={handleSearchSubmit}
        />
        <AddUserWithModal />
      </div>
      <div className="flex justify-between items-center pt-2 h-13 flex-wrap">
        <div className="flex flex-row items-center justify-center">
          <input
            type="checkbox"
            name="select"
            id="select"
            className="cursor-pointer"
            checked={selectAll}
            onChange={handleSelectAllChange}
          />
          <label
            htmlFor="select"
            className="text-gray-600 text-sm ml-2 cursor-pointer"
          >
            Select All
          </label>
        </div>
        <Select name={users} value={selectedUser} onChange={handleUserSelect} />
      </div>
      <UserTable />
    </section>
  );
};

export default Dashboard;
