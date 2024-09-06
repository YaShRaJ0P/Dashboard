"use client";

import React, { useState, useCallback } from "react";
import { SearchButton } from "@/components/SearchButton";
import { TbDownload } from "react-icons/tb";
import { Select } from "../../components/Select";
import { ActivityTable } from "@/components/ActivityTable";
import { FAKE_ACTIVITY_DATA } from "../fakeActivityData";

const lastDays = [
  { id: 1, name: "Last 7 Days", value: "7" },
  { id: 2, name: "Last 14 Days", value: "14" },
  { id: 3, name: "Last 21 Days", value: "21" },
];

const users = [
  { id: 1, name: "All User", value: "all_users" },
  { id: 2, name: "Active Users", value: "active_users" },
  { id: 3, name: "Inactive Users", value: "inactive_users" },
];

const activities = [
  { id: 1, name: "All Activity", value: "all_activity" },
  { id: 2, name: "Active Activity", value: "active_activity" },
  { id: 3, name: "Inactive Activity", value: "inactive_activity" },
];

const activityDetails = [
  {
    id: 1,
    name: "Activity 1",
    count: 250,
  },
  {
    id: 2,
    name: "Activity 2",
    count: 150,
  },
  {
    id: 3,
    name: "Activity 3",
    count: 100,
  },
  {
    id: 4,
    name: "Activity 4",
    count: 50,
  },
  {
    id: 5,
    name: "Activity 5",
    count: 20,
  },
];

const Activity = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedLastDay, setSelectedLastDay] = useState(lastDays[0].value);
  const [selectedUser, setSelectedUser] = useState(users[0].value);
  const [selectedActivity, setSelectedActivity] = useState(activities[0].value);

  const handleSearchSubmit = () => {
    console.log("Search submitted with value:", searchValue);
  };

  const handleLastDayChange = (e) => {
    setSelectedLastDay(e.target.value);
  };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleActivityChange = (e) => {
    setSelectedActivity(e.target.value);
  };

  const downloadList = useCallback(() => {
    const csvContent = [
      ["Name", "Email", "Interaction", "Time Spent (min)"], // Headers
      ...FAKE_ACTIVITY_DATA.map((item) => [
        item.name,
        item.email,
        item.interaction,
        item.time,
      ]), // Data rows
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "activity_data.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, []);

  return (
    <section className="bg-[#f3f3fe] h-full p-6 max-sm:p-4 max-w-full flex-grow ml-[4.5rem] max-sm:ml-[3.5rem] flex flex-col">
      <h5 className="text-base font-bold text-gray-800">Last 7 days</h5>
      <hr />
      <div className="flex justify-center items-center pt-2 w-full gap-4 flex-wrap mb-2">
        {activityDetails.map((activity) => (
          <div
            key={activity.id}
            className="flex flex-col items-center justify-center p-4 bg-white shadow-sm rounded-sm w-[15vw] min-w-[150px]"
          >
            <p className="text-base text-gray-800">{activity.name}</p>
            <p className="text-gray-600 text-lg font-bold">{activity.count}</p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">Activity Logs</h3>
      <hr />
      <div className="flex flex-row w-full justify-between items-center my-2">
        <SearchButton
          value={searchValue}
          setValue={setSearchValue}
          onSubmit={handleSearchSubmit}
        />
        <button
          onClick={downloadList}
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded-sm shadow-sm flex items-center gap-3 max-md:text-sm"
        >
          <TbDownload />
          Download
        </button>
      </div>

      <div className="flex flex-row w-full gap-4 my-2 flex-wrap">
        <Select
          name={lastDays}
          value={selectedLastDay}
          onChange={handleLastDayChange}
        />
        <Select name={users} value={selectedUser} onChange={handleUserChange} />
        <Select
          name={activities}
          value={selectedActivity}
          onChange={handleActivityChange}
        />
      </div>

      <ActivityTable />
    </section>
  );
};

export default Activity;
