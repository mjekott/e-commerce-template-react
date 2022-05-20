import React from "react";
import CategoryButton from "./CateggoryButton.component";

function Navigation() {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <CategoryButton />
        {/* nanigation links */}
        <div className="flex items-center justify-between flex-1 pl-12">
          <div className="items-center space-x-6 capitalize">
            <a href="/#" className="text-gray-200 hover:text-white transition">
              Home
            </a>
            <a href="/#" className="text-gray-200 hover:text-white transition">
              Shop
            </a>
            <a href="/#" className="text-gray-200 hover:text-white transition">
              About us
            </a>
            <a href="/#" className="text-gray-200 hover:text-white transition">
              Contact us
            </a>
          </div>
          <a href="/#" className="text-gray-200 hover:text-white transition">
            Login/Register
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
