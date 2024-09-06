"use client";
import React, { useMemo } from "react";
import { FAKE_ACTIVITY_DATA } from "../app/fakeActivityData";
import { useTable, useSortBy, usePagination } from "react-table";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import Image from "next/image";

export const ActivityTable = () => {
  const data = useMemo(() => FAKE_ACTIVITY_DATA, []);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ row: { original } }) => (
          <div className="flex items-center">
            <Image
              src={original.image}
              alt={`${original.name}'s avatar`}
              width={40}
              height={40}
              className="rounded-full object-cover mr-3"
            />
            <div>
              <div className="text-sm font-medium text-gray-800">
                {original.name}
              </div>
              <div className="text-xs text-gray-600">{original.email}</div>
            </div>
          </div>
        ),
      },
      { Header: "Interaction", accessor: "interaction" },
      { Header: "Time Spent (min)", accessor: "time" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className="w-full h-full relative overflow-x-auto mt-2 ">
      <div className="min-w-full">
        <table
          {...getTableProps()}
          className="w-full border-collapse bg-white rounded-sm"
        >
          <thead className="bg-gray-200 sticky top-0 z-10">
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.id}
                    className="text-left p-1 text-gray-700 font-semibold cursor-pointer whitespace-pre"
                  >
                    <div className="flex items-center gap-1">
                      <span className="inline">{column.render("Header")}</span>
                      <div className="flex flex-col">
                        <IoIosArrowUp
                          className={`size-3 ${
                            column.isSorted
                              ? !column.isSortedDesc
                                ? "text-gray-500"
                                : "text-gray-800"
                              : "text-gray-500"
                          }`}
                        />
                        <IoIosArrowDown
                          className={`size-3 ${
                            column.isSorted
                              ? column.isSortedDesc
                                ? "text-gray-500"
                                : "text-gray-800"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-gray-800">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className={`${
                    row.index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors`}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className="p-1 border-b border-gray-200 text-sm sm:text-base whitespace-pre w-full max-sm:pr-20"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>{" "}
      {/* Pagination Controls */}
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-row justify-center items-center gap-1">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="p-1 hover:bg-gray-200 text-gray-900 rounded transition-all duration-300 disabled:opacity-0"
          >
            <HiChevronDoubleLeft />
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="p-1 hover:bg-gray-200 text-gray-900 rounded transition-all duration-300 disabled:opacity-0"
          >
            <HiChevronLeft />
          </button>
          <span className="text-sm sm:text-base">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="p-1 hover:bg-gray-200 text-gray-900 rounded transition-all duration-300 disabled:opacity-0"
          >
            <HiChevronRight />
          </button>
          <button
            onClick={() => gotoPage(pageOptions.length - 1)}
            disabled={!canNextPage}
            className="p-1 hover:bg-gray-200 text-gray-900 rounded transition-all duration-300 disabled:opacity-0"
          >
            <HiChevronDoubleRight />
          </button>
        </div>

        <div className="mt-2 sm:mt-0">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-4 py-2 max-sm:px-2 max-sm:py-1 border rounded w-full sm:w-auto"
          >
            {[10, 20, 30, 40].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
