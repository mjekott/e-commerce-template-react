import React from "react";
import Header from "./Header.component";
import Navigation from "./Navigation.component";

function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
    </div>
  );
}

export default Layout;
