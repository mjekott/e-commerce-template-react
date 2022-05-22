import React from "react";
import CategoryButton from "./CategoryButton.component";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <CategoryButton />
        {/* nanigation links */}
        <div className="flex flex-1 items-center justify-between pl-12">
          <div className="items-center space-x-6 capitalize">
            <Link to="/" className="text-gray-200 transition hover:text-white">
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-200 transition hover:text-white"
            >
              Shop
            </Link>
            <Link
              to="/about-us"
              className="text-gray-200 transition hover:text-white"
            >
              About us
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-200 transition hover:text-white"
            >
              Contact us
            </Link>
          </div>
          <div>
            <Link
              to="/login"
              className="text-gray-200 transition hover:text-white"
            >
              Login
            </Link>
            <span className="mx-1 text-white">/</span>
            <Link
              to="/register"
              className="text-gray-200 transition hover:text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
