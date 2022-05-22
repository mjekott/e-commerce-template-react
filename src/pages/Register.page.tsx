import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container py-8">
      <div className="mx-auto  max-w-lg rounded border border-gray-300 p-7 shadow">
        <h2 className="mb-1 text-2xl font-medium uppercase">
          Create an account
        </h2>
        <p className="mb-6  text-sm text-gray-600">
          Register here if you don't have an account
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
            >
              Email Adress
            </label>
            <input
              id="email"
              type="text"
              className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              placeholder="example@mail.com"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              placeholder="type password"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              placeholder="confirm your password"
            />
          </div>

          <label htmlFor="remember-me" className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="accent-primary"
            />
            <p className="ml-2 text-sm text-gray-600">
              I have read and agree to the{" "}
              <span className="text-primary">terms & conditon</span>
            </p>
          </label>

          <button className="block w-full border border-primary bg-primary py-3 px-4 text-white hover:bg-transparent hover:text-primary">
            Create an account
          </button>
        </form>
        <div className="relative mt-5 flex justify-center">
          <div className="relative z-10 bg-white px-3 uppercase text-gray-600">
            Or Create an account with
          </div>
          <div className="absolute left-0 top-3 w-full border-b border-gray-300"></div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-8">
          <button className="bg-blue-600 py-2 px-4 uppercase text-white hover:bg-blue-700">
            facebook
          </button>
          <button className="bg-red-600 py-2 px-4 uppercase text-white hover:bg-red-700">
            google
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
