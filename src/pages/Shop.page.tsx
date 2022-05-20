import React from "react";
import { AiFillAppstore, AiOutlineUnorderedList } from "react-icons/ai";
import BreadCrumb from "../app/component/UI/BreadCrumb";
import Pagination from "../app/component/UI/Pagination";
import ProductCard from "../features/products/component/ProductCard";
import ShopFilters from "../features/shop/component/ShopFilters";

function Shop() {
  return (
    <section>
      <BreadCrumb page="shop" />
      <div className="container grid grid-cols-4 items-start gap-6 pt-4 pb-16">
        <div className="hidden lg:col-span-1 lg:block">
          <ShopFilters />
        </div>

        <div className="col-span-4 lg:col-span-3">
          <div className=" flex w-full items-center">
            <select
              className="w-44 appearance-none rounded border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600
           shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary"
            >
              <option>Default sorting</option>
              <option>Price low-high</option>
              <option>Price high-low</option>
              <option>latest product</option>
            </select>
            <div className="ml-auto flex gap-2">
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center  rounded border-primary bg-primary text-white">
                <AiFillAppstore />
              </div>
              <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded border border-gray-500 text-gray-500">
                <AiOutlineUnorderedList />
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-1  gap-6 md:grid-cols-2  lg:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default Shop;
