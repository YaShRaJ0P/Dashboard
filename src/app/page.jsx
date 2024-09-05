import React from "react";
import { Table } from "@/components/Table";
import { SearchButton } from "@/components/SearchButton";
import { AddUserWithModal } from "@/components/AddUserWithModal";

const Dashboard = () => {
  return (
    <section className="bg-[#f3f3fe] h-full p-6 max-sm:p-4 max-w-full flex-grow ml-[4.5rem] max-sm:ml-[3.5rem]">
      <div className="w-full h-full bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <h3 className="text-2xl font-semibold text-gray-800">Users</h3>
        <hr />
        <div className="flex justify-between items-center pt-2 h-13">
          <SearchButton />
          <AddUserWithModal />
        </div>
        <div className="flex justify-between items-center pt-2 h-13 flex-wrap">
          <div className="flex flex-row items-center justify-center">
            <input
              type="checkbox"
              name="select"
              id="select"
              className="cursor-pointer"
            />
            <label
              htmlFor="select"
              className="text-gray-600 text-sm ml-2 cursor-pointer"
            >
              Select All
            </label>
          </div>
          <select
            name="user"
            id="users"
            className="p-2 outline-none pr-6 border-x-8 border-x-transparent border-b-2 border-gray-900"
          >
            <option value="">All Users</option>
            <option value="active">Active Users</option>
            <option value="inactive">Inactive Users</option>
          </select>
        </div>
        <Table />
      </div>
    </section>
  );
};

export default Dashboard;
