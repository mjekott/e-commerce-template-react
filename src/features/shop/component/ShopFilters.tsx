import React from "react";

function ShopFilters() {
  return (
    <div className="w-full overflow-hidden rounded bg-white px-4 pb-6 shadow">
      <div className="space-y-5 divide-y divide-gray-200">
        <div className="py-2">
          <h3 className="mb-3 text-xl font-medium uppercase text-gray-800">
            categories
          </h3>
          <div className="space-y-2">
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none uppercase"
              >
                Shoes
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                Men
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                Women
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                Electronic
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                HeadPhone
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
          </div>
        </div>
        <div className="py-2">
          <h3 className="mb-3 text-xl font-medium uppercase text-gray-800">
            brands
          </h3>
          <div className="space-y-2">
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none uppercase"
              >
                Adidas
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                Nike
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                Easy
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
            <div className="flex w-full items-center">
              <input type="checkbox" id="cat-1" className="accent-primary" />
              <label
                htmlFor="cat-1"
                className="ml-2 cursor-pointer select-none"
              >
                Puma
              </label>
              <span className="ml-auto text-xs text-gray-600">(15)</span>
            </div>
          </div>
        </div>
        <div className="py-2">
          <h3 className="mb-3 text-xl font-medium uppercase text-gray-800">
            Price
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <input
              type="number"
              className="w-full  rounded border border-gray-300 px-3 py-1 text-sm text-gray-600 shadow-sm outline-none focus:border-primary focus:ring-0"
              min={0}
              step="100"
              placeholder="min"
            />
            <span className="mx-3">-</span>
            <input
              type="number"
              step="100"
              className="w-full  rounded border border-gray-300 px-3 py-1 text-sm text-gray-600 shadow-sm outline-none focus:border-primary focus:ring-0"
              max={10000}
              placeholder="max"
            />
          </div>
        </div>
        <div className="py-2">
          <h3 className="mb-3 text-xl font-medium uppercase text-gray-800">
            Size
          </h3>
          <div className="flex items-center space-x-2">
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-1" />
              <label
                htmlFor="size-1"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-2" />
              <label
                htmlFor="size-2"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-10" />
              <label
                htmlFor="size-10"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-3" />
              <label
                htmlFor="size-3"
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm border  p-1 text-xs  shadow-md"
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" className="hidden" id="size-4" />
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
          <h3 className="mb-3 text-xl font-medium uppercase text-gray-800">
            Color
          </h3>
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
      </div>
    </div>
  );
}

export default ShopFilters;
