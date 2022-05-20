import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function CategoryButton() {
  return (
    <div className="px-8 py-4 bg-primary flex items-center  cursor-pointer relative group">
      <AiOutlineMenu className="text-white" />
      <span className="ml-2 text-white">All categories</span>
      <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Shoes</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Men</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Women</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Electronics</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">HeadPhones</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Watches</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Computer</span>
        </a>
        <a
          href="/#"
          className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
        >
          <img src="/images/icons/" alt="" className="w-5 h-5 object-contain" />
          <span className="ml-6 text-gray-600 text-sm">Mobile</span>
        </a>
      </div>
    </div>
  );
}

export default CategoryButton;
