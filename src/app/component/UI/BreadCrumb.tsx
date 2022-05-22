import React, { ReactElement } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {
  data: {
    text: string | ReactElement;
    href: string;
  }[];
};

function BreadCrumb({ data }: Props) {
  const lastIndex = data.length - 1;
  return (
    <ul className="container flex items-center space-x-1 py-4">
      {data.map((item, index) => (
        <li key={index} className="flex items-center justify-center">
          <Link to={item.href}>
            <p
              className={`text-sm font-normal capitalize ${
                lastIndex === index ? "text-gray-800" : "text-primary"
              }`}
            >
              {item.text}
            </p>
          </Link>
          {lastIndex !== index && (
            <AiOutlineRight className=" h-3 w-5 text-gray-700" />
          )}
        </li>
      ))}
    </ul>
  );
}

export default BreadCrumb;
