import React from "react";
import Layout from "../app/layout/component";
import Banner from "../features/home/components/Banner.component";
import Categories from "../features/home/components/Categories.component";
import Features from "../features/home/components/Features.component";
import ProductRow from "../features/products/component/ProductRow.component";

function Home() {
  return (
    <Layout>
      <Banner />
      <Features />
      <Categories />
      <ProductRow />
    </Layout>
  );
}

export default Home;
