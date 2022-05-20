import React from "react";
import { ReactComponent as Support } from "../../../app/icons/support.svg";
import { ReactComponent as Delivery } from "../../../app/icons/delivery-van.svg";
import { ReactComponent as MoneyReturns } from "../../../app/icons/money-returns.svg";
function Features() {
  return (
    <div className="container py-16">
      <div className="mx-auto grid w-10/12 grid-cols-3 justify-center gap-6">
        <div className="flex items-center justify-center gap-5 rounded-sm border border-primary px-3 py-6">
          <Delivery className="h-12 w-12 fill-current text-primary" />
          <div>
            <h4 className="text-lg font-medium capitalize">Free Shopping</h4>
            <p className="text-sm text-gray-500">order over $200</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 rounded-sm border border-primary px-3 py-6">
          <MoneyReturns className="h-12 w-12 fill-current text-primary" />
          <div>
            <h4 className="text-lg font-medium capitalize">Money Returns</h4>
            <p className="text-sm text-gray-500">order over $200</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 rounded-sm border border-primary px-3 py-6">
          <Support className="h-12 w-12 fill-current text-primary" />
          <div>
            <h4 className="text-lg font-medium capitalize">24/7 Support</h4>
            <p className="text-sm text-gray-500">order over $200</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
