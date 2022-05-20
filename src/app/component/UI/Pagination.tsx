import React from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function Pagination() {
  return (
    <div className="mt-2 flex w-full items-center justify-center p-4">
      <ul className="flex items-center justify-center space-x-4">
        <li className="flex h-8 w-8 items-center justify-center border border-gray-300">
          <HiArrowNarrowLeft />
        </li>
        <li className="flex h-8 w-8 items-center justify-center border border-gray-300 bg-primary text-white">
          1
        </li>
        <li className="flex h-8 w-8 items-center justify-center border border-gray-300 ">
          2
        </li>
        <li className="flex h-8 w-8 items-center justify-center border border-gray-300 ">
          3
        </li>
        <li className="flex h-8 w-8 items-center justify-center border border-gray-300 ">
          4
        </li>
        <li className="flex h-8 w-8 items-center justify-center border border-gray-300">
          <HiArrowNarrowRight />
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
