import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.component";
import Navigation from "./Navigation.component";

function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
