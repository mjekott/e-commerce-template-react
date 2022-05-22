import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.component";
import Header from "./Header.component";
import Navigation from "./Navigation.component";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
