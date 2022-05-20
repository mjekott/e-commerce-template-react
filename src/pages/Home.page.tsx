import React from "react";
import Banner from "../features/home/components/Banner.component";
import Categories from "../features/home/components/Categories.component";
import Features from "../features/home/components/Features.component";
import ProductRow from "../features/products/component/ProductRow.component";

function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <ProductRow />
    </>
  );
}

export default Home;
