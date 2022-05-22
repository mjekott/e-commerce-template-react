import React from "react";
import { Link } from "react-router-dom";

function ManageProfile() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="py-2 px-4 shadow">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-medium">Personal Profile</h2>
          <Link to="/" className="text-primary hover:underline">
            Edit
          </Link>
        </div>
        <div>
          <h3 className="mb-2 font-medium uppercase">John Doe</h3>
          <p className="mb-1 lowercase">johndoe@mail.com</p>
          <p>(123) 456-789</p>
        </div>
      </div>
      <div className="py-2 px-4 shadow">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-medium">Shipping Address</h2>
          <Link to="/" className="text-primary hover:underline">
            Edit
          </Link>
        </div>
        <div className="capitalize">
          <h3 className="mb-2 font-medium ">Ralph Bohner</h3>
          <p className="mb-1 ">3 Adebisi Street</p>
          <p className="mb-1 ">Lagos,Nigeria</p>
        </div>
      </div>
      <div className="py-2 px-4 shadow">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-medium">Billing Address</h2>
          <Link to="/" className="text-primary hover:underline">
            Edit
          </Link>
        </div>
        <div className="capitalize">
          <h3 className="mb-2 font-medium">Ralph Bohner</h3>
          <p className="mb-1">3 Adebisi Street</p>
          <p className="mb-1">Lagos,Nigeria</p>
        </div>
      </div>
    </div>
  );
}

export default ManageProfile;
