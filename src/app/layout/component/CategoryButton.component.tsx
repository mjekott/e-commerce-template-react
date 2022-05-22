import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function CategoryButton() {
  return (
    <div className="group relative flex cursor-pointer items-center  bg-primary px-8 py-4">
      <AiOutlineMenu className="text-white" />
      <span className="ml-2 text-white">All categories</span>
      <div className="invisible absolute left-0 top-full w-full divide-y divide-dashed divide-gray-300 bg-white py-3 opacity-0 shadow-md transition duration-300 group-hover:visible group-hover:opacity-100">
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Shoes</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Men</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Women</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Electronics</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">HeadPhones</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Watches</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Computer</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 transition hover:bg-gray-100"
        >
          <img src="/images/icons/" alt="" className="h-5 w-5 object-contain" />
          <span className="ml-6 text-sm text-gray-600">Mobile</span>
        </a>
      </div>
    </div>
  );
}

export default CategoryButton;
