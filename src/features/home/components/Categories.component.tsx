import React from "react";

function Categories() {
  return (
    <div className="container py-16">
      <h2 className="mb-6 text-3xl font-medium uppercase text-gray-800">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="group relative overflow-hidden rounded-sm">
          <img src="/images/categories/bedroom.jpeg" alt="" className="w-ful" />
          <a
            href="/#"
            className="absolute inset-0 flex items-center justify-center
            bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition duration-300 group-hover:bg-opacity-60"
          >
            Bedroom
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-sm">
          <img src="/images/categories/outdoor.jpeg" alt="" className="w-ful" />
          <a
            href="/#"
            className="absolute inset-0 flex items-center justify-center
            bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition duration-300 group-hover:bg-opacity-60"
          >
            Sofa
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-sm">
          <img src="/images/categories/outdoor.jpeg" alt="" className="w-ful" />
          <a
            href="/#"
            className="absolute inset-0 flex items-center justify-center
            bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition duration-300 group-hover:bg-opacity-60"
          >
            Outdoor
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-sm">
          <img src="/images/categories/office.jpeg" alt="" className="w-ful" />
          <a
            href="/#"
            className="absolute inset-0 flex items-center justify-center
            bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition duration-300 group-hover:bg-opacity-60"
          >
            Office
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-sm">
          <img
            src="/images/categories/mattress.jpeg"
            alt=""
            className="w-ful"
          />
          <a
            href="/#"
            className="absolute inset-0 flex items-center justify-center
            bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition duration-300 group-hover:bg-opacity-60"
          >
            mattress
          </a>
        </div>
        <div className="group relative overflow-hidden rounded-sm">
          <img src="/images/categories/living.jpeg" alt="" className="w-ful" />
          <a
            href="/#"
            className="absolute inset-0 flex items-center justify-center
            bg-black bg-opacity-40 font-roboto text-xl font-medium capitalize text-white transition duration-300 group-hover:bg-opacity-60"
          >
            Living & Dinning
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;
