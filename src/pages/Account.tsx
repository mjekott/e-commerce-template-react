import React from "react";
import {
  AiFillGift,
  AiFillProfile,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineLogout,
} from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { Outlet } from "react-router-dom";
import BreadCrumb from "../app/component/UI/BreadCrumb";

function Account() {
  return (
    <section>
      <BreadCrumb
        data={[
          { text: <AiOutlineHome />, href: "/" },
          { text: "My Account", href: "account" },
        ]}
      />
      <div className="container grid grid-cols-4 gap-3 py-4">
        <div className="col-span-4 lg:col-span-1">
          <div className="flex  items-center gap-4 px-4 py-3 shadow">
            <div className="rounded-full border border-gray-300 p-1">
              <img
                src="https://avatars.githubusercontent.com/u/16419577?s=40&v=4"
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <p className="flex-1">
              Hello, <br />
              <span className="font-medium"> John Doe</span>
            </p>
          </div>
          <div className="hidden space-y-4 divide-y divide-gray-200 rounded p-4  text-gray-600 shadow lg:block">
            <ul className=" space-y-1 rounded bg-white py-2 text-gray-600">
              <li className="relative cursor-pointer  px-6 text-sm text-primary hover:text-primary">
                Manage Account
                <span className="absolute -left-1 top-0">
                  <AiFillProfile className="h-5 text-primary" />
                </span>
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                Profile information
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                Manage Address
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                Change Password
              </li>
            </ul>
            <ul className=" space-y-1 rounded bg-white py-2 text-gray-600">
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                My Order History
                <span className="absolute -left-1 top-0">
                  <AiFillGift className="h-5 text-gray-600" />
                </span>
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                My Returns
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                My Cancellation
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                My Reviews
              </li>
            </ul>
            <ul className="space-y-1 rounded bg-white py-2  text-gray-600">
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                Payment Methods
                <span className="absolute -left-1 top-0">
                  <MdPayment className="h-5 text-gray-600" />
                </span>
              </li>
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                Voucher
              </li>
            </ul>
            <ul className=" space-y-1 rounded bg-white py-2 text-gray-600">
              <li className="relative cursor-pointer  px-6 text-sm hover:text-primary">
                My Wishlist
                <span className="absolute -left-1 top-0">
                  <AiOutlineHeart className="h-5 text-gray-600" />
                </span>
              </li>
            </ul>
            <ul className="space-y-1 rounded bg-white py-2 text-gray-600">
              <li className="relative px-6  text-sm">
                Logout
                <span className="absolute -left-1 top-0">
                  <AiOutlineLogout className="h-5 text-gray-600" />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Account;
