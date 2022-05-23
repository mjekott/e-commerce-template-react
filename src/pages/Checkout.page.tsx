import { AiOutlineHome } from "react-icons/ai";
import BreadCrumb from "../app/component/UI/BreadCrumb";

function Checkout() {
  return (
    <section className="pb-8">
      <BreadCrumb
        data={[
          { text: <AiOutlineHome />, href: "/" },
          { text: "Shop", href: "/shop" },
          { text: "Checkout", href: "/checkout" },
        ]}
      />
      <div className="container grid grid-cols-3 gap-6">
        <div className="col-span-3 lg:col-span-2">
          <div className="mb-4 bg-[#E9E4E4] p-2 font-bold">
            <h2>Billing Details</h2>
          </div>
          <form className="grid grid-cols-2 gap-4">
            <div className="col-span-2 flex flex-col lg:col-span-1">
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstNmae"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col lg:col-span-1">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Last Name
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600"
              >
                Company Name
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Country/Religion
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Street Address
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Town/City
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Zip Code
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Phone Number
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-gray-600 after:ml-1 after:text-red-600 after:content-['*']"
              >
                Email Address
              </label>
              <input
                type="password"
                id="password"
                className=" block border border-gray-300 bg-gray-50 px-4
              py-3 outline-none placeholder:text-gray-400 focus:border-primary"
              />
            </div>
          </form>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="mb-4 bg-[#E9E4E4]  p-2 font-bold">
            <h2>Your Order</h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-200 border border-gray-300 p-3 shadow">
            <h2 className="py-2 text-lg uppercase">Product</h2>
            <div className="py-2">
              <div className=" flex items-center justify-between py-2">
                <div>
                  <h3 className="font-medium">Beigh Knitted Shoes</h3>
                  <p className="text-gray-600">Size: M</p>
                </div>
                <p className="font-medium">X1</p>
                <p className="font-medium">$84.00</p>
              </div>
              <div className=" flex items-center justify-between py-4">
                <div>
                  <h3 className="font-medium">Beigh Knitted Shoes</h3>
                  <p className="text-gray-600">Size: M</p>
                </div>
                <p className="font-medium">X1</p>
                <p className="font-medium">$84.00</p>
              </div>
              <div className=" flex items-center justify-between py-4">
                <div>
                  <h3 className="font-medium">Beigh Knitted Shoes</h3>
                  <p className="text-gray-600">Size: M</p>
                </div>
                <p className="font-medium">X1</p>
                <p className="font-medium">$84.00</p>
              </div>
              <div className=" flex items-center justify-between py-4">
                <h3 className="font-medium uppercase">subtotal</h3>
                <p className="font-medium">$200.00</p>
              </div>
            </div>
            <div className=" flex items-center justify-between py-4">
              <h3 className="font-medium uppercase">shipping</h3>
              <p className="font-medium">FREE</p>
            </div>
            <div className=" flex items-center justify-between py-4">
              <h3 className="font-medium uppercase">Total</h3>
              <p className="font-medium">$1400.00</p>
            </div>
            <div className=" flex flex-col space-y-5 py-2">
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

              <button className="block w-full rounded border border-primary bg-primary py-3 px-4 uppercase text-white hover:bg-transparent hover:text-primary">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
