import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="border-t border-gray-100 pt-16">
      <div className="container grid grid-cols-3 gap-8 pb-16">
        <div className="col-span-1 space-y-8">
          <img src="/images/logo.png" alt="logo" className="w-10" />
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            aliquam aut rem! Placeat ea, commodi reprehenderit voluptatem
            suscipit alias est magnam repellat ipsam! Deleniti blanditiis fugit
            nam nostrum. Magni, vero?
          </p>
          <div className="flex space-x-6">
            <a href="/#">
              <AiFillLinkedin className="text-gray-400 hover:text-gray-500" />
            </a>
            <a href="/#">
              <AiFillTwitterCircle className="text-gray-400 hover:text-gray-500" />
            </a>
            <a href="/#">
              <AiFillFacebook className="text-gray-400 hover:text-gray-500" />
            </a>
            <a href="/#">
              <AiFillInstagram className="text-gray-400 hover:text-gray-500" />
            </a>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Solutions
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Marketing
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Analytics
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Commerce
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Insights
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Solutions
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Marketing
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Analytics
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Commerce
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Insights
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Solutions
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Marketing
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Analytics
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Commerce
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Insights
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Solutions
            </h3>
            <div className="mt-4 space-y-4">
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Marketing
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Analytics
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Commerce
              </a>
              <a
                href="/#"
                className="block text-base text-gray-500 hover:text-gray-900"
              >
                Insights
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">&copy; Shopper - All Rights Reserved</p>
          <div>
            <img src="/images/logo.png" alt="logo" className="w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
