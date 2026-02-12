import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/signup/SignUpPage";
import AboutPage from "./landing_page/about/AboutPage";
import Products from "./landing_page/products/Productpage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";

import "./main.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Error from "./landing_page/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/support" element={<Support />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
