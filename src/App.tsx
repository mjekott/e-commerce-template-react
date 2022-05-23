import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/layout/component";
import Home from "./pages/Home.page";
import Shop from "./pages/Shop.page";
import ProductView from "./pages/ProductView.page";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";
import Account from "./pages/Account";
import ManageProfile from "./pages/ManageProfile.page";
import ProfileInformation from "./pages/ProfileInformation.page";
import ManageAddress from "./pages/ManageAddress.page";
import ChangePassword from "./pages/ChangePassword.page";
import WishList from "./pages/WishList.page";
import Checkout from "./pages/Checkout.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />}>
            <Route path="/account" element={<ManageProfile />} />
            <Route
              path="profile-information"
              element={<ProfileInformation />}
            />
            <Route path="manage-address" element={<ManageAddress />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
