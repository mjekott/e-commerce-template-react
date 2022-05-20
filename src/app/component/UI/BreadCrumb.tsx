import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineRight } from "react-icons/ai";
type Props = {
  page: string;
};

function BreadCrumb({ page }: Props) {
  return (
    <div className="container flex items-center space-x-2 py-4">
      <Link to="/" className="text-base text-primary">
        <AiOutlineHome />
      </Link>
      <AiOutlineRight className="text-gray-700" />
      <p className="font-medium capitalize text-gray-700">{page}</p>
    </div>
  );
}

export default BreadCrumb;
