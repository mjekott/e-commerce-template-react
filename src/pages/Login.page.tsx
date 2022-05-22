import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container py-8">
      <div className="mx-auto  max-w-lg rounded border border-gray-300 p-7 shadow">
        <h2 className="mb-1 text-2xl font-medium uppercase">Login</h2>
        <p className="mb-6  text-sm text-gray-600">
          Login if your a returning customer
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 block text-sm text-gray-600">
              Email Adress
            </label>
            <input
              type="text"
              className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 block text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="remember-me">
              <input
                type="checkbox"
                id="remember-me"
                className="accent-primary"
              />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className=" text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button className="block w-full border border-primary bg-primary py-3 px-4 text-white hover:bg-transparent hover:text-primary">
            Login
          </button>
        </form>
        <div className="relative mt-5 flex justify-center">
          <div className="relative z-10 bg-white px-3 uppercase text-gray-600">
            Or login with
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
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
