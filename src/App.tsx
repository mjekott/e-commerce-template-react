import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/layout/component";
import Home from "./pages/Home.page";
import Shop from "./pages/Shop.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
