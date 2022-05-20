import React from "react";
import Layout from "../app/layout/component";
import Banner from "../features/home/components/Banner.component";
import Categories from "../features/home/components/Categories.component";
import Features from "../features/home/components/Features.component";

function Home() {
  return (
    <Layout>
      <Banner />
      <Features />
      <Categories />
    </Layout>
  );
}

export default Home;
