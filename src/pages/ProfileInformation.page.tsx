import React from "react";

function ProfileInformation() {
  return (
    <div className="py-2 px-4">
      <h2 className="mb-2 text-lg font-medium capitalize">
        Profile Information
      </h2>
      <form className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col">
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm text-gray-600"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm text-gray-600"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="birthday"
            className="mb-2 block text-sm text-gray-600"
          >
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="gender" className="mb-2 block text-sm text-gray-600">
            Gender
          </label>
          <select
            id="gender"
            className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
            placeholder="Enter your email address"
          >
            <option>select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 block text-sm text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
            placeholder="johndoe@mail.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 block text-sm text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
            placeholder="123 456-789"
          />
        </div>
        <div>
          <button className="duration-400 border border-primary bg-primary px-4 py-3 text-white transition ease-in-out hover:bg-transparent hover:text-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileInformation;
