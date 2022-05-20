import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillEye,
} from "react-icons/ai";
import { Rating } from "react-simple-star-rating";

function ProductCard() {
  return (
    <div className="group overflow-hidden rounded bg-white shadow">
      <div className="relative">
        <img
          src="images/products/product1.jpeg"
          alt="product"
          className="w-full"
        />
        <a
          href="/#"
          className="absolute right-1 top-1 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white  p-1 text-primary transition"
        >
          <AiOutlineHeart className="h-full w-full " />
        </a>
        <div className="invisible absolute inset-0  bg-black bg-opacity-20 transition group-hover:visible">
          <div className="relative h-full w-full">
            <a
              href="/#"
              className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gray-800 py-2 text-white"
            >
              <AiFillEye className="h-5 w-5" />
              <span className="ml-2">Quick View</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4 pt-4 pb-3">
        <a href="/#">
          <h4 className="mb-2 text-xl font-medium uppercase text-gray-800 transition ">
            Guyer chair
          </h4>
        </a>
        <div className="mb-1 flex items-baseline space-x-2 font-roboto">
          <p className="text-xl font-semibold text-primary">$45</p>
        </div>
        <div className="flex items-center">
          <Rating size={25} ratingValue={100} readonly />

          <span className=" ml-2 text-xs text-gray-500">(60)</span>
        </div>
      </div>
      <a
        href="/#"
        className="flex items-center justify-center rounded-b border border-primary
             bg-primary py-2 uppercase text-white transition duration-700 hover:bg-transparent hover:text-primary"
      >
        <AiOutlineShoppingCart className="h-5 w-5" />
        <span className="ml-2">Add to cart</span>
      </a>
    </div>
  );
}

export default ProductCard;
