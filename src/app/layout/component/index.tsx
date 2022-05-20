import React from "react";
import Header from "./Header.component";
import Navigation from "./Navigation.component";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
