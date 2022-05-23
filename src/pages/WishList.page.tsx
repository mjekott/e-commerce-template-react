import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";

function WishList() {
  return (
    <section>
      <div className="col-span-9 space-y-4">
        <div className="border-gay-200 flex flex-col gap-3 rounded-lg border p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="w-28 flex-shrink-0">
            <img src="/images/products/product1.jpeg" alt="product" />
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-xl font-medium uppercase text-gray-800">
              Italian L Shape Sofa
            </h2>
            <p className="text-sm text-gray-500">
              Availablity <span className="text-green-600">In Stock</span>
            </p>
          </div>
          <p className="text-lg font-semibold text-primary">$320.00</p>
          <div className="flex items-center justify-between">
            <button
              className="flex items-center justify-center rounded-lg border border-primary
             bg-primary py-2 px-4 uppercase text-white transition duration-700 hover:bg-transparent hover:text-primary"
            >
              <AiOutlineShoppingCart className="h-5 w-5" />
              <span className="ml-2">Add to cart</span>
            </button>
            <button className="h-5 w-5 lg:ml-5">
              <AiOutlineDelete className="h-full w-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishList;
