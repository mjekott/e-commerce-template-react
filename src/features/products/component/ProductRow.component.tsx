import React from "react";
import ProductCard from "./ProductCard";

function ProductRow() {
  return (
    <section className="container pb-16">
      <h2 className="mb-6 text-2xl font-medium uppercase text-gray-800">
        top new arrival
      </h2>
      <div className="grid grid-cols-4 gap-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default ProductRow;
