import React from "react";
import BreadCrumb from "../app/component/UI/BreadCrumb";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Rating } from "react-simple-star-rating";

function ProductView() {
  return (
    <section>
      <BreadCrumb
        data={[
          { text: <AiOutlineHome />, href: "/" },
          { text: "Shop", href: "/shop" },
          { text: "Sweet Chair", href: "/product/:1" },
        ]}
      />
      <div className="container grid grid-cols-2 gap-8 py-4">
        {/* product image */}
        <div>
          <img
            src="/images/products/product1.jpeg"
            alt="product"
            className="w-full"
          />
          <div className="mt-4 grid grid-cols-5 gap-4">
            <img
              src="/images/products/product1.jpeg"
              alt="product"
              className="w-full cursor-pointer border border-primary"
            />
            <img
              src="/images/products/product1.jpeg"
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src="/images/products/product1.jpeg"
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src="/images/products/product1.jpeg"
              alt="product"
              className="w-full cursor-pointer border"
            />
            <img
              src="/images/products/product1.jpeg"
              alt="product"
              className="w-full cursor-pointer border"
            />
          </div>
        </div>
        {/* product content */}
        <div className="space-y-3">
          <h2 className="mb-2 text-3xl font-medium ">Italian L Shape Sofa</h2>
          <div className="flex items-center">
            <Rating size={25} ratingValue={100} readonly />
            <span className=" ml-2 text-xs text-gray-500">(60)</span>
          </div>
          <ul className="mt-2">
            <li className="space-x-2 font-semibold text-gray-800">
              <span>Avilablity:</span>
              <span className="text-xs text-green-600">In Stock</span>
            </li>
            <li className="space-x-2 font-semibold text-gray-800">
              <span>Brand:</span>
              <span className="text-xs text-gray-600">Apex</span>
            </li>
            <li className="space-x-2 font-semibold text-gray-800">
              <span>Category:</span>
              <span className="text-xs text-gray-600">Sofa</span>
            </li>
            <li className="space-x-2 font-semibold text-gray-800">
              <span>SKU:</span>
              <span className="text-xs text-gray-600">BE45VGRT</span>
            </li>
          </ul>
          <div className="mt-4 flex items-baseline space-x-2 font-roboto">
            <p className="text-2xl font-semibold text-primary">$45</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt
            sequi atque nesciunt velit quae veritatis obcaecati facere non eos
            expedita ab at, porro sit cum deleniti tenetur eligendi quibusdam.
          </p>
          <div className="py-2">
            <h3 className="mb-3 text-sm font-medium uppercase text-gray-800">
              Size
            </h3>
            <div className="flex items-center space-x-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-1"
                />
                <label
                  htmlFor="size-1"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-2"
                />
                <label
                  htmlFor="size-2"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-10"
                />
                <label
                  htmlFor="size-10"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-3"
                />
                <label
                  htmlFor="size-3"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="size-4"
                />
                <label
                  htmlFor="size-4"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
          <div className="py-2">
            <h3 className="mb-3 text-sm font-medium  text-gray-800">Color</h3>
            <div className="flex items-center space-x-2">
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-1"
                />
                <label
                  htmlFor="color-1"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  bg-black p-1  text-xs shadow-md"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-2"
                />
                <label
                  htmlFor="color-2"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
                ></label>
              </div>
              <div className="color-selector">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  id="color-10"
                />
                <label
                  htmlFor="color-10"
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  bg-red-500 p-1 text-xs  shadow-md"
                ></label>
              </div>
            </div>
          </div>
          <div className="py-2">
            <h3 className="mb-3 text-sm font-medium  text-gray-800">
              Quantity
            </h3>
            <div className="flex w-max divide-x divide-gray-300 border border-gray-300">
              <button className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-xl text-gray-600">
                -
              </button>
              <div className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-xl">
                3
              </div>
              <button className="flex h-8 w-8 cursor-pointer select-none items-center justify-center text-xl">
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              className="flex items-center justify-center rounded-b border border-primary bg-primary
             px-6 py-2 uppercase text-white transition duration-700 hover:bg-transparent hover:text-primary"
            >
              <AiOutlineShoppingCart className="h-5 w-5" />
              <span className="ml-2">Add to cart</span>
            </button>
            <button
              className="flex items-center justify-center rounded-b border border-gray-300 px-6
             py-2 uppercase text-gray-500 transition duration-700 hover:bg-transparent "
            >
              <AiOutlineHeart className="h-5 w-5" />
              <span className="ml-2">Wishlist</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container pb-16">
        <h1 className="border-b border-gray-200 pb-3 font-roboto font-medium text-gray-800">
          Product details
        </h1>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae natus quidem itaque, velit cum blanditiis obcaecati.
              Architecto a, ad odit possimus sapiente perferendis, impedit
              reiciendis, culpa nostrum dolores quisquam earum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deserunt quia ut? Officiis, incidunt! Fugit, ratione voluptatem
              ea, fugiat dolores repellendus eveniet minus, quisquam qui
              cupiditate in accusantium numquam consequuntur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductView;
